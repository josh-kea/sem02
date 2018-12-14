// Stick Navbar jQuery Script //
$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});

// Slideshow slick jQuery //
$(document).ready(function() {
  $(".slideshow").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  });
});

// Rest Api //
const baseLink = "http://joshkap.com/kimrichardt/wp-json/wp/v2/";

// Function, called later, to load all of the products post type in wordpress backend //
function loadAll() {
  fetch(baseLink + "product?&_embed")
    .then(e => e.json())
    .then(showAll);
}

function showAll(data) {
  console.log(data);
  // Styling the a's based on the catid in the url bar
  //For Each list item it will change the tags content according to the the list item's field values. //
  //data.forEach(product => {
  // Cloning the template and storing it into a constant variable called clone (to be appended later to main)
  /* const clone = listTemplate.cloneNode(true);
    const eventName = data.title.rendered;
    const eventVenue = event.acf.venue;
    const eventDate = event.acf.date;
    const eventTime = event.acf.time;
    const admissionType = event.acf.payment_type;
    const ticketPrice = event.acf.ticket_price;
    const doorPrice = event.acf.door_price;

    const ticketLink = event.acf.ticket_link;


    const eventCats = event.categories[2];

    if (eventCats === 16) {
      clone.querySelector(".event-category-h3").textContent = "Stand Up";
    } else if (eventCats === 21) {
      clone.querySelector(".event-category-h3").textContent = "Storytelling";
    }

    clone.querySelector(".event-name-h2").textContent = eventName;
    clone.querySelector(".event-venue-p").textContent = eventVenue;
    clone.querySelector(".date-span").textContent =
      eventDate.substring(6, 8) + "/" + eventDate.substring(4, 6);
    clone.querySelector(".time-span").textContent = eventTime;
    clone.querySelector(".admission-span").textContent = admissionType;

    // Checking to see if there is a ticket price or door price, setting price accordingly.
    if (ticketPrice) {
      clone.querySelector(".price-span").textContent = ticketPrice;
    } else if (doorPrice) {
      clone.querySelector(".price-span").textContent = doorPrice;
    } else if (ticketPrice && doorPrice) {
      clone.querySelector(".price-span").textContent =
        ticketPrice + " + " + doorPrice + " at Door";
    }

    clone.querySelector(".event-buy-ticket-btn").href = ticketLink;
    clone.querySelector(".event-see-info-btn").href =
      "eventDetails.html?eventid=" + event.id;

    if (admissionType === "FREE") {
      clone.querySelector(".end").remove();
      clone.querySelector(".event-buy-ticket-btn").remove();
    } else if (admissionType === "PAY AT DOOR") {
      clone.querySelector(".event-buy-ticket-btn").remove();
    }

    // Changing the text content to be the fetched fields from JSON for each grocery

    // Setting Img to be the wordpress featured image assigned to each grocery posts (if it exists, otherwise removes <img> from html)
    if (event._embedded["wp:featuredmedia"]) {
      clone.querySelector("img").src =
        event._embedded[
          "wp:featuredmedia"
        ][0].media_details.sizes.medium.source_url;
    } else {
       clone.querySelector(".event-article").remove();
    }
     appending the clone to the main tag
    document.querySelector("main").appendChild(clone);
    eventsCount++;
    console.log(eventsCount);
    eventsCounter.textContent = eventsCount; */
  // });
}

loadAll();
