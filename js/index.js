// Testing on load function //

$(document).ready(function() {
  console.log("yeehaw!");
  kimName.classList.add("smooth");
  kimText.classList.add("smooth2");
});

// Rest Api //

// Function, called later, to load all of the products post type in wordpress backend //
function loadAll() {
  fetch(baseLink + "product?&_embed")
    .then(e => e.json())
    .then(showAll);
}

const productSectionGrid = document.querySelector(".product-section");
const productTemplate = document.querySelector(".product-template").content;

var productCount = 0;

function showAll(data) {
  console.log(data);
  //For Each list item it will change the tags content according to the the list item's field values. //
  data.forEach(product => {
    // Cloning the template and storing it into a constant variable called clone (to be appended later to main)
    const clone = productTemplate.cloneNode(true);
    const productTitle = product.title.rendered;
    const backgroundImg = product.acf.background_image.url;
    const productYear = product.acf.year;
    const frontImg = product.acf.front_image.url;

    // Testing if the product is set to featured product in wordpress. If so it'll change the static featured product section accordingly //
    if (product.acf.featured_product === "Yes") {
      console.log("yes worked once");
      document.querySelector(
        ".featuredProductImage h2"
      ).textContent = productTitle;
      document.querySelector(
        ".featuredProductImage p span"
      ).textContent = productYear;
      document.querySelector(".featuredProductImage img").src = frontImg;
      document.querySelector(".featuredProductImage a").href =
        "product.html?productid=" + product.id;
    } else {
      productCount++;
      clone.querySelector("h2").textContent = productTitle;
      clone.querySelector(".product-template-div").style.backgroundImage =
        "url('" + backgroundImg + "')";
      clone.querySelector(".product-template-div").classList.add("test");
      //* Adding the product.id parameter to the URL bar when the link box is clicked. This will fetch product details for only that productid.
      clone.querySelector("a").href = "product.html?productid=" + product.id;
      // Checking to see if there is a ticket price or door price, setting price accordingly.
      productSectionGrid.appendChild(clone);
    }
    console.log(productCount);
  });
}

// INDEX PAGE ONLY //
// LOADING SLOW ANIMATIONS WITH JQUERY! WHEN SCROLLED PAST //

$(".bold").hide();
$(".bold2").hide();
$(".quote-mark").hide();
var scrollBottom = $(window).scrollTop() + $(window).height();

//Loading the two bold texts in the quote 1s after each other //
var topofQuote = $(".quote-h2").offset().top; //gets offset of header

$(window).scroll(function() {
  if ($(window).scrollTop() + $(window).height() > topofQuote) {
    $(".bold").show();
    $(".bold").addClass("smooth2s");
    // Waiting 2seconds
    setTimeout(function() {
      $(".bold2").show();
      $(".bold2").addClass("smooth2s");
      $(".quote-mark").show();
      $(".quote-mark").addClass("smooth2s");
    }, 2000);

    console.log("LOL IT WORKED!!");
  }
});

$(".about-me-front-img-div-mobile").hide();

// KIM front image appearing when scrolled into section //
var topofStory = $(".about-me-section").offset().top; //gets offset of header
$(window).scroll(function() {
  if ($(window).scrollTop() > topofStory) {
    $(".about-me-front-img-div-mobile").show();
    $(".about-me-front-img-div-mobile").addClass("smooth");
  }
});

// CURRENT PARTNERS SLOW LOADING WHEN SCROLLED //
$(".gestalten-logo").hide();
$(".illum-logo").hide();
$(".frama-logo").hide();
var topofPartners = $(".become-partner-section").offset().top; //gets offset of header

$(window).scroll(function() {
  if ($(window).scrollTop() + $(window).height() > topofPartners) {
    $(".gestalten-logo").show();
    $(".gestalten-logo").addClass("smooth1s");
    // Waiting 2seconds
    setTimeout(function() {
      $(".illum-logo").show();
      $(".illum-logo").addClass("smooth1s");
    }, 1000);
    setTimeout(function() {
      $(".frama-logo").show();
      $(".frama-logo").addClass("smooth1s");
    }, 2000);
  }
});

loadAll();

$(".featured-product-front").hide();

// KIM front image appearing when scrolled into section //
var topofFeatured = $(".featured-product-video-section").offset().top; //gets offset of header
$(window).scroll(function() {
  if ($(window).scrollTop() > topofFeatured) {
    $(".featured-product-front").show();
    $(".featured-product-front").addClass("smooth");
  }
});

// Floating Image with mouse function //

/*

var float1 = $("#float-img-1");
var float2 = $("#float-img-2");

$(".second-section").mousemove(function(e) {
  var valueX = (e.pageX * 1) / 50;
  var valueY = (e.pageY * 1) / 50;
  float1.css({
    transform: "translate3d(" + valueX + "px," + valueY + "px,0)"
  });
});

$(".featured-product-video-section").mousemove(function(e) {
  var valueX = (e.pageX * 1) / 200;
  var valueY = (e.pageY * 1) / 200;
  float2.css({
    transform: "translate3d(" + valueX + "px," + valueY + "px,0)"
  });
});

*/

$(".featured-product-grid span").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#3").offset().top
    },
    500
  );
});

// Section linking
// Hover function
$("#products-link").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#1").offset().top
    },
    500
  );
});
$("#about-link").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#2").offset().top
    },
    700
  );
});
$("#contact-link").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#3").offset().top
    },
    900
  );
});
