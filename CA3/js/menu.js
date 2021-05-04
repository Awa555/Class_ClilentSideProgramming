
var product = {
  "01": {
    name = "Spicy Mixed Olives",
    counter = 0,
    price = 4.95
  },

  "02": {
    name = "Houmous with PERi-PERi Drizzle",
    counter = 0,
    price = 4.95
  },

  "03": {
    name = "Sweet Potato Wedges with Garlic PERinaise",
    counter = 0,
    price = 4.95
  },

  "04": {
    name = "The Great Imitator Wrap",
    ounter = 0,
    price = 8.95
  },

  "05": {
    name = "Chicken Butterfly",
    counter = 0,
    price = 11.25
  },

  "06": {
    name = "Double Chicken Burger",
    counter = 0,
    price = 13.40
  },

  "07": {
    name = "Gooey Caramel Cheesecake",
    counter = 0,
    price = 6.20
  },

  "08": {
    name = "Choc-A-Lot Cake",
    counter = 0,
    price = 6.20
  },

  "09": {
    name = "Carrot Cake",
    counter = 0,
    price = 6.20
  },

  "10": {
    name = "Coca-Cola Classic 330ml",
    counter = 0,
    price = 2.20
  },

  "11": {
    name = "Karma Drinks Gingerella 300ml",
    counter = 0,
    price = 4.00
  },


  "12": {
    name = "Kids Cawston Press Summer Berry 200ml",
    counter = 0,
    price = 2.10
  },
}



var addBtn = document.getElementById("btn");
// var addBtn2 = document.getElementById("btn2");
// var addBtn3 = document.getElementById("btn3");



var bill = document.getElementsByClassName("bill");
var temp;
var total = 0;



var addBtn = document.querySelectorAll('[id^="btn"]');

// for (let i = 0; i < addBtn.length; i++) {


var product = JSON.parse(localStorage.getItem("product"));


getItem(product);

// function getProduct(product) {
//    fetch(product)
// //     .then((response) => (response.json()))
//      .then(function (data) {
//        console.log(data);

//        data.forEach(item => {



addBtn.on("click", function () {
  //for (let i = 0; i <= addBtn.length; i++) {

  counter += 1;
  temp = `
    <div class= "productList">
      <div class= "productList-title">${product.name}</div> 
      <div class= "productList-another">€${product.price}</div>
      <div class= "productList-another">${product.counter}</div>
      <div class= "productList-another">€${(product.counter * product.price).toFixed(2)}</div>
    </div>

    <div class= "total">
    Total Price: <strong>€${total = total + (product.counter * product.price)}</strong>
    </div>
    `;
  //}
  bill[0].innerHTML = temp;



})
//     });
//    });   
//  }

var total_items = 12;

function CalculateItemsValue() {

  var total = 0;

  for (let i = 1; i <= total_items; i++) {
    itemID = document.getElementById("btn" + i);
    //itemID = document.getElementById("btn2" + i);
    total = total + (product.counter * product.price);
  }

  document.getElementById('ItemsTotal').innerHTML = "€" + total;
};

document.querySelectorAll('[id^="btn"]').forEach(item => {
  item.addEventListener(CalculateItemsValue);

  console.log(total);
});

console.log(temp);

CalculateItemsValue();
