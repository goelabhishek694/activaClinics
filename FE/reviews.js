/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
let reviews;
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
      reviews = place.reviews;
      reviews.sort((a,b) => b.rating-a.rating);
      reviews = reviews.filter(review => review.rating>=4)
      
    }
    console.log(reviews);
    const carousel = document.querySelector(".testimonial-carousel");
        const testimonials = document.querySelectorAll(".testimonial-item");
        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");
        const dotsContainer = document.querySelector(".dots");
        
        let currentIndex = 0;
        const totalItems = reviews.length;

        // Create dots dynamically
        for (let i = 0; i < totalItems; i++) {
          const dot = document.createElement("span");
          dot.classList.add("dot");
          if (i === 0) dot.classList.add("active");
          dot.dataset.index = i;
          dotsContainer.appendChild(dot);
          addData(i);
        }

        const dots = document.querySelectorAll(".dot");

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach(dot => dot.classList.remove("active"));
            dots[currentIndex].classList.add("active");
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        }

        function addData(i){
          let testimonial = testimonials[i];
          console.log(testimonial);
          testimonial.children[0].src = reviews[i]["profile_photo_url"];
          let ratingEle = testimonial.children[1];
          let rating = reviews[i].rating;
          addRating(ratingEle,rating )
          testimonial.children[2].innerHTML =  reviews[i]["text"];
          testimonial.children[3].innerHTML =  reviews[i]["author_name"];
        }

        function addRating(ratingEle, rating){
          for(let i=0;i<rating;i++){
            ratingEle.children[i].style.color ="yellow"
          }
        }

        // Click events
        nextBtn.addEventListener("click", nextSlide);
        prevBtn.addEventListener("click", prevSlide);

        // Dot navigation
        dots.forEach(dot => {
            dot.addEventListener("click", (e) => {
                currentIndex = parseInt(e.target.dataset.index);
                updateCarousel();
            });
        });

        // Auto-slide every 5 seconds
        setInterval(nextSlide, 5000);
  });
}

window.initMap = initMap;

