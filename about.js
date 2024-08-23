let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () =>{
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('color');
    }
    else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('color');
    }
}

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');

}

//signup
document.addEventListener("DOMContentLoaded", function() {
    // Selecting the form and input elements
    var form = document.querySelector("#newsletters .form");
    var emailInput = form.querySelector("input[type='text']");
    var signUpButton = form.querySelector("button");

    // Function to validate email address
    function isValidEmail(email) {
        // Regular expression for email validation
        var emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    // Function to handle form submission
    function signUpHandler(event) {
        event.preventDefault(); // Prevent the default form submission

        var email = emailInput.value.trim();

        // Validating email
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Sending the email to the server or performing any other action
        alert("Thank you for signing up! You will receive updates at " + email);

        // Clearing the input field after successful submission
        emailInput.value = "";
    }

    // Adding event listener to the sign up button
    signUpButton.addEventListener("click", signUpHandler);
});

