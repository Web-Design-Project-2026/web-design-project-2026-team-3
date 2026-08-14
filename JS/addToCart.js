// addToCartjs -> SAVE TICKET TO LOCAL S WHEN CLICK BUTTON ON TICKET PAGE

function addToCart(ticket) {
  var saved = localStorage.getItem("btl_cart");
  var cart;
  //check whas in the cart atm

  if (saved) {
    cart = JSON.parse(saved);
  } else {
    cart = []; // if nothing saved yet -> start fresh
  }

  //check if ticket type already in the cart
  var alreadyInCart = false;

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === ticket.id) {
      cart[i].qty = cart[i].qty + 1;
      alreadyInCart = true;
      break;
    }
  }
  if (alreadyInCart === false) {
    ticket.qty = 1;
    cart.push(ticket);
  }

  //updated local s
  localStorage.setItem("btl_cart", JSON.stringify(cart));

  window.location.href = "shoppingCart.html"; // send user to the cart page straight away
}
