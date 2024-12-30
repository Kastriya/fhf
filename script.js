document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add code to send the RSVP data to a server or process it as needed

    // Display a response message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = `<p>Thank you, ${name}! Your RSVP has been received.</p>`;
    responseMessage.style.color = 'green';

    // Clear the form
    document.getElementById('rsvpForm').reset();
});