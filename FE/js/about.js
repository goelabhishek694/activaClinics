(function () {
  // Wait for images to load
  var images = document.querySelectorAll(".flex-container-mission img");
  var loadedImagesCount = 0;
  var totalImages = images.length;
  
  function imageLoaded() {
    loadedImagesCount++;
    if (loadedImagesCount === totalImages) {
      document.querySelector(".spinner-mission").style.display = 'none';
    }
  }

  images.forEach(function (img) {
    if (img.complete) {
      imageLoaded();
    } else {
      img.addEventListener('load', imageLoaded);
      img.addEventListener('error', imageLoaded);
    }
  });

  // Hover effect for flex slides
  var flexSlides = document.querySelectorAll(".flex-slide-mission");

  flexSlides.forEach(function (slide) {
    slide.addEventListener('mouseenter', function () {
      var title = slide.querySelector(".flex-title-mission");
      var about = slide.querySelector(".flex-about-mission");

      if (title) {
        title.style.transform = "rotate(0deg)";
        title.style.top = "10%";
      }
      if (about) {
        about.style.opacity = "1";
      }
    });

    slide.addEventListener('mouseleave', function () {
      var title = slide.querySelector(".flex-title-mission");
      var about = slide.querySelector(".flex-about-mission");

      if (title) {
        title.style.transform = "rotate(90deg)";
        title.style.top = "20%";
      }
      if (about) {
        about.style.opacity = "0";
      }
    });
  });
})();
