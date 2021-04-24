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
const generateUser = () => {
    fetch("https://randomuser.me/api/?results=5")
        .then(response => response.json())
        .then(data => parseData(data));
}

const displayUserName = ({ title, last, first }) => {
    document.querySelector(".user-name")
        .textContent = `Name: ${title}. ${first} ${last}`;
};

const displayUserPhoto = ({ thumbnail }) => {
    document.querySelector(".user-photo").src = `${thumbnail}`;
};

const displayUserPhone = ({ phone, cell }) => {
    document.querySelector(".user-phone")
        .textContent = `Phone: ${phone} / ${cell}`;
};

const displayUserAddress = ({ street, city, state }) => {
    const { name, number } = street;
    document.querySelector(".user-address")
        .textContent = `Address: ${number} ${name}, ${city}, ${state}`;
};

const displayUserAge = ({ date, age }) => {
    document.querySelector(".user-age")
        .textContent = `DOB: ${date}  Age: ${age}`;
};



const displayUserEmail = ({ email }) => {
    document.querySelector(".user-email")
        .textContent = `Email: ${email}`;
};

const displayUserInfo = (data) => {
    if (!data) return;

    console.log(data);
    //using object destructuring
    const { results } = data;
    const [ profile ] = results;

    const { name } = profile;
    displayUserName(name);

    const { picture } = profile;
    displayUserPhoto(picture);

    displayUserPhone(profile);

    const { location } = profile;
    displayUserAddress(location);

    const { dob } = profile;
    displayUserAge(dob);

    const { email } = profile;
    displayUserEmail(email);
};

const getUserInfo = () => {
    const api = "https://randomuser.me/api/?results=5";

    // make API call here
    fetch(api)
        .then((response) => response.json())
        .then((data) => {
            displayUserInfo(data);
        })


};
getUserInfo();