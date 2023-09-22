document.getElementById("submitBTN").addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah reload halaman saat tombol diklik

  var button = this;

  // Ubah warna menjadi gray
  button.classList.remove("bg-blue-400");
  button.classList.remove("hover:bg-blue-500");
  button.classList.add("bg-gray-400");
  button.classList.add("hover:bg-gray-500");

  // Ganti teks menjadi "Sending..."
  button.innerHTML = '<i class="fa-solid fa-paper-plane" id="submitBTN" type="submit"></i> Sending...';

  // Nonaktifkan tombol
  button.disabled = true;

  // Get form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  // Check if any required fields are empty
  if (!email || !subject || !message) {
    console.log("Failed to send message.");

    // Ubah warna menjadi merah
    button.classList.remove("bg-gray-400");
    button.classList.remove("hover:bg-gray-500");
    button.classList.add("bg-red-400");
    button.classList.add("hover:bg-red-500");

    // Ganti teks menjadi "Failed to send"
    button.innerHTML = '<i class="fa-solid fa-xmark"></i> Failed to send';

    // Set timeout untuk mengembalikan tombol ke keadaan awal
    setTimeout(function () {
      // Ubah warna menjadi biru kembali
      button.classList.remove("bg-red-400");
      button.classList.remove("hover:bg-red-500");
      button.classList.add("bg-blue-400");
      button.classList.add("hover:bg-blue-500");

      // Ganti teks menjadi "Send"
      button.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send';

      // Aktifkan tombol
      button.disabled = false;
    }, 2000);
    return; // Keluar dari fungsi dan mencegah eksekusi lebih lanjut
  }

  // Cek validitas email
  if (!isValidEmail(email)) {
    console.log("Invalid email address.");

    // Ubah warna menjadi merah
    button.classList.remove("bg-gray-400");
    button.classList.remove("hover:bg-gray-500");
    button.classList.add("bg-red-400");
    button.classList.add("hover:bg-red-500");

    // Ganti teks menjadi "Invalid email"
    button.innerHTML = '<i class="fa-solid fa-xmark"></i> Invalid email';

    // Set timeout untuk mengembalikan tombol ke keadaan awal
    setTimeout(function () {
      // Ubah warna menjadi biru kembali
      button.classList.remove("bg-red-400");
      button.classList.remove("hover:bg-red-500");
      button.classList.add("bg-blue-400");
      button.classList.add("hover:bg-blue-500");

      // Ganti teks menjadi "Send"
      button.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send';

      // Aktifkan tombol
      button.disabled = false;
    }, 3000);

    return; // Keluar dari fungsi dan mencegah eksekusi lebih lanjut
  }

  // Data formulir valid, lanjutkan dengan mengirim pesan
  console.log("Sending message...");

  // Buat payload dengan informasi perangkat
  var payload = {
    message: {
      content: "New message from your website!",
      embeds: [
        {
          title: `This message sent by ${name}`,
          description: `You have been contacted by ${name}, sent at <t:${Math.floor(Date.now() / 1000)}>`,
          fields: [
            {
              name: "Name",
              value: `\`${name}\``
            },
            {
              name: "Email",
              value: `\`${email}\``
            },
            {
              name: "Subject",
              value: `\`${subject}\``
            },
            {
              name: "Message",
              value: `\`${message}\``
            }
          ]
        }
      ]
    }
  };

  // Dapatkan alamat IP pengguna
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ipAddress = data.ip;

      // Dapatkan informasi perangkat
      var deviceInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        browser: {
          name: navigator.appName,
          version: navigator.appVersion,
          cookiesEnabled: navigator.cookieEnabled,
          online: navigator.onLine
        }
      };

      // Tambahkan bidang informasi perangkat jika nama tidak diatur
      if (!name) {
        payload.message.embeds[0].fields.push(
          {
            name: "User Agent",
            value: `\`${deviceInfo.userAgent}\``
          },
          {
            name: "Language",
            value: `\`${deviceInfo.language}\``
          },
          {
            name: "IP Address",
            value: `\`${ipAddress}\``
          }
        );
      }

      // Kirim payload ke server
      fetch("https://contact.api.hexagonn.my.id/axellfumioo/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer aselole_aselole"
        },
        body: JSON.stringify(payload)
      })
        .then(function (response) {
          if (response.ok) {
            console.log("Message sent successfully!");

            // Ganti teks menjadi "Message sent"
            button.innerHTML = '<i class="fa-solid fa-check"></i> Message sent';

            // Ubah warna menjadi hijau
            button.classList.remove("bg-gray-400");
            button.classList.remove("hover:bg-gray-500");
            button.classList.add("bg-green-400");
            button.classList.add("hover:bg-green-500");

            // Set timeout untuk mengembalikan tombol ke keadaan awal
            setTimeout(function () {
              // Ubah warna menjadi biru kembali
              button.classList.remove("bg-green-400");
              button.classList.remove("hover:bg-green-500");
              button.classList.add("bg-blue-400");
              button.classList.add("hover:bg-blue-500");

              // Ganti teks menjadi "Send"
              button.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send';

              // Aktifkan tombol
              button.disabled = false;
            }, 3000);
          } else {
            console.log("Failed to send message.");

            // Ubah warna menjadi merah
            button.classList.remove("bg-gray-400");
            button.classList.remove("hover:bg-gray-500");
            button.classList.add("bg-red-400");
            button.classList.add("hover:bg-red-500");

            // Ganti teks menjadi "Failed to send"
            button.innerHTML = '<i class="fa-solid fa-xmark"></i> Failed to send';

            // Set timeout untuk mengembalikan tombol ke keadaan awal
            setTimeout(function () {
              // Ubah warna menjadi biru kembali
              button.classList.remove("bg-red-400");
              button.classList.remove("hover:bg-red-500");
              button.classList.add("bg-blue-400");
              button.classList.add("hover:bg-blue-500");

              // Ganti teks menjadi "Send"
              button.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send';

              // Aktifkan tombol
              button.disabled = false;
            }, 3000);
          }
        })
        .catch(function (error) {
          console.log("Failed to send message.", error);

          // Ubah warna menjadi merah
          button.classList.remove("bg-gray-400");
          button.classList.remove("hover:bg-gray-500");
          button.classList.add("bg-red-400");
          button.classList.add("hover:bg-red-500");

          // Ganti teks menjadi "Failed to send"
          button.innerHTML = '<i class="fa-solid fa-xmark"></i> Failed to send';

          // Set timeout untuk mengembalikan tombol ke keadaan awal
          setTimeout(function () {
            // Ubah warna menjadi biru kembali
            button.classList.remove("bg-red-400");
            button.classList.remove("hover:bg-red-500");
            button.classList.add("bg-blue-400");
            button.classList.add("hover:bg-blue-500");

            // Ganti teks menjadi "Send"
            button.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send';

            // Aktifkan tombol
            button.disabled = false;
          }, 3000);
        });
    })
    .catch(function (error) {
      console.log("Failed to get IP address.", error);

      // Ubah warna menjadi merah
      button.classList.remove("bg-gray-400");
      button.classList.remove("hover:bg-gray-500");
      button.classList.add("bg-red-400");
      button.classList.add("hover:bg-red-500");

      // Ganti teks menjadi "Failed to send"
      button.innerHTML = '<i class="fa-solid fa-xmark"></i> Failed to send';

      // Set timeout untuk mengembalikan tombol ke keadaan awal
      setTimeout(function () {
        // Ubah warna menjadi biru kembali
        button.classList.remove("bg-red-400");
        button.classList.remove("hover:bg-red-500");
        button.classList.add("bg-blue-400");
        button.classList.add("hover:bg-blue-500");

        // Ganti teks menjadi "Send"
        button.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send';

        // Aktifkan tombol
        button.disabled = false;
      }, 3000);
    });
});

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
