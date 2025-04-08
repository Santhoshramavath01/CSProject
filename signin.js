document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if the email and password match any user
    const validUser = users.find(user => user.email === email && user.password === password);
    
    if (validUser) {
        alert('Sign In Successful');
        window.location.href = 'web.html'; // Redirect to the main page
    } else {
        alert('Invalid email or password');
    }
});