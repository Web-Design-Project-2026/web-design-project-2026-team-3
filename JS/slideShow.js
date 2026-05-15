var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var current = 0;
var timer;

function goToSlide(index) {
  // remove the active
  slides[current].classList.remove("active");
  dots[current].classList.remove("active");

  current = (index + slides.length) % slides.length;

  //active to the new slide &dots
  slides[current].classList.add("active");
  dots[current].classList.add("active");
}

function nextSlide() {
  goToSlide(current + 1);
}
function prevSlide() {
  goToSlide(current - 1);
}

// Hook up the arrow buttons
document.querySelector(".slide-next").onclick = function () {
  nextSlide();
  resetTimer(); //restart
};
document.querySelector(".slide-prev").onclick = function () {
  prevSlide();
  resetTimer();
};

dots.forEach(function (dot, index) {
  dot.onclick = function () {
    goToSlide(index);
    resetTimer();
  };
});

//changes slide automatically every 4 seconds
function startTimer() {
  timer = setInterval(nextSlide, 4000);
}

function resetTimer() {
  clearInterval(timer);
  startTimer();
  startTimer();
}
