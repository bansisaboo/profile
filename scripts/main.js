// Toggle menu for mobile view
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.navbar1_menu-button');
    const menu = document.querySelector('.navbar1_menu');
    
    menuButton.addEventListener('click', function() {
        menu.classList.toggle('is-open');
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation (you can add more validation as needed)
    if (name && email && message) {
        alert('Your message has been sent successfully!');
        // Here you can also send the data to a server using fetch or XMLHttpRequest
    } else {
        alert('Please fill out all fields.');
    }
});
