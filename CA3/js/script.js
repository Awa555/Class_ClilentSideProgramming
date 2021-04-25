// Staff Password
function validate() {
    // access the value inside the textbox
    var staffPassword = document.getElementById('StaffPW').value;

    var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (regex.test(staffPassword)) {

        document.getElementById('Valid').style.visibility = "visible";

        document.getElementById('inValid').style.visibility = "hidden";
    }

    else {

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
                    <p>${'DOB: ' + user.dob.date}</p>
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



// Go to top
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



// Menu
const tabs = document.querySelector(".menuNav");

const tabButton = document.querySelectorAll(".tab-button");

const contents = document.querySelectorAll(".content");

tabs.onclick = e => {

    const id = e.target.dataset.id;

    if (id) {

        tabButton.forEach(btn => {

            btn.classList.remove("active");
        });

        e.target.classList.add("active");

        contents.forEach(content => {

            content.classList.remove("active");
        });

        const element = document.getElementById(id);

        element.classList.add("active");
    }
}


