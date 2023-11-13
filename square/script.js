document.addEventListener('DOMContentLoaded', function() {
  var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
  var currentImageIndex = 0;
  var slideshowImage = document.getElementById('slideshow');

  slideshowImage.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slideshowImage.src = images[currentImageIndex];
  });
});
