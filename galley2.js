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

/*coupon
document.addEventListener('DOMContentLoaded', function() {
    var applyButton = document.querySelector('#coupon .addcart');
    applyButton.addEventListener('click', function() {
        var couponInput = document.querySelector('#coupon input');
        var couponCode = couponInput.value.trim();

        // Here you can add your logic to validate and apply the coupon code
        
        // For demonstration purposes, let's just log the coupon code to the console
        console.log('Coupon code applied:', couponCode);

        // Clear the input field after applying the coupon
        couponInput.value = '';
    });
});*/
document.addEventListener('DOMContentLoaded', function() {
    var applyButton = document.querySelector('#coupon .addcart');
    applyButton.addEventListener('click', function() {
        var couponInput = document.querySelector('#coupon input');
        var couponCode = couponInput.value.trim();

        // Here you can add your logic to validate and apply the coupon code

        // For demonstration purposes, let's display an alert message
        if (couponCode !== '') {
            alert('Coupon code "' + couponCode + '" applied successfully!');
        } else {
            alert('Please enter a valid coupon code.');
        }

        // Clear the input field after applying the coupon
        couponInput.value = '';
    });
});
