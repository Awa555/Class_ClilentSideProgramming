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


// User
fetch("../API/users.json")
    .then((response) => {
        // handle response data
    })

    .catch((err) => {
        // handle errors
    });
    
const displayUserName = ({ title, last, first }) => {
    document.querySelector(
        ".user-name"
    ).textContent = `${title} ${first} ${last}`;
};

const displayUserPhoto = ({ large }) => {
    document
        .querySelector(".user-photo")
        .getElementsByTagName("img")[0].src = large;
};

const displayUserPhone = ({ phone, cell }) => {
    document.querySelector(
        ".user-phone"
    ).textContent = `${phone} / ${cell}`;
};

const displayUserAddress = ({ street, city, state }) => {
    const { name, number } = street;
    document.querySelector(
        ".user-address"
    ).textContent = `${number} ${name}, ${city}, ${state}`;
};

const displayUserInfo = (data) => {
    if (!data) return;

    console.log(data);
    //using object destructuring
    const { results } = data;
    const [profile] = results;

    const { name } = profile;
    displayUserName(name);

    const { picture } = profile;
    displayUserPhoto(picture);

    displayUserPhone(profile);

    const { location } = profile;
    displayUserAddress(location);

};

const getUserInfo = () => {
    const api = "https://randomuser.me/api/";

    // make API call here
    fetch(api)
        .then((response) => response.json())
        .then((data) => {
            displayUserInfo(data);
        })
        .catch((error) => alert("error getting API resources"));
};
getUserInfo();