// signin.js

document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find user by email
    const user = users.find(user => user.email === email);

    // Check if user exists and password matches
    if (user && user.password === password) {
        // Clear the form
        document.getElementById('signin-form').reset();
        document.getElementById('signin-error').textContent = '';

        // Show welcome message
        alert(`Welcome ${user.name}! You have successfully signed in.`);
    } else {
        // Show error message
        document.getElementById('signin-error').textContent = 'Invalid email or password. Please try again.';
    }
});
