document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Modify the URL to point to a valid server-side script
    const url = 'https://smtpjs.com/v3/smtp.js'; // Replace with your server URL

    const formData = new FormData(contactForm);
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message.');
    }
  });
});

  
  
