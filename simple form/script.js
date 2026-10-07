
// Get the form
const form = document.getElementById("myForm");


// Get the input fields
const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const confirmPasswordInput =
    document.getElementById("confirmPassword");


// Get the error messages
const nameError = document.getElementById("nameError");

const emailError = document.getElementById("emailError");

const passwordError =
    document.getElementById("passwordError");

const confirmPasswordError =
    document.getElementById("confirmPasswordError");


// Get success message
const successMessage =
    document.getElementById("successMessage");


// Listen for form submission
form.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();


    // Clear old messages
    nameError.textContent = "";

    emailError.textContent = "";

    passwordError.textContent = "";

    confirmPasswordError.textContent = "";

    successMessage.textContent = "";


    // Assume everything is correct
    let valid = true;


    // =========================
    // NAME VALIDATION
    // =========================

    if (nameInput.value.trim() === "") {

        nameError.textContent =
            "Please enter your full name";

        valid = false;
    }


    // =========================
    // EMAIL VALIDATION
    // =========================

    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Please enter your email";

        valid = false;

    } else if (!emailInput.value.includes("@")) {

        emailError.textContent =
            "Please enter a valid email";

        valid = false;
    }


    // =========================
    // PASSWORD VALIDATION
    // =========================

    if (passwordInput.value.trim() === "") {

        passwordError.textContent =
            "Please enter a password";

        valid = false;

    } else if (passwordInput.value.length < 6) {

        passwordError.textContent =
            "Password must be at least 6 characters";

        valid = false;
    }


    // =========================
    // CONFIRM PASSWORD
    // =========================

    if (confirmPasswordInput.value.trim() === "") {

        confirmPasswordError.textContent =
            "Please confirm your password";

        valid = false;

    } else if (
        confirmPasswordInput.value !== passwordInput.value
    ) {

        confirmPasswordError.textContent =
            "Passwords do not match";

        valid = false;
    }


    // =========================
    // EVERYTHING IS CORRECT
    // =========================

    if (valid) {

        successMessage.textContent =
            "Account created successfully! 🎉";

        // Clear the form
        form.reset();
    }

});

