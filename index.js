// const { v4: uuidv4 } = require('uuid');

// // Function to generate random strings for fields
// function generateRandomString(length) {
//     return uuidv4().replace(/-/g, '').substring(0, length);
// }

async function sendRequests() {
    try {
        console.log('Fetching CSRF token...');
        // Step 1: Fetch CSRF token
        let csrfResponse = await fetch('http://127.0.0.1:8000/csrf-token');
        if (!csrfResponse.ok) {
            throw new Error(`Failed to fetch CSRF token: ${csrfResponse.status} ${csrfResponse.statusText}`);
        }
        let csrfData = await csrfResponse.json();
        const csrfToken = csrfData.csrf_token;
        console.log('CSRF token:', csrfToken);

        console.log('Fetching hash and timestamp...');
        // Step 2: Fetch hash and timestamp
        let batchResponse = await fetch('http://127.0.0.1:8000/api/batch/create');
        if (!batchResponse.ok) {
            throw new Error(`Failed to fetch hash and timestamp: ${batchResponse.status} ${batchResponse.statusText}`);
        }
        let batchData = await batchResponse.json();
        const hash = batchData.hash;
        const timestamp = batchData.timestamp;
        console.log('Hash:', hash);
        console.log('Timestamp:', timestamp);

        // Step 3: Prepare data for message send
        const randomValues = {
            device: "WKWKWKWK",
            email: "WKWKWKWK" + '@example.com',
            hash: hash,
            ip: "1.1.1.1",
            key: "WKWKWKWK",
            message: "WKWKWKWK",
            name: "WKWKWKWK",
            subject: "WKWKWKWK",
            timestamp: timestamp
        };
        console.log('Random values:', randomValues);

        const messageData = {
            device: randomValues.device,
            email: randomValues.email,
            hash: randomValues.hash,
            ip: randomValues.ip,
            key: randomValues.key,
            message: randomValues.message,
            name: randomValues.name,
            subject: randomValues.subject,
            timestamp: randomValues.timestamp
        };
        console.log('Message data (', csrfToken, '):', messageData);

        console.log('Sending message...');
        // Step 4: Send message with CSRF token header
        let sendMessageResponse = await fetch('http://127.0.0.1:8000/api/message/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'csrf_token': csrfToken
            },
            body: JSON.stringify(messageData)
        });

        if (!sendMessageResponse.ok) {
            throw new Error(`Failed to send message: ${sendMessageResponse.status} ${sendMessageResponse.statusText}`);
        }

        console.log('Message sent successfully.');

        return true; // Indicate success

    } catch (error) {
        console.error('Error occurred:', error.message);
        return false; // Indicate failure
    }
}

// Call sendRequests every 1 second
setInterval(async () => {
    let success = await sendRequests();
    if (success) {
        console.log('Request completed successfully.');
    } else {
        console.log('Request failed. Retrying...');
    }
}, 1000);
