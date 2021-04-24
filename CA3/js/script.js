// Staff Password
function validate() {
    // access the value inside the textbox
    var staffPassword = document.getElementById('StaffPW').value;

    var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (regex.test(staffPassword)) {

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

$(document).ready(function () {
    $("#btHide").click(function () {
        $("#hide").slideToggle();
        $("#btHide").toggleClass("active");
    });
});


// User
$(document).ready(function() {

    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: "json",
        success: function (data) {
            //console.log(data);

            var user = data.results[0].user;
            var picture = user.picture.thumbnal;
            var name = user.name.title + '. ' + user.name.first + ' ' + user.name.last;
            var email = user.email;

            //prepare DOM object
            var image = $('<img>');
            imageTag.prop('src', user.picture.thumbnal);

            var nameTag = $('<div class = "name">');
            nameTag.html(name);

            var emailTag = $('<a class = "email">');
            emailTag.html(email).prop('href', 'mailto:' + email);

            //insert DOM object into DOM
            $('#user').append(imageTag).append(nameTag);
        }
    });
});