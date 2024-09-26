document.addEventListener('DOMContentLoaded', function () {
  // Fill welcome message with the name
  const welcomeMessage = document.getElementById('welcome-message');
  const userName = prompt('Please enter your name:');
  if (userName) {
    welcomeMessage.textContent = `Hi ${userName}, Welcome to Website`;
  }

  // Form validation and display the form values
  const form = document.getElementById('messageForm');
  const submittedDataDiv = document.getElementById('submittedData');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const birthDate = document.getElementById('birthDate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    submittedDataDiv.innerHTML = `
            <h3>Submitted Data:</h3>
            <p>Name: ${name}</p>
            <p>Tanggal Lahir: ${birthDate}</p>
            <p>Jenis Kelamin: ${gender}</p>
            <p>Pesan: ${message}</p>
        `;
  });
});
