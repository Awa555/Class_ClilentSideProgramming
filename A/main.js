// var msg = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores repellat nostrum ullam pariatur laudantium magni consequuntur sunt.";

// CHALLENGE 1 (5 edits)
function displayName() {
    let person = document.getElementById("name").value;
    let msg = person + "Hello ! How are you today?"; 
    document.getElementById("output1").innerHTML = msg;
  }

document.getElementById("btnCh1").addEventListener("click", displayName);




// CHALLENGE 2 (5 edits)

function ageCalculator() {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);

    // check if user has entered a value
    if(userinput==null || userinput=='') {
      document.getElementById("message").innerHTML = "**Choose a date please!";  
      return false; 
    } else {
    
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();
    
    //convert the calculated difference in date format
    var age_dt = new Date(month_diff); 
    
    //extract year from date    
    var year = age_dt.getUTCFullYear();
    
    //now calculate the age of the user
    var age = Math.abs(year - 1970);
    
    //display the calculated age
    return document.getElementById("output2").innerHTML =  
             "Age is: " +  age +  " years. ";
    }
}

document.getElementById('btnCh2').addEventListener('click', ageCalculator)



// CHALLENGE 3 (5 edits)

function checkNumber(){
    // program that checks if the number is positive, negative or zero

    var msg =''; // Message

    function message() {
      msg += 'Thank you for entering your number. The number you have chose is;'
      return message;
    }

    // input from the user
    const number = document.getElementById(number).value;

    // check if number is greater than 0
    if (number > 0) {
        message();
        msg += "positive.";
    }

    // check if number is 0
    else if (number == 0) {
        message();
        msg += "zero.";
    }

    // if number is less than 0
    else {
        message();
        msg += "negative.";
    }

    var el = document.getElementById('output3');
    el.innerHTML = message;

  };

  document.getElementById('btnCh3').addEventListener('click', checkNumber);




// CHALLENGE 4 (5 edits)
function change () {

  var msg ='';

  msg = "<p>This page should turn CadetBlue when you hold the C key.</p>";

  doc.getElementById("output4").innerHTML = msg;

  window.addEventListener("keydown", function(event) {
      if (event.key == "c") {
          document.body.style.background = "CadetBlue";
      }
  });
  window.addEventListener("keyup", function(event) {
      if (event.key == "c") {
          document.body.style.background = "";
      }
  });
};

change();