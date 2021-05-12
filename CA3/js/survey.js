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
        printError("nameErr", "<span style='color:red'> Please enter your name </span>");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "<span style='color:red'> Please enter a valid name </span>");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "<span style='color:red'> Please enter your email address </span>");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "<span style='color:red'> Please enter a valid email address </span>");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "<span style='color:red'> Please enter your mobile number </span>");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "<span style='color:red'> Please enter a valid 10 digit mobile number </span>");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }


    // Validate gender
    if (gender == "") {
        printError("genderErr", "<span style='color:red'> Please select your gender </span></p>");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || mobileErr || genderErr) == true) {
        return false;
    }

    else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +
            "Gender: " + gender + "\n";

        if (accuracyOrder.length) {
            dataPreview += "AccuracyOrder: " + accuracyOrder.join(",  ") + "\n";
        }

        if (starter.length) {
            dataPreview += "Starter: " + starter.join(", ") + "\n";
        }

        if (main.length) {
            dataPreview += "Main: " + main.join(", ") + "\n";
        }

        if (dessert.length) {
            dataPreview += "Dessert: " + dessert.join(", ") + "\n";
        }

        if (drinks.length) {
            dataPreview += "Drinks: " + drinks.join(", ") + "\n";
        }

        if (food.length) {
            dataPreview += "Food: " + food.join(", ") + "\n";
        }

        if (portion.length) {
            dataPreview += "Portion: " + portion.join(", ") + "\n";
        }

        if (server.length) {
            dataPreview += "Server: " + server.join(", ") + "\n";
        }

        if (value.length) {
            dataPreview += "Value: " + value.join(", ") + "\n";
        }

        // Display input data in a dialog box before submitting the form
        alert(dataPreview + "\n");
        alert('Form Succesfully Submitted!' + '\n' + 'Thank you for filling out this survey. Your opinion helps us server you better.');

    }
};




/* Go to top */
$(document).ready(function () {

    $("#back-to-top").hide();

    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 400) {
                $("#back-to-top").fadeIn(400);
            }
            else {
                $("#back-to-top").fadeOut(400);
            }
        });

        $("#back-to-top").click(function () {
            $('body,html').animate({ scrollTop: 0 }, 500);
            return false;
        });
    });
});