/* Product Add Quantity +, -  */
function setQuantity(upordown) {

  var quantity = document.getElementById('quantity');

  if (quantity.value > 0) {

    if (upordown == 'up') { 
      
      ++document.getElementById('quantity').value;
    }

    else if (upordown == 'down') { 
      
      --document.getElementById('quantity').value; 
    }
  }

  else if (quantity.value == 0) {

    if (upordown == 'up') { ++document.getElementById('quantity').value; }
  }

  else { 
    
    document.getElementById('quantity').value = 0; 
  }
}



// /* Total Price */
var total_items = 3;

function CalculateItemsValue() {

  var total = 0;

  for (let i = 1; i <= total_items; i++) {

    itemID = document.getElementById("qnt_" + i);

    total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
  }

  document.getElementById('ItemsTotal').innerHTML = "€" + total;
}

document.querySelectorAll('[id^="qnt_"]').forEach(item => {

  item.addEventListener('keyup', CalculateItemsValue);
});
