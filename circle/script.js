document.addEventListener('DOMContentLoaded', function () {
  const imageContainer = document.getElementById('draw');

  imageContainer.addEventListener('click', function (event) {
    const offsetX = event.offsetX;
    const offsetY = event.offsetY;

    // Create an image element
    const image = document.createElement('img');
    image.src = 'circle.png'; // Replace 'hex.png' with the actual image URL

    // Generate random width and height for the image (you can adjust the range as needed)
    const randomWidth = Math.floor(Math.random() * 100) + 20; // Random width between 20 and 120 pixels
    const randomHeight = Math.floor(Math.random() * 100) + 20; // Random height between 20 and 120 pixels

    // Set the width and height of the image
    image.style.width = `${randomWidth}px`;
    image.style.height = `${randomHeight}px`;

    // Position the image at the clicked coordinates
    image.style.position = 'absolute';
    image.style.left = `${offsetX}px`;
    image.style.top = `${offsetY}px`;

    // Append the image to the container
    imageContainer.appendChild(image);
  });
});
