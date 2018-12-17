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
  const productName = product.title.rendered;
  const productYear = product.acf.year;
  const productContent = product.content.rendered;
  const productCollection = product.acf.collection;
  const productMaterials = product.acf.materials;
  const material1 = product.acf.material_image1.url;
  const material2 = product.acf.material_image_2.url;
  const resellerName = product.acf.reseller_name;
  const resellerLink = product.acf.find_reseller_link;
  const backgroundImg = product.acf.background_image.url;
  const frontImg = product.acf.front_image.url;

  console.log(material1);

  // Changing the textcontent of the spans //

  document.querySelector("main").appendChild(clone);
}

loadOne(productID);
