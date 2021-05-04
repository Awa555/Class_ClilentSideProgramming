function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.surveyForm.name.value;
    var email = document.surveyForm.email.value;
    var mobile = document.surveyForm.mobile.value;
    var gender = document.surveyForm.gender.value;

    var accuracyOrder = [];
    var checkboxes = document.getElementsByName("accuracyOrder[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            accuracyOrder.push(checkboxes[i].value);
        }
    }

    var starter = [];
    var checkboxes = document.getElementsByName("starter[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            starter.push(checkboxes[i].value);
        }
    }

    var main = [];
    var checkboxes = document.getElementsByName("main[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            main.push(checkboxes[i].value);
        }
    }

    var dessert = [];
    var checkboxes = document.getElementsByName("dessert[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            dessert.push(checkboxes[i].value);
        }
    }

    var drinks = [];
    var checkboxes = document.getElementsByName("drinks[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            drinks.push(checkboxes[i].value);
        }
    }

    var food = [];
    var checkboxes = document.getElementsByName("food[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            food.push(checkboxes[i].value);
        }
    }

    var portion = [];
    var checkboxes = document.getElementsByName("portion[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            portion.push(checkboxes[i].value);
        }
    }

    var server = [];
    var checkboxes = document.getElementsByName("server[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            server.push(checkboxes[i].value);
        }
    }

    var value = [];
    var checkboxes = document.getElementsByName("value[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            value.push(checkboxes[i].value);
        }
    }

    // Defining error variables with a default value
    var nameErr = emailErr = mobileErr = genderErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }


    // Validate gender
    if (gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || mobileErr || genderErr) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +
            "Gender: " + gender + "\n";
        if (accuracyOrder.length) {
            dataPreview += "accuracyOrder: " + accuracyOrder.join(", ");
        }

        if (starter.length) {
            dataPreview += "starter: " + starter.join(", ");
        }

        if (main.length) {
            dataPreview += "main: " + main.join(", ");
        }

        if (dessert.length) {
            dataPreview += "dessert: " + dessert.join(", ");
        }

        if (drinks.length) {
            dataPreview += "drinks: " + drinks.join(", ");
        }

        if (drinks.length) {
            dataPreview += "food: " + food.join(", ");
        }

        if (drinks.length) {
            dataPreview += "portion: " + portion.join(", ");
        }

        if (drinks.length) {
            dataPreview += "server: " + server.join(", ");
        }

        if (drinks.length) {
            dataPreview += "value: " + value.join(", ");
        }

        // Display input data in a dialog box before submitting the form
        //alert(dataPreview);
        alert('Form Succesfully Submitted! Thank you for filling out this survey. Your opinion helps us server you better.');

    }
};