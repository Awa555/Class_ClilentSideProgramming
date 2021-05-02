
let carts = document.querySelectorAll('.add-cart'); // select all cart

let products = [
  {
    name: "Spicy",
    prict: "4.95",
    tag: "starter",
    kind: "vegetarian",
    inCart: 0
  },
  {
    name: "Houmous with PERi-PERi Drizzle",
    prict: "4.95",
    tag: "starter",
    kind: "",
    inCart: 0
  },
  {
    name: "Sweet Potato Wedges with Garlic PERinaise",
    prict: "4.95",
    tag: "starter",
    kind: "",
    inCart: 0
  },
];



for(let i = 0; i < carts.length; i++){ 
  carts[i].addEventListener('click', () => {  
    cartNumbers(products[i]); 
    totalCost(products[i]);
  })
}


// show how many item on Bill button
function onLoadCartNumbers() {
  let prodcutNumbers = localStorage.getItem('cartNumbers');

  if(prodcutNumbers) {
    document.querySelector('.cart span').textContent = prodcutNumbers;
  }
}


function cartNumbers(product) {
  let prodcutNumbers = localStorage.getItem('cartNumbers');

  prodcutNumbers = parseInt(prodcutNumbers); ////String to number

  if(prodcutNumbers) {
    localStorage.setItem('cartNumbers', prodcutNumbers + 1);
    document.querySelector('.cart span').textContent = prodcutNumbers +1;
  }

  else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  } 

  setItems(product);
}


function setItems(prodcut) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null) {
    if(cartItems[prodcut.tag] == underfined) {
      cartItems = {
        ...cartItems,
        [prodcut.tag]: prodcut
      }
    }
    cartItems[prodcut.tag].inCart += 1; 
  }

  else {
    product.inCart = 1;
    cartItems = {
    [prodcut.tag]: prodcut
    }
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}



/* Total Cost */
function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost'); 

  if(cartCost != null) {
    cartCost = parseInt(cartCost); //String to number
    localStorage.setItem("totalCost", cartCost = product.prict);
  }

  else {
    localStorage.setItem("totalCost", product.prict);
  }
}


/* Display Cart */
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let prodcutcontainer = document.querySelector(".product");
  let cartCost = localStorage.getItem('totalCost'); 
  
  if(cartItems && prodcutcontainer) {
    prodcutcontainer.innerHTML = '';
    Object.value(cartItems).map(item => {
      prodcutcontainer.innerHTML += `
      <div class= "prodcut">
      <img src="./image/cancel.jpg" width:"30px">
      <img src="./image/${item.tag}.jpg">
      <span>${item.name}</span>
      </div>

      <div class="price">€${item.price}</div>
      <div class="quantity">
      <img src="./image/del.jpg" width:"30px">
      <span>${item.inCart}</span>
      <img src="./image/add.jpg" width:"30px">
      </div>

      <div class="total">
        ${item.inCart * item.price}
      </div>
      `
    });

    prodcutcontainer.innerHTML += `
    <div class="basketTotalContainer">
      <h4 class="basketTotalTitle">
      Basket Total
      </h4>
      <h4 class="basketTotal">
      €${cartCost}
      </h4>
    </div>
    `
  }
}

onLoadCartNumbers();
displayCart();






/* Product Add Quantity +, -  */
// function setQuantity(upordown) {

//   var quantity = document.getElementById('quantity');

//   if (quantity.value > 0) {

//     if (upordown == 'up') { 
      
//       ++document.getElementById('quantity').value;
//     }

//     else if (upordown == 'down') { 
      
//       --document.getElementById('quantity').value; 
//     }
//   }

//   else if (quantity.value == 0) {

//     if (upordown == 'up') { ++document.getElementById('quantity').value; }
//   }

//   else { 
    
//     document.getElementById('quantity').value = 0; 
//   }
// }



// /* Total Price */
// var total_items = 3;

// function CalculateItemsValue() {

//   var total = 0;

//   for (let i = 1; i <= total_items; i++) {

//     itemID = document.getElementById("qnt_" + i);

//     total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
//   }

//   document.getElementById('ItemsTotal').innerHTML = "€" + total;
// }

// document.querySelectorAll('[id^="qnt_"]').forEach(item => {

//   item.addEventListener('keyup', CalculateItemsValue);
// });



