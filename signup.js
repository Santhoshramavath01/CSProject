document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if the email already exists
    const userExists = users.some(user => user.email === email);
    
    if (userExists) {
        alert('Email already exists. Please sign in.');
        window.location.href = 'signin.html'; // Redirect to the Sign In page
    } else {
        // Save new user data
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Sign Up Successful. Please sign in.');
        window.location.href = 'signin.html'; // Redirect to the Sign In page
    }
});