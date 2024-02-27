// script.js

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email is already registered
    const isEmailExists = users.some(user => user.email === email);
    if (isEmailExists) {
        document.getElementById('signup-error').textContent = 'Email already exists. Please use a different email.';
        return;
    }

    // Create user object
    const user = {
        name,
        email,
        password
    };

    // Add user to the local storage
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // Clear the form
    document.getElementById('signup-form').reset();
    document.getElementById('signup-error').textContent = '';

    // Show welcome message
    alert(`Welcome ${name}! You have successfully signed up.`);
});
