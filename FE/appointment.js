// script.js
const API_BASE_URL = 'http://localhost:3000';
const form = document.getElementById('emailForm');
console.log(form);
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = {
        service: form.querySelector('#service').value,
        location: form.querySelector('#location').value,
        name: form.querySelector('#name').value,
        email: form.querySelector('#email').value,
        datetime: form.querySelector('#datetime').value,
        customerphone: form.querySelector('#customerphone').value,
    };

    try {
        const response = await fetch(`${API_BASE_URL}/send-email`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            console.log('Email sent successfully!');
        } else {
            console.log('Failed to send email.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending the email.');
    }
});
