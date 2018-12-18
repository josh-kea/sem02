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

loadAll();
