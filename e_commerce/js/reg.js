document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Save user data (this is just an example, consider using a real backend)
    localStorage.setItem('user', JSON.stringify({ username, email, password }));
    alert(`Hello ${username}, you have registered successfully!`);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const userData = JSON.parse(localStorage.getItem('user'));
    
    if (userData && userData.email === email && userData.password === password) {
        alert(`Hello ${userData.username}, you are logged in!`);
        window.location.href = 'categories.html'; // Redirect to categories
    } else {
        alert('Invalid email or password.');
    }
});
