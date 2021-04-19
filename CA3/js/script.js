function validate() {
    // access the value inside the textbox
    var staffPassword = document.getElementById('StaffPW').value;

    var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if(regex.test(staffPassword)) {
        alert("valid Staff Password")
    }

    else {
        alert("Invalid Staff Password");
    }
}