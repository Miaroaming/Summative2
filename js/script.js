/* jshint esversion: 6 */

// My Array
const properties = [{
    id: 1,
    type: 'Hotel',
    name: "Lion Rock Retreat",
    location: "Piha Beach",
    price: 157,
    meals: 3,
    minStay: 1,
    maxStay: 5,
    maxGuests: 2,
    bathrooms: 1,
    longitude: 174.4686,
    latitude: -36.9531,
    wifi: "Free Unlimited Wifi",
    family: "Family Friendly",
    image1: "./images/hotelpiha2.webp",
    image2: "./images/hotelpiha3.webp",
    image3: "./images/hotelpiha1.webp",
    description: 'Nestled near the iconic Lion Rock, Lion Rock Retreat offers luxurious accommodations with breathtaking ocean views. Enjoy top-notch amenities, a relaxing spa, and easy access to Piha’s famous surf spots.'
  },
  {
    id: 2,
    type: 'Hostel',
    name: "Surfside Lodge",
    location: "Piha Beach",
    price: 30,
    meals: 3,
    minStay: 1,
    maxStay: 10,
    maxGuests: 1,
    bathrooms: 1,
    longitude: 174.4678,
    latitude: -36.9542,
    wifi: "Free 8GB Wifi",
    family: "Not Suitable for Children",
    image1: "./images/hostelpiha2.webp",
    image2: "./images/hostelpiha3.webp",
    image3: "./images/hostelpiha1.webp",
    description: 'Surfside Lodge is a budget-friendly haven for travelers and surfers alike. With its laid-back atmosphere, communal kitchen, and proximity to the beach, it’s the perfect place to meet fellow adventurers.'
  },
  {
    id: 3,
    type: 'Motel',
    name: "Black Sand Haven",
    location: "Piha Beach",
    price: 90,
    meals: 3,
    minStay: 3,
    maxStay: 10,
    maxGuests: 4,
    bathrooms: 2,
    longitude: 174.4695,
    latitude: -36.9539,
    wifi: "Free 10GB Wifi",
    family: "Family Friendly",
    image1: "./images/motelpiha2.webp",
    image2: "./images/motelpiha3.webp",
    image3: "./images/motelpiha1.webp",
    description: 'Black Sand Haven provides comfortable and affordable lodging just steps away from Piha’s unique black sand beach. Each room offers modern amenities and a cozy ambiance, ideal for a relaxing stay.'
  },
  {
    id: 4,
    type: 'House',
    name: "Piha Paradise",
    location: "Piha Beach",
    price: 240,
    meals: 3,
    minStay: 2,
    maxStay: 15,
    maxGuests: 4,
    bathrooms: 2,
    longitude: 174.4702,
    latitude: -36.9545,
    wifi: "Free Unlimited Wifi",
    family: "Family Friendly",
    image1: "./images/homepiha1.webp",
    image2: "./images/homepiha3.webp",
    image3: "./images/homepiha2.webp",
    description: 'Piha Paradise is a charming beachfront house available for rent. With its spacious living areas, fully equipped kitchen, and stunning ocean views, it’s an ideal retreat for families and groups.'
  },
  {
    id: 5,
    type: 'Hotel',
    name: "Summit Shores",
    location: "Mount Maunganui Beach",
    price: 157,
    meals: 3,
    minStay: 1,
    maxStay: 5,
    maxGuests: 2,
    bathrooms: 1,
    longitude: 176.1775,
    latitude: -37.6334,
    wifi: "Free Unlimited Wifi",
    family: "Family Friendly",
    image1: "./images/hotelmount1.webp",
    image2: "./images/hotelmount3.webp",
    image3: "./images/hotelmount2.webp",
    description: 'Summit Shores Hotel offers upscale accommodations with panoramic views of Mount Maunganui and the pristine beach. Guests can enjoy a rooftop pool, gourmet dining, and easy beach access.'
  },
  {
    id: 6,
    type: 'Hostel',
    name: "Bay Bliss Backpackers",
    location: "Mount Maunganui Beach",
    price: 30,
    meals: 3,
    minStay: 1,
    maxStay: 10,
    maxGuests: 1,
    bathrooms: 1,
    longitude: 176.1783,
    latitude: -37.6342,
    wifi: "Free 8GB Wifi",
    family: "Not Suitable for Children",
    image1: "./images/hostelmount1.webp",
    image2: "./images/hostelmount2.webp",
    image3: "./images/hostelmount3.webp",
    description: 'Bay Bliss Backpackers is a lively and affordable hostel located just a short walk from the beach. With shared dorms, private rooms, and a vibrant common area, it’s a great spot for budget travelers.'
  },
  {
    id: 7,
    type: 'Motel',
    name: "Coastal Comfort Inn",
    location: "Mount Maunganui Beach",
    price: 90,
    meals: 3,
    minStay: 3,
    maxStay: 10,
    maxGuests: 4,
    bathrooms: 2,
    longitude: 176.1792,
    latitude: -37.6351,
    wifi: "Free 10GB Wifi",
    family: "Family Friendly",
    image1: "./images/motelmount1.webp",
    image2: "./images/motelmount2.webp",
    image3: "./images/motelmount3.webp",
    description: 'Coastal Comfort Inn provides cozy, well-appointed rooms perfect for families and solo travelers. Located near the beach, it offers convenient amenities and friendly service for a pleasant stay.'
  },
  {
    id: 8,
    type: 'House',
    name: "Mount Serenity Villa",
    location: "Mount Maunganui Beach",
    price: 240,
    meals: 3,
    minStay: 2,
    maxStay: 15,
    maxGuests: 4,
    bathrooms: 2,
    longitude: 176.1767,
    latitude: -37.6328,
    wifi: "Free Unlimited Wifi",
    family: "Family Friendly",
    image1: "./images/housemount1.webp",
    image2: "./images/housemount2.webp",
    image3: "./images/housemount3.webp",
    description: 'Mount Serenity Villa is a luxurious rental house featuring modern design, spacious interiors, and a private garden. It’s an idyllic escape for those seeking comfort and tranquility near the beach.'
  },
  {
    id: 9,
    type: 'Hotel',
    name: "Coveview Resort",
    location: "Cathedral Cove",
    price: 157,
    meals: 3,
    minStay: 1,
    maxStay: 5,
    maxGuests: 2,
    bathrooms: 1,
    longitude: 175.7916,
    latitude: -36.8414,
    wifi: "Free Unlimited Wifi",
    family: "Family Friendly",
    image1: "./images/hotelcove1.webp",
    image2: "./images/hotelcove2.webp",
    image3: "./images/hotelcove3.webp",
    description: 'Coveview Resort boasts stunning views of Cathedral Cove and offers high-end accommodations with luxurious amenities. Enjoy the infinity pool, spa services, and gourmet dining while soaking in the beauty of the surroundings.'
  },
  {
    id: 10,
    type: 'Hostel',
    name: "Archway Adventures",
    location: "Cathedral Cove",
    price: 30,
    meals: 3,
    minStay: 1,
    maxStay: 10,
    maxGuests: 1,
    bathrooms: 1,
    longitude: 175.7924,
    latitude: -36.8423,
    wifi: "Free 8GB Wifi",
    family: "Not Suitable for Children",
    image1: "./images/hostelcove1.webp",
    image2: "./images/hostelcove2.webp",
    image3: "./images/hostelcove3.webp",
    description: 'Archway Adventures Hostel is a cozy and affordable option for travelers exploring Cathedral Cove. With dormitory and private rooms, a communal kitchen, and friendly staff, it’s perfect for social and solo adventurers.'
  },
  {
    id: 11,
    type: 'Motel',
    name: "Beachfront Bliss",
    location: "Cathedral Cove",
    price: 90,
    meals: 3,
    minStay: 3,
    maxStay: 10,
    maxGuests: 4,
    bathrooms: 2,
    longitude: 175.7909,
    latitude: -36.8405,
    wifi: "Free 10GB Wifi",
    family: "Family Friendly",
    image1: "./images/motelcove1.webp",
    image2: "./images/motelcove2.webp",
    image3: "./images/motelcove3.webp",
    description: 'Beachfront Bliss Motel provides comfortable lodging with direct access to the beautiful beach. Each room is designed for relaxation, making it an excellent choice for beach lovers and explorers.'
  },
  {
    id: 12,
    type: 'House',
    name: "Seaside Sanctuary",
    location: "Cathedral Cove",
    price: 240,
    meals: 3,
    minStay: 2,
    maxStay: 15,
    maxGuests: 4,
    bathrooms: 2,
    longitude: 175.7932,
    latitude: -36.8418,
    wifi: "Free Unlimited Wifi",
    family: "Family Friendly",
    image1: "./images/housecove1.webp",
    image2: "./images/housecove2.webp",
    image3: "./images/housecove3.webp",
    description: 'Seaside Sanctuary is a picturesque rental house offering breathtaking ocean views and modern amenities. It’s the perfect getaway for families and friends looking to experience the serene beauty of Cathedral Cove.'
  },
  {
    id: 13,
    type: 'Hotel',
    name: "Horizon Sands",
    location: "Ninety Mile Beach",
    price: 157,
    meals: 3,
    minStay: 1,
    maxStay: 5,
    maxGuests: 2,
    bathrooms: 1,
    longitude: 173.0915,
    latitude: -34.8389,
    wifi: "Free Unlimited Wifi",
    family: "Family Friendly",
    image1: "./images/hotelninety1.webp",
    image2: "./images/hotelninety2.webp",
    image3: "./images/hotelninety3.webp",
    description: 'Horizon Sands Hotel offers premium accommodations with stunning views of the expansive Ninety Mile Beach. Guests can enjoy luxury rooms, fine dining, and a range of recreational activities.'
  },
  {
    id: 14,
    type: 'Hostel',
    name: "Dune Dwellers Backpackers",
    location: "Ninety Mile Beach",
    price: 30,
    meals: 3,
    minStay: 1,
    maxStay: 10,
    maxGuests: 1,
    bathrooms: 1,
    longitude: 173.0923,
    latitude: -34.8400,
    wifi: "Free 8GB Wifi",
    family: "Not Suitable for Children",
    image1: "./images/hostelninety1.webp",
    image2: "./images/hostelninety2.webp",
    image3: "./images/hostelninety3.webp",
    description: 'Dune Dwellers Backpackers is a budget-friendly hostel catering to adventurers and backpackers. With its communal areas, shared kitchen, and proximity to the beach, it’s an ideal spot for meeting like-minded travelers.'
  },
  {
    id: 15,
    type: 'Motel',
    name: "Endless Horizon",
    location: "Ninety Mile Beach",
    price: 90,
    meals: 3,
    minStay: 3,
    maxStay: 10,
    maxGuests: 4,
    bathrooms: 2,
    longitude: 173.0907,
    latitude: -34.8395,
    wifi: "Free 10GB Wifi",
    family: "Family Friendly",
    image1: "./images/motelninety1.webp",
    image2: "./images/motelninety2.webp",
    image3: "./images/motelninety3.webp",
    description: 'Endless Horizon Motel provides comfortable and affordable rooms with easy access to the vast stretches of Ninety Mile Beach. Enjoy a relaxing stay with all the necessary amenities for a beachside retreat.'
  },
  {
    id: 16,
    type: 'House',
    name: "Beachside Escape",
    location: "Ninety Mile Beach",
    price: 240,
    meals: 3,
    minStay: 2,
    maxStay: 15,
    maxGuests: 4,
    bathrooms: 2,
    longitude: 173.0931,
    latitude: -34.8411,
    wifi: "Free Unlimited Wifi",
    family: "Family Friendly",
    image1: "./images/houseninety1.webp",
    image2: "./images/houseninety2.webp",
    image3: "./images/houseninety3.webp",
    description: 'Beachside Escape is a charming rental home perfect for a serene vacation. Featuring spacious interiors, modern conveniences, and stunning beach views, it’s an ideal choice for families and groups.'
  },
  {
    id: 17,
    type: 'Hotel',
    name: "Thermal Tides",
    location: "Hot Water Beach",
    price: 157,
    meals: 3,
    minStay: 1,
    maxStay: 5,
    maxGuests: 2,
    bathrooms: 1,
    longitude: 175.8182,
    latitude: -36.8931,
    wifi: "Free Unlimited Wifi",
    family: "Family Friendly",
    image1: "./images/hotelwater1.webp",
    image2: "./images/hotelwater2.webp",
    image3: "./images/hotelwater3.webp",
    description: 'Thermal Tides Hotel offers luxurious accommodations with a unique geothermal experience. Guests can enjoy hot spring baths, elegant rooms, and fine dining, all just steps from Hot Water Beach.'
  },
  {
    id: 18,
    type: 'Hostel',
    name: "Geothermal Getaway",
    location: "Hot Water Beach",
    price: 30,
    meals: 3,
    minStay: 1,
    maxStay: 10,
    maxGuests: 1,
    bathrooms: 1,
    longitude: 175.8191,
    latitude: -36.8942,
    wifi: "Free 8GB Wifi",
    family: "Not Suitable for Children",
    image1: "./images/hostelwater1.webp",
    image2: "./images/hostelwater2.webp",
    image3: "./images/hostelwater3.webp",
    description: 'Geothermal Getaway Hostel is a friendly and affordable hostel with easy access to the natural hot springs. With shared and private rooms, a communal kitchen, and a relaxed atmosphere, it’s perfect for budget travelers.'
  },
  {
    id: 19,
    type: 'Motel',
    name: "Warm Waters",
    location: "Hot Water Beach",
    price: 90,
    meals: 3,
    minStay: 3,
    maxStay: 10,
    maxGuests: 4,
    bathrooms: 2,
    longitude: 175.8175,
    latitude: -36.8927,
    wifi: "Free 10GB Wifi",
    family: "Family Friendly",
    image1: "./images/motelwater1.webp",
    image2: "./images/motelwater2.webp",
    image3: "./images/motelwater3.webp",
    description: 'Warm Waters Motel provides cozy and comfortable rooms, ideal for a relaxing stay near Hot Water Beach. Each room is equipped with modern amenities, making it a great base for exploring the area.'
  },
  {
    id: 20,
    type: 'House',
    name: "Hot Springs Hideaway",
    location: "Hot Water Beach",
    price: 240,
    meals: 3,
    minStay: 2,
    maxStay: 15,
    maxGuests: 4,
    bathrooms: 2,
    longitude: 175.8198,
    latitude: -36.8935,
    wifi: "Free Unlimited Wifi",
    family: "Family Friendly",
    image1: "./images/housewater1.webp",
    image2: "./images/housewater2.webp",
    image3: "./images/housewater3.webp",
    description: 'Hot Springs Hideaway is a beautiful rental house offering a private and peaceful retreat. With its spacious living areas, fully equipped kitchen, and proximity to the geothermal pools, it’s perfect for a relaxing getaway.'
  },
];


