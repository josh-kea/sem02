// Rest Api //
const template = document.querySelector("#product-info-template").content;
const params = new URLSearchParams(window.location.search);
const productID = params.get("productid");

/* function loadOne(productID) {
  fetch(baseLink + "product" + productID + "?_embed")
    .then(e => e.json())
    .then(showOne);
} */

function loadOne() {
  fetch(baseLink + "product/" + productID + "?_embed")
    .then(e => e.json())
    .then(showOne);
}

function showOne(product) {
  console.log(product);

  const clone = template.cloneNode(true);
  const productTitle = product.title.rendered;
  const productYear = product.acf.year;

  const productCollection = product.acf.collection;
  const productMaterials = product.acf.materials;
  const material1 = product.acf.material_image1.url;
  const material2 = product.acf.material_image_2.url;
  const resellerName = product.acf.reseller_name;
  const resellerLink = product.acf.find_reseller_link;
  const backgroundImg = product.acf.background_image.url;
  const frontImg = product.acf.front_image.url;

  // DOING //
  const productDimensions = product.acf.dimensions;
  const productContent = product.content.rendered;
  const bottomImg1 = product.acf.bottom_image_1.url;
  const bottomImg2 = product.acf.bottom_image_2.url;
  const bottomImg3 = product.acf.bottom_image_3.url;

  clone.querySelector(".product-title h1").textContent = productTitle;
  clone.querySelector(".product-year").textContent = productYear;
  clone.querySelector(
    ".product-collection span"
  ).textContent = productCollection;
  clone.querySelector(".product-materials span").textContent = productMaterials;
  clone.querySelector(".material1").src = material1;
  clone.querySelector(".material2").src = material2;
  clone.querySelector(".front").src = frontImg;
  //Reseller //
  clone.querySelector(".product-find-reseller a").innerHTML = resellerName;
  clone.querySelector(".product-find-reseller a").href = resellerLink;

  // DOING TEXT CONTENT, DIMENSIONS, 3x BOTTOM IMAGES, BACK IMAGE
  clone.querySelector(
    ".product-dimensions span"
  ).textContent = productDimensions;
  // InnerHTML of the text area //
  // Remember to add margin if more than 2 paragraphs //
  clone.querySelector(".product-description").innerHTML = productContent;
  // Bottom Images
  clone.querySelector(".product-extra-img-1 img").src = bottomImg1;
  clone.querySelector(".product-extra-img-2 img").src = bottomImg2;
  clone.querySelector(".product-extra-img-3 img").src = bottomImg3;

  document.querySelector("main").appendChild(clone);
}

loadOne(productID);
