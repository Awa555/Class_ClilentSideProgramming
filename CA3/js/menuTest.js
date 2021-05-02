
var food1 = "curry"
var counter = 0
var addBtn = document.getElementById("btn1")
var bill = document.getElementsByClassName("bill")
var temp

addBtn.addEventListener("click", function () {
    counter += 1
    temp = counter + food1

    bill[0].innerHTML = temp
})

console.log(temp)