// Fullpage Init:
$(document).ready(function () {
  new fullpage('#fullpage', {
    licenseKey: 'gplv3-license',
    controlArrows: false,
    scrollOverflow: true,
  });

  //Mapbox Init:
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

  function initaliseMap(longitude, latitude) {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 16,
    });

    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);
  }
  
  
  fullpage_api.setAllowScrolling(true);


  // Home button to slide 1 section 1
  $('#homeButton').click(function () {
    fullpage_api.moveTo(1, 1);
  });


  // Swiper Init:
  const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  // Validate Filter
  function validateFilters() {
    let isValid = true;
    let errorMessage = "";

    if ($('#startDate').val() === "") {
      isValid = false;
      errorMessage += "Please select a start date.<br>";
    }
    if ($('#endDate').val() === "") {
      isValid = false;
      errorMessage += "Please select an end date.<br>";
    }

    if (!isValid) {
      $('#error-message').html(errorMessage).show();
    } else {
      $('#error-message').hide();
    }

    return isValid;
  }

  // DatePickers:
  $('#startDate').datepicker({
    dateFormat: "dd/mm/yy"
  });
  $('#endDate').datepicker({
    dateFormat: "dd/mm/yy"
  });

  // Back arrow button to section 1 slide 0
  $('.fa-arrow-left').click(function () {
    fullpage_api.moveTo(1, 0);
  });

  // Searchbtn function to section 2 slide 0
  $('#searchBtn').click(function (e) {
    e.preventDefault();
    if (validateFilters()) {
      fullpage_api.moveTo(2, 0);
      filterAndDisplayProperties();
    }
  });


  // Filtering Property cards
  function filterProperties() {
    const location = $('#location').val();
    const accom = $('#accom').val();
    const guests = parseInt($('#guests').val(), 4) || 0;
    const bathrooms = parseInt($('#bathrooms').val(), 5) || 0;
    const meals = parseInt($('#meals').val(), 4) || 0;
    const numberOfNights = calculateNights();
    const maxPrice = parseFloat($('#price').val()) || 250;

    const filteredProperties = properties.filter(property => {
      return (location === '' || property.location === location) &&
        (accom === '' || property.type === accom) &&
        (property.maxGuests >= guests) &&
        (property.bathrooms >= bathrooms) &&
        (property.meals >= meals) &&
        (property.minStay <= numberOfNights) &&
        (property.maxStay >= numberOfNights) &&
        (parseFloat(property.price) <= maxPrice);
    });

    return filteredProperties;
  }

  // Calculating Number of Nights
  function calculateNights() {
    const startDate = $('#startDate').datepicker('getDate');
    const endDate = $('#endDate').datepicker('getDate');

    if (startDate && endDate) {
      const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
      const numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return numberOfNights;
    } else {
      return 0;
    }
  }


  function filterAndDisplayProperties() {
    const filteredProperties = filterProperties();
    displayResults(filteredProperties);
  }

  filterAndDisplayProperties();

  // Populating Property Cards
  function displayResults(filteredResults) {
    const resultsDiv = $('#results');
    resultsDiv.empty();

    if (filteredResults.length === 0) {
      resultsDiv.html(`<p class="no-results">No Results Found</p>`);
    } else {
      $.each(filteredResults, function (index, property) {
        const propertyCardHTML = `
          <div class="property">
              <div class="swiper">
                  <!-- Additional required wrapper -->
                  <div class="swiper-wrapper">
                      <!-- Slides -->
                      <div class="swiper-slide"><img src="${property.image1}" alt="${property.name} image 1" class="property-image" value="${property.id}"></div>
                      <div class="swiper-slide"><img src="${property.image2}" alt="${property.name} image 2" class="property-image" value="${property.id}"></div>
                      <div class="swiper-slide"><img src="${property.image3}" alt="${property.name} image 3" class="property-image" value="${property.id}"></div>
                  </div>
                  <div class="swiper-pagination"></div>
              </div>
              <div class="property-details">
                  <h2>${property.name} ${property.type}</h2>
                  <p id="price">$${property.price} per night</p>
                  <p>${property.location}</p>
                  <div class="more-details">
                      <div class="property-amenities">
                          <p><i class="fa-solid fa-user-group"></i>${property.maxGuests} Guest/s</i></p>
                          <p><i class="fa-solid fa-shower"></i>${property.bathrooms} Bathroom/s</i></p>
                      </div>
                      <button class="read-more" data-id="${property.id}">Read More <i class="fa-solid fa-arrow-right"></i></button>
                  </div>
              </div>
          </div>
          `;
        resultsDiv.append(propertyCardHTML);
      });

      // Reinitializing swiper
      $('.swiper').each(function () {
        new Swiper(this, {
          direction: 'vertical',
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        });
      });
    }


    // Rebuilding Fullpage
    fullpage_api.reBuild();

    // Read more button to section 2 slide 1
    $('.read-more').click(function () {
      const propertyId = $(this).data('id');
      populateSelectedOutput(propertyId);
      fullpage_api.moveTo(2, 1);
    });
  }

  // Back arrow button to section 1 slide 1
  $('#back-arrow-populate').click(function () {
    fullpage_api.moveTo(1, 1);
  });

  // Populating Property Description page
  function populateSelectedOutput(propertyId) {
    const outputSlide = $('#selectedCardOutputSlide');

    const slideOutputHtml = `
    <div class="fp-overflow">
    <div class="selected-cont">
      <div class="selected-details">
        <div id="arrow-title">
            <i class="fa-solid fa-arrow-left" id="back-arrow-location"></i>
            <h3>${properties[propertyId - 1].name} ${properties[propertyId - 1].type}</h3>
        </div>
          <div class="img-text">
            <img src="${properties[propertyId - 1].image1}" alt="${properties[propertyId - 1].name}">
              <div class="text">
                <div class="price-button">
                    <p>$${properties[propertyId - 1].price} per night</p>
                    <button>Book now!</button>
                </div>
                <p><i class="fa-solid fa-user-group"></i>${properties[propertyId - 1].maxGuests} Guest/s Max    <i
                            class="fa-solid fa-shower"></i>${properties[propertyId - 1].bathrooms} Bathroom/s</p>
                <p>${properties[propertyId - 1].description}</p>
                <p>More Details:</p>
                <div class="more-amenities">
                  <p><i class="fa-solid fa-utensils"></i>${properties[propertyId - 1].meals} Meals Provided</p>
                  <p><i class="fa-solid fa-wifi"></i>${properties[propertyId - 1].wifi}</p>
                  <p><i class="fa-solid fa-person-breastfeeding"></i>${properties[propertyId - 1].family}</p>
                </div>
              </div>
          </div>
      </div>

      <div class="calculator">
        <h2>Select your meals for the total price of accom:</h2>
        <div class="meal" id="breakfast">
          <input type="checkbox" class="mealCheckbox" id="breakfastCheckbox" value="20">
          <i class="fa-solid fa-bowl-food"></i>
          <label for="breakfastCheckbox">$20pp <br> Buffet Breakfast</label>
        </div>
        <div class="meal" id="lunch">
          <input type="checkbox" class="mealCheckbox" id="lunchCheckbox" value="30">
          <i class="fa-solid fa-drumstick-bite"></i>
          <label for="lunchCheckbox">$30pp <br> Lunch</label>
        </div>
        <div class="meal" id="dinner">
          <input type="checkbox" class="mealCheckbox" id="dinnerCheckbox" value="50">
          <i class="fa-solid fa-shrimp"></i>
          <label for="dinnerCheckbox">$50pp <br> Dinner</label>
        </div>
          <button id="total-button">Total price</button>
          <h2>= $<span id="totalAmount">0</span></h2>
      </div>

      <h3>Check out how close it is to the beach!</h3>
      <div id="map"></div>
      </div>
    </div>
        `;

    // Mapbox custom marker
    const longitude = properties[propertyId - 1].longitude;
    const latitude = properties[propertyId - 1].latitude;

    outputSlide.empty();
    outputSlide.append(slideOutputHtml);
    initaliseMap(longitude, latitude);

    calculateInitialTotalPrice(propertyId);

    // Total price button
    $('#total-button').click(() => {
      calculateTotalPrice(propertyId);
    });

    // Back arrow button to section 2 slide 0
    $('#back-arrow-location').click(function () {
      fullpage_api.moveTo(2, 0);
    });

  }

  // Calculating Initial Price of Room and Guests and Nights
  function calculateInitialTotalPrice(propertyId) {
    const numberOfNights = calculateNights();
    const guests = parseInt($('#guests').val());
    const roomPrice = parseInt(properties[propertyId - 1].price);

    const initialTotalPrice = roomPrice * numberOfNights * guests;

    $('#totalAmount').text(initialTotalPrice);
  }

  // Calculating the Total Price
  function calculateTotalPrice(propertyId) {
    const numberOfNights = calculateNights();
    const guests = parseInt($('#guests').val());
    const roomPrice = parseInt(properties[propertyId - 1].price);

    const breakfastChecked = $('#breakfastCheckbox').is(':checked');
    const lunchChecked = $('#lunchCheckbox').is(':checked');
    const dinnerChecked = $('#dinnerCheckbox').is(':checked');

    let totalPrice = roomPrice * numberOfNights * guests;

    if (breakfastChecked) {
      totalPrice += parseFloat($('#breakfastCheckbox').val()) * numberOfNights * guests;
    }
    if (lunchChecked) {
      totalPrice += parseFloat($('#lunchCheckbox').val()) * numberOfNights * guests;
    }
    if (dinnerChecked) {
      totalPrice += parseFloat($('#dinnerCheckbox').val()) * numberOfNights * guests;
    }

    $('#totalAmount').text(totalPrice);
  }

});