var eventDate = new Date(2026, 9, 1, 9, 0, 0); // atm set as 1 oct 2026, 09:00

function updateCountdown() {
  var now = new Date();
  var diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById("cd-days").textContent = "00";
    document.getElementById("cd-hours").textContent = "00";
    document.getElementById("cd-minutes").textContent = "00";
    return;
  }

  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("cd-days").textContent = String(days).padStart(
    2,
    "0",
  );
  document.getElementById("cd-hours").textContent = String(hours).padStart(
    2,
    "0",
  );
  document.getElementById("cd-minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );
}

updateCountdown();
setInterval(updateCountdown, 60000);
