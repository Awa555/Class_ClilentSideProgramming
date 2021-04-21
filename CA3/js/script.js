// Staff Password
function validate() {
    // access the value inside the textbox
    var staffPassword = document.getElementById('StaffPW').value;

    var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if(regex.test(staffPassword)) {

        alert("valid Staff Password");

        document.getElementById('Valid').style.visibility = "visible";

        document.getElementById('inValid').style.visibility = "hidden";
    }

    else {
        alert("Invalid Staff Password");

        document.getElementById('inValid').style.visibility = "visible";

        document.getElementById('Valid').style.visibility = "hidden";
    }
}

// User


$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });