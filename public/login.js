var form = document.querySelector("form");

var username = document.querySelector("#username");
var password = document.querySelector(".password");


form.addEventListener("submit", function (event) {
    console.log(username.value, password.value);
    return true;
});