/* Staff Password */
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



/* Customers Information Button */
$(document).ready(function () {

    $("#btHide").click(function () {

        $("#hide").slideToggle();

        $("#btHide").toggleClass("active");

    });
});



/* Customers */
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

                    u = `<div class ="eachUser">

                    <img src = "${user.picture.thumbnail}" class= "user-photo"><br>

                    <span>${user.name.title + '. ' + user.name.fitst + ' ' + user.name.last}</span>
                    <p>${'DOB: ' + user.dob.date}</p>
                    <p>${'Gender: ' + user.gender + ' / Age: ' + user.dob.age}</p>
                    <p>${'Phone: ' + user.phone + ' / ' + user.cell}</p>
                    <p>${'Email: ' + user.email}</p>
                    <p>${'Country: ' + user.location.country}</p>
                    <p>${'PostCode: ' + user.location.postcode}</p>
                    <p>${'Address: ' + user.location.street.number + ' ' + user.location.street.name + ' , ' + user.location.city + ' . ' + user.location.state}</p>
                    
                    </div>
                    `;

                    $("#results").append(u);
                })
            });
    }
});



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



/* Menu Navigation */
$(document).ready(function () {

    $(".menuNav li a").click(function (e) {

        e.preventDefault();
    });

    $(".menuNav li").click(function () {

        var divid = $(this).find("a").attr("href");

        $(".menuNav li,.menuBox div.content").removeClass("active");   // removing active class from div

        $(".content").hide();   // hiding open div

        $(divid).show();    // show div

        $(this).addClass("active"); //  adding active class to clicked div
    });
});



