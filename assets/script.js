// This fucntion controls the sliders
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item-slide");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
}
// Lily's API Key for TMDB
const apiKeyTm = "d8456d6d5c57d78561ea4588cc7a1a54";

// Base url for API key
const requestURL = "https://api.themoviedb.org/3/movie/11?api_key=" + apiKeyTm;

// Navbar functionality
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

//// function to capture user input

//// Function select specific genre
let genreClass = document.querySelectorAll(".genre");
genreClass.forEach((el) => {
  el.addEventListener("click", (e) => {
    let currBtn = e.target;
    // console.log(currBtn.dataset.id);
    currBtn.setAttribute("href", `./search.html?genreId=${currBtn.dataset.id}`);
  });
});
