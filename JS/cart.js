//CHECK CARD LOCAL STORAGE
function getCart() {
  var saved = localStorage.getItem("btl_cart");
  if (saved) {
    return JSON.parse(saved);
  }
  return [];
}
//Save to localS
function saveCart(cart) {
  localStorage.setItem("btl_cart", JSON.stringify(cart));
}

function changeQty(id, delta) {
  var cart = getCart();

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].qty = cart[i].qty + delta;

      if (cart[i].qty < 1) {
        cart[i].qty = 1;
      }
      break;
    }
  }

  saveCart(cart);
  showCart(); //redraw
}

// REMOVE ITEM
function removeItem(id) {
  var cart = getCart();
  var newCart = [];

  //keeps everyt except the item being removed
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id !== id) {
      newCart.push(cart[i]);
    }
  }
  saveCart(newCart);
  showCart();
}

// Draw the cart on the page
function showCart() {
  var container = document.getElementById("cart-content");
  if (container === null) return; // ns errors on other pages

  container.innerHTML = ""; //clears before redraw
  var cart = getCart();

  // empty cart
  if (cart.length === 0) {
    var emptyMsg = document.createElement("p");
    emptyMsg.textContent = "Your cart is empty.";
    container.appendChild(emptyMsg);

    var buyLink = document.createElement("a");
    buyLink.href = "tickets.html";
    buyLink.textContent = "Buy Tickets";
    buyLink.className = "btn-buy-more";
    container.appendChild(buyLink);

    return;
  }

  // One card per ticket
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];

    //card
    var card = document.createElement("div");
    card.className = "cart-item";

    //img
    var img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    card.appendChild(img);

    //info
    var info = document.createElement("div");
    info.className = "cart-item-info";

    // name
    var nameEl = document.createElement("h2");
    nameEl.textContent = item.name;
    info.appendChild(nameEl);

    //desc
    var descEl = document.createElement("p");
    descEl.textContent = item.description;
    info.appendChild(descEl);

    //price
    var priceEl = document.createElement("p");
    priceEl.className = "cart-item-price";
    priceEl.textContent = "$" + item.price.toFixed(2);
    info.appendChild(priceEl);

    //qty
    var qtyRow = document.createElement("div");
    qtyRow.className = "qty-controls";

    var minusBtn = document.createElement("button");
    minusBtn.className = "qty-btn";
    minusBtn.textContent = "−";
    minusBtn.setAttribute("aria-label", "Decrease quantity");
    minusBtn.setAttribute("data-id", item.id);
    minusBtn.onclick = function () {
      changeQty(this.getAttribute("data-id"), -1);
    };

    var qtyNum = document.createElement("span");
    qtyNum.className = "qty-value";
    qtyNum.textContent = item.qty;

    var plusBtn = document.createElement("button");
    plusBtn.className = "qty-btn";
    plusBtn.textContent = "+";
    plusBtn.setAttribute("aria-label", "Increase quantity");
    plusBtn.setAttribute("data-id", item.id);
    plusBtn.onclick = function () {
      changeQty(this.getAttribute("data-id"), 1);
    };

    qtyRow.appendChild(minusBtn);
    qtyRow.appendChild(qtyNum);
    qtyRow.appendChild(plusBtn);
    info.appendChild(qtyRow);

    card.appendChild(info);

    //x remove btn
    var removeBtn = document.createElement("button");
    removeBtn.className = "btn-remove";
    removeBtn.textContent = "✕";
    removeBtn.setAttribute("aria-label", "Remove " + item.name + " from cart");
    removeBtn.setAttribute("data-id", item.id);
    removeBtn.onclick = function () {
      removeItem(this.getAttribute("data-id"));
    };
    card.appendChild(removeBtn);

    container.appendChild(card);
  }

  //buy more tickets
  var moreLink = document.createElement("a");
  moreLink.href = "tickets.html";
  moreLink.textContent = "Buy More Tickets";
  moreLink.className = "btn-buy-more";
  container.appendChild(moreLink);
}

showCart();
