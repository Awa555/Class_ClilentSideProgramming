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



// Customers Information Button
$(document).ready(function () {
    $("#btHide").click(function () {
        $("#hide").slideToggle();
        $("#btHide").toggleClass("active");
    });
});



// Customers
$(document).ready(function () {


    var url = "https://randomuser.me/api/?results=5";
    var u = "";

    getUsers(url);

    function getUsers(url) {
        fetch(url)
            .then((response) => (response.json()))
            .then(function (data) {
                console.log(data);

                data.results.forEach(user => {

                    u = `<div class ="well">

                    <img src = "${user.picture.thumbnail}"><br>

                    <span>${user.name.title + '. ' + user.name.fitst + ' ' + user.name.last}</span>
                    <p>${'DOB: ' + user.dob.date }</p>
                    <p>${'Gender: ' + '  /  Age: ' + user.dob.age}</p>
                    <p>${'Phone: ' + user.phone + ' / ' + user.cell}</p>
                    <p>${'Email: ' + user.email}</p>
                    <p>${'PostCode: ' + user.location.postcode}</p>
                    <p>${'Address: ' + user.location.street.number + ' ' + user.location.street.name + ' , ' + user.location.city + ' . ' + user.location.state}</p>
                    
                    </div>
                    `;

                    $("#results").append(u);
                })
            });
    }

});

// $(document).ready(function() {

//     $.ajax({
//         url: 'https://randomuser.me/api/',
//         dataType: 'json',
//         success: function (data) {
//             console.log(data);

//             const user = data.results[0].user;
//             var imageTag = user.picture.thumbnail;
//             var name = user.name.title + '. ' + user.name.first + ' ' + user.name.last;
//             var email = user.email;
//             var phone = user.phone;
//             var age = user.dob.age;

//             //prepare DOM object
//             var image = $('<img>');
//             imageTag.prop('src', user.picture.thumbnail);

//             var nameTag = $('<div class = "name">');
//             nameTag.html(name);

//             var emailTag = $('<a class = "email">');
//             emailTag.html(email).prop('href', 'mailto:' + email);

//             //insert DOM object into DOM
//             $('#user').append(imageTag).append(nameTag).append(emailTag);
//         }
//     });
// });