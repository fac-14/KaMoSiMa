var username = document.querySelector('#username');
var password = document.querySelector('.password');
var confirmPassword = document.querySelector('.confirm-password');
var email = document.querySelector('.email');
var form = document.querySelector('form');
var error = document.querySelector('.error');

form.addEventListener('input', function(event) {

    while (error.hasChildNodes()) {
        error.removeChild(error.firstChild);
    }
   
    if(password.value != confirmPassword.value) {
        var newError = document.createElement("p");
        error.appendChild(newError);
        newError.innerText = 'Passwords do not match'
        event.preventDefault();
    }

    if(password.validity.patternMismatch || confirmPassword.validity.patternMismatch) {
        var newError = document.createElement("p");
        error.appendChild(newError);
        newError.innerText = 'Password must contain 8 characters including 1 letter and 1 number'
        event.preventDefault();
    }

    if(password.validity.valueMissing || confirmPassword.validity.valueMissing) {
        var newError = document.createElement("p");
        error.appendChild(newError);
        newError.innerText = 'Please enter a password';
        event.preventDefault();
    }

    if(email.validity.typeMismatch) {
        var newError = document.createElement("p");
        error.appendChild(newError);
        newError.innerText = 'Please type in a valid email address';
        event.preventDefault();
    }

    if(email.validity.valueMissing) {
        var newError = document.createElement("p");
        error.appendChild(newError);
        newError.innerText = 'Please type in an email address';
        event.preventDefault();
    }
    if(username.validity.patternMismatch) {
        var newError = document.createElement("p");
        error.appendChild(newError);
        newError.innerText = 'Username has to be between 5-20 characters';
        event.preventDefault();
    }
    if(username.validity.valueMissing) {
        var newError = document.createElement("p");
        error.appendChild(newError);
        newError.innerText = 'Please enter a username';
        event.preventDefault();
    }
});


