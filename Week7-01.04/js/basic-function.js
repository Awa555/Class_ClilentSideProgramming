// Create a variable called msg to hold
var msg = "Hello this is some testing ";

// Create a function to update the content of an element (id=msg)
function updateMessage() {
    el = document.getElementById('message');
    el.textContent = msg;
}

updateMessage();


var hotel = new Object();

hotel.name = "Park";
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailablity = function() {
    return this.rooms - this.booked;
}

    
}