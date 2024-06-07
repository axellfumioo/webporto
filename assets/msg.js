document.getElementById("submitBTN").addEventListener("click", async function (event) {
  event.preventDefault(); // Prevent page reload

  const button = this;
  const form = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
    token: document.getElementById('token').value
  };

  // Check for empty requiyellow fields
  if (!form.email || !form.subject || !form.message) {
    handleButtonState(button, 'Failed to send', 'bg-yellow-400', 'hover:bg-yellow-500', 2000);
    return;
  } else {
    handleButtonState(button, 'Sending Message...', 'bg-blue-400', 'hover:bg-blue-500', 3000);
  }

  // Validate email
  if (!isValidEmail(form.email)) {
    handleButtonState(button, 'Invalid email', 'bg-yellow-400', 'hover:bg-yellow-500', 2000);
    return;
  } else {
    handleButtonState(button, 'Sending Message...', 'bg-blue-400', 'hover:bg-blue-500', 3000);
  }

  try {
    const ipAddress = await fetchIPAddress();
    const hashData = await fetchHash();
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const data = {
      ...form,
      device: navigator.userAgent,
      ip: ipAddress,
      key: 'Discord',
      hash: hashData.hash,
      timestamp: hashData.timestamp
    };

    console.log("Sending data:", data); // Debugging: Log the data being sent

    const response = await fetch("http://127.0.0.1:8000/api/message/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": csrfToken
      },
      body: JSON.stringify(data)
    });

    console.log("Response status:", response.status); // Debugging: Log the response status

    if (response.ok) {
      handleButtonState(button, 'Message sent', 'bg-green-400', 'hover:bg-green-500', 3000);
    } else {
      const errorText = await response.text(); // Debugging: Get response text if not ok
      console.error('Failed to send message:', errorText); // Debugging: Log the error text
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Error:', error); // Debugging: Log the error
    handleButtonState(button, 'Failed to send', 'bg-yellow-400', 'hover:bg-yellow-500', 3000);
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

async function fetchIPAddress() {
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();
  return data.ip;
}

async function fetchHash() {

  const hashFetchData = {
    token: document.getElementById('token').value,
  };
  const response = await fetch("http://127.0.0.1:8000/api/batch/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(hashFetchData)
  });
  const hashData = await response.json();
  return hashData;
}

function handleButtonState(button, text, bgColorClass, hoverColorClass, timeout) {
  button.classList.remove("bg-blue-400", "hover:bg-blue-500", "bg-gray-400", "hover:bg-gray-500", "bg-yellow-400", "hover:bg-yellow-500", "bg-green-400", "hover:bg-green-500");
  button.classList.add(bgColorClass, hoverColorClass);
  button.innerHTML = `<i class="fa-solid fa-paper-plane"></i> ${text}`;
  button.disabled = true;

  setTimeout(() => {
    button.classList.remove(bgColorClass, hoverColorClass);
    button.classList.add("bg-blue-400", "hover:bg-blue-500");
    button.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send';
    button.disabled = false;
  }, timeout);
}
