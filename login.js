document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
   
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const username = usernameInput.value;
        const password = passwordInput.value; 

    if (username === 'admin' && password === 'admin') {
        alert("Login Successful!");
        window.location.href="index.html";
    } else {
        alert("Invalid Username or Password");
    }
});
});
// Không biết chỉnh nên để thế =))) //

 
