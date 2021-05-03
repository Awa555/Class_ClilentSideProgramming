
// let carts = document.querySelectorAll('.add-cart'); // select all cart

// let products = [
//   {
//     name: "Spicy",
//     price: "4.95",
//     tag: "starter",
//     kind: "vegetarian",
//     inCart: 0
//   },
//   {
//     name: "Houmous with PERi-PERi Drizzle",
//     price: "4.95",
//     tag: "starter",
//     kind: "",
//     inCart: 0
//   },
//   {
//     name: "Sweet Potato Wedges with Garlic PERinaise",
//     price: "4.95",
//     tag: "starter",
//     kind: "",
//     inCart: 0
//   },
// ];



// for(let i = 0; i < carts.length; i++){ 
//   carts[i].addEventListener('click', () => {  
//     cartNumbers(products[i]); 
//     totalCost(products[i]);
//   })
// }


// // check localStorage item save
// function onLoadCartNumbers() {
//   let productNumbers = localStorage.getItem('cartNumbers');

//   if(productNumbers) {
//     document.querySelector('.cart span').textContent = productNumbers;
//   }
// }


// // show how many item on Bill button
// function cartNumbers(product) {

//   let productNumbers = localStorage.getItem('cartNumbers');

//   productNumbers = parseInt(productNumbers); ////String to number

//   if(productNumbers) {
//     localStorage.setItem('cartNumbers', productNumbers + 1);
//     document.querySelector('.cart span').textContent = productNumbers +1;
//   }

//   else {
//     localStorage.setItem('cartNumbers', 1);
//     document.querySelector('.cart span').textContent = 1;
//   } 

//   setItems(product);
// }


// function setItems(product) {
//   let cartItems = localStorage.getItem('productsInCart');
//   cartItems = JSON.parse(cartItems);

//   if(cartItems != null) {

//     if(cartItems[product.tag] == underfined) {
//       cartItems = {
//         ...cartItems,
//         [product.tag]: product
//       }
//     }
//     cartItems[product.tag].inCart += 1; 
//   }

//   else {
//     product.inCart = 1;
//     cartItems = {
//       [product.tag]: product
//     }
//   }
//   localStorage.setItem("productsInCart", JSON.stringify(cartItems));
// }



// /* Total Cost */
// function totalCost(product) {
//   let cartCost = localStorage.getItem('totalCost'); 

//   console.log(cartCost);
//   console.log(typeof cartCost);

//   if(cartCost != null) {
//     cartCost = parseInt(cartCost); //String to number
//     localStorage.setItem("totalCost", cartCost + product.price);
//   }

//   else {
//     localStorage.setItem("totalCost", product.price);
//   }
// }


// /* Display Cart */
// function displayCart() {
//   let cartItems = localStorage.getItem("productsInCart");
//   cartItems = JSON.parse(cartItems);
//   let productContainer = document.querySelector(".products");
//   let cartCost = localStorage.getItem('totalCost'); 

//   console.log(cartItems);
//   if(cartItems && productContainer) {
//     productContainer.innerHTML = '';
//     Object.values(cartItems).map(item => {
//       productContainer.innerHTML += `
//       <div class= "product">
//       <img src="./image/cancel.jpg" width:"30px">
//       <img src="./image/${item.tag}.jpg">
//       <span>${item.name}</span>
//       </div>

//       <div class="price">€${item.price}</div>
//       <div class="quantity">
//       <img src="./image/del.jpg" width:"30px">
//       <span>${item.inCart}</span>
//       <img src="./image/add.jpg" width:"30px">
//       </div>

//       <div class="total">
//         €${item.inCart * item.price}
//       </div>
//       `;
//     });

//     productContainer.innerHTML += `
//     <div class="basketTotalContainer">
//       <h4 class="basketTotalTitle">
//       Basket Total
//       </h4>
//       <h4 class="basketTotal">
//       €${cartCost}
//       </h4>
//     </div>
//     `;
//   }
// }

// onLoadCartNumbers();
// displayCart();




var starter1 = "Spicy Mixed Olives"
var counter = 0
var price = 4.95

var starter2 = "Houmous with PERi-PERi Drizzle"
var counter = 0
var price = 4.95

var addBtn1 = document.getElementById("btn1")
var addBtn2 = document.getElementById("btn2")

var bill = document.getElementsByClassName("bill")
var temp
var total = 0;

addBtn1 + addBtn2.addEventListener("click", function () {
  counter += 1
  temp = `
    <div class= "productList">
    <div class= "productList-title">${starter1}</div> 
    <div class= "productList-another">€${price}</div>
    <div class= "productList-another">
 
    ${counter}

    </div>
    <div class= "productList-another">€${counter * price}</div>
    </div>

    <div class= "productList">
    <div class= "productList-title">${starter2}</div> 
    <div class= "productList-another">€${price}</div>
    <div class= "productList-another">${counter}</div>
    <div class= "productList-another">€${counter * price}</div>

    
    </div>
    <div class="totalAll">
    Total Price: <div>€${total = total +(counter * price)}</div>
    </div>
    `

  bill[0].innerHTML = temp
});




var total_items = 2;

function CalculateItemsValue() {

  var total = 0;

  for (let i = 1; i <= total_items; i++) {
    itemID = document.getElementById("btn1" + i);
    itemID = document.getElementById("btn2" + i);
    total.toFixed(2) = total + (itemID.counter * itemID.price);
  }
  
  document.getElementById('ItemsTotal').innerHTML = "€" + total.toFixed(2);
};

document.querySelectorAll('[id^="btn1"]' + '[id^="btn2"]').forEach(item => {
  item.addEventListener(CalculateItemsValue);

  console.log(total.toFixed(2));
});

console.log(temp)

CalculateItemsValue();
