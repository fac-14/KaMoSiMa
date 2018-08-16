var username = document.querySelector('#username');
var password = document.querySelector('.password');
var confirmPassword = document.querySelector('.confirm-password');
var email = document.querySelector('.email');
var form = document.querySelector('form');
var error = document.querySelector('.error');

form.addEventListener('click', function (event) {

    while (error.hasChildNodes()) {
        error.removeChild(error.firstChild);
    }
    if (username.value.length === 0) {
        event.preventDefault();
        var newError = document.createElement("p");
        error.appendChild(newError);
        newError.innerText = 'Please enter a username';
        return false;
    }

    if (username.validity.patternMismatch) {
        event.preventDefault();
        var newError = document.createElement("p");
        error.appendChild(newError);
        newError.innerText = 'Username has to be between 5-20 characters';
        return false;
    }

    if (password.value.length === 0) {
        event.preventDefault();
        var newError = document.createElement("p");
        error.appendChild(newError);
        newError.innerText = 'Please enter a password';
        return false;
    }

    if (password.validity.patternMismatch) {
        event.preventDefault();
        var newError = document.createElement("p");
        error.appendChild(newError);
        newError.innerText = 'Password must contain 8 characters including 1 letter and 1 number'
        return false;
    }

    if (password.value != confirmPassword.value) {
        event.preventDefault();
        var newError = document.createElement("p");
        error.appendChild(newError);
        newError.innerText = 'Passwords do not match'
        return false;
    }

    if (email.validity.typeMismatch) {
        event.preventDefault();
        var newError = document.createElement("p");
        error.appendChild(newError);
        newError.innerText = 'Please type in a valid email address';
        return false;
    }

    if (email.value.length === 0) {
        event.preventDefault();
        var newError = document.createElement("p");
        error.appendChild(newError);
        newError.innerText = 'Please type in an email address';
        return false;
    }


    return true;
});




