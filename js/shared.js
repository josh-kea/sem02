// Baselink being used on both the product and the index page
const baseLink = "http://joshkap.com/kimrichardt/wp-json/wp/v2/";

// Navbar functions, for on scroll, make the background black etc etc and expand
// Stick Navbar jQuery Script //

// Burger menu javascript //
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function burgerMenu() {
  var productsLink = document.getElementById("products-link");
  var aboutLink = document.getElementById("about-link");
  var contactLink = document.getElementById("contact-link");
  var homeLink = document.getElementById("home-link");
  var navbar = document.getElementsByClassName("nav-wrapper");
  // var x = document.getElementById("myLinks");
  if (productsLink.style.display === "block") {
    productsLink.style.display = "none";
    aboutLink.style.display = "none";
    contactLink.style.display = "none";
    homeLink.style.display = "none";
    $(".nav-wrapper").removeClass("black");
  } else {
    productsLink.style.display = "block";
    aboutLink.style.display = "block";
    contactLink.style.display = "block";
    homeLink.style.display = "block";

    /* adding transition */
    productsLink.classList.add("smooth");
    aboutLink.classList.add("smooth");
    contactLink.classList.add("smooth");
    homeLink.classList.add("smooth");
    $(".nav-wrapper").addClass("black");
    $(".black").addClass("smooth");
  }
}

$(".scroll-to-top-button").hide();

$(".scroll-to-top-button").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: 0
    },
    700
  );
});

// Scroll to top button appearing and dissapearing //
$(window).scroll(function() {
  if ($(window).scrollTop() > 1) {
    // Waiting 2seconds
    $(".scroll-to-top-button").addClass("smoothIn");
    $(".scroll-to-top-button").show();
  }
  if ($(window).scrollTop() - $(window).height() === 0 - $(window).height()) {
    $(".scroll-to-top-button").hide();
  }
});
