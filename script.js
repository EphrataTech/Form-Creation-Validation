DOMContentLoaded(() => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission   

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim(); 

let isvalid = true
const messages = []

if (username.length < 3) {
    isvalid = false
    messages.push("Username must be at least 3 characters long.")

}

if (!email.includes('@', '.')) {
    isvalid = false
    messages.push("Please enter a valid email address.")

}

if (password.length < 8) {
    isvalid = false
    messages.push("Password must be at least 8 characters long.")

}

feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.backgroundColor = "#d4edda";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = "#f8d7da";
        }


});

});