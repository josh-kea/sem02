// Stick Navbar jQuery Script //
$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});

// Rest Api //
const baseLink = "http://joshkap.com/kimrichardt/wp-json/wp/v2";

// Function, called later, to load all of the products post type in wordpress backend //
function loadAll() {
  fetch(baseLink + "product?&_embed")
    .then(e => e.json())
    .then(showAll);
}
