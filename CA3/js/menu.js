/* Product Add Quantity +, -  */
function setQuantity(upordown) {

  var quantity = document.getElementById('quantity');

  if (quantity.value > 0) {

    if (upordown == 'up') { ++document.getElementById('quantity').value; }

    else if (upordown == 'down') { --document.getElementById('quantity').value; }
  }

  else if (quantity.value == 0) {

    if (upordown == 'up') { ++document.getElementById('quantity').value; }
  }

  else { document.getElementById('quantity').value = 0; }
}




