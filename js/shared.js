// Baselink being used on both the product and the index page
const baseLink = "http://joshkap.com/kimrichardt/wp-json/wp/v2/";

// Navbar functions, for on scroll, make the background black etc etc and expand
// Stick Navbar jQuery Script //
$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $(".nav-wrapper").addClass("black");
  } else {
    $(".nav-wrapper").removeClass("black");
  }
});

// Burger menu javascript //
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function burgerMenu() {
  var productsLink = document.getElementById("products-link");
  var aboutLink = document.getElementById("about-link");
  var contactLink = document.getElementById("contact-link");
  // var x = document.getElementById("myLinks");
  if (productsLink.style.display === "block") {
    productsLink.style.display = "none";
    aboutLink.style.display = "none";
    contactLink.style.display = "none";
  } else {
    productsLink.style.display = "block";
    aboutLink.style.display = "block";
    contactLink.style.display = "block";
    /* adding transition */
    productsLink.classList.add("smooth");
    aboutLink.classList.add("smooth");
    contactLink.classList.add("smooth");
  }
}
