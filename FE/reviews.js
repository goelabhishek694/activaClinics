/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
let buinsessReviews;
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.866, lng: 151.196 },
    zoom: 15,
  });
  const request = {
    placeId: "ChIJd3iMFoBqK4gRQ3HWfPgNJc0",
    fields: ["name", "formatted_address", "place_id", "geometry", "reviews"],
  };
//   const infowindow = new google.maps.InfoWindow();
  const service = new google.maps.places.PlacesService(map);

  service.getDetails(request, (place, status) => {
    if (
      status === google.maps.places.PlacesServiceStatus.OK &&
      place &&
      place.geometry &&
      place.geometry.location
    ) {
    //   const marker = new google.maps.Marker({
    //     map,
    //     position: place.geometry.location,
    //   });
    // <div class="owl-stage-outer">
    //     <div class="owl-stage">
      console.log(place.reviews);
      let buinsessReviews=place.reviews;
      const reviewParent=document.querySelector(".testimonial-carousel")
      // .children[0].children[0];
      console.log(reviewParent);
      // <div class="owl-item" style="width: 600px;"></div>
      // buinsessReviews.forEach(review=>{
      //   reviewParent.innerHTML+=`
        
      //   <div class=testimonial-item text-center text-white">
        
      //                       <img class="img-fluid mx-auto rounded mb-4" src="${review.profile_photo_url}" alt="">
      //                       <p class="fs-5">${review.text}</p>
      //                       <hr class="mx-auto w-25">
      //                       <h4 class="text-white mb-0">${review.author_name}</h4>
      //                   </div>`
      // });
    //   google.maps.event.addListener(marker, "click", () => {
    //     const content = document.createElement("div");
    //     const nameElement = document.createElement("h2");

    //     nameElement.textContent = place.name;
    //     content.appendChild(nameElement);

    //     const placeIdElement = document.createElement("p");

    //     placeIdElement.textContent = place.place_id;
    //     content.appendChild(placeIdElement);

    //     const placeAddressElement = document.createElement("p");

    //     placeAddressElement.textContent = place.formatted_address;
    //     content.appendChild(placeAddressElement);
    //   });

    }
  });
}

window.initMap = initMap;

console.log(buinsessReviews);