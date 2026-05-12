function openMenu() {
  var menu = document.getElementById("mobile-menu");
  menu.classList.add("open");
  document.body.style.overflow = "hidden"; // prevent background scroll
  // Update aria-expanded on hamburger
  document
    .querySelector(".nav-hamburger")
    .setAttribute("aria-expanded", "true");
}

function closeMenu() {
  var menu = document.getElementById("mobile-menu");
  menu.classList.remove("open");
  document.body.style.overflow = "";
  document
    .querySelector(".nav-hamburger")
    .setAttribute("aria-expanded", "false");
}
