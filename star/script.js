document.addEventListener('DOMContentLoaded', function () {
  const imageContainer = document.getElementById('draw');
  const refreshButton = document.getElementById('refreshButton');

  refreshButton.addEventListener('click', function () {
    // Clear the drawing by removing all child elements
    imageContainer.innerHTML = '';
  });

  imageContainer.addEventListener('click', function (event) {
    const offsetX = event.offsetX;
    const offsetY = event.offsetY;

    // Generate a random color for the path
    const randomColor = getRandomColor();

    // Create an image element with inline SVG content
    const image = document.createElement('div');
    image.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 321.48 306.94">
        <polygon fill="${randomColor}" points="210.6 101.24 321.48 118.7 240.18 196.09 257.83 306.94 159.11 253.53 59.14 304.57 79.44 194.17 0 114.87 111.26 100.06 162.13 0 210.6 101.24"/>
      </svg>
    `;

    // Generate random width and height for the image
    const randomWidth = Math.floor(Math.random() * 100) + 20;
    const randomHeight = Math.floor(Math.random() * 100) + 20;

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

  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});





// code for slideshow

document.addEventListener('DOMContentLoaded', function () {
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const slider = document.getElementById('image-slider');

  let currentIndex = 0;

  prevBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slider.children.length - 1;
    }
    updateSlider();
  });

  nextBtn.addEventListener('click', function () {
    if (currentIndex < slider.children.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  });

  function updateSlider() {
    const translateValue = -currentIndex * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
  }
});




// code for history & art

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("[data-scroll-reveal]");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          } else {
              entry.target.classList.remove("visible");
          }
      });
  }, { threshold: 0.5 });

  sections.forEach(section => {
      observer.observe(section);
  });
});


// code for message
document.addEventListener('DOMContentLoaded', function() {
  const message = document.querySelector('.message');
  const gridContainer = document.querySelector('.grid-container');

  const welcomeTextContent = "Thank you, viewer, for embarking on this journey into the world of shapes. I hope you enjoyed learning about the “star” shape and take away lessons for the future. Let your curiosity be your guide as you navigate through the next shape on our interactive menu below - your presence adds to the dimension our exploration.  Let the adventure unfold, and may each shape unveil a new chapter in the story of visual delight. Your quest for artistic discovery begins now!";
  let index = 0;

  function typeWelcomeText() {
    if (index < welcomeTextContent.length) {
      message.querySelector('p').textContent += welcomeTextContent.charAt(index);
      index++;
      setTimeout(typeWelcomeText, 70);
    } else {
      message.style.opacity = '1';
      message.style.fontSize = '3rem';
      message.style.top = '10%';

      // Transition grid container to reveal it gradually
      setTimeout(function() {
        gridContainer.style.opacity = '1';
        gridContainer.style.visibility = 'visible';
        gridContainer.style.top = '70%';
      }, 500); // Adjust timing if needed
    }
  }

  function handleScroll() {
    const scrollThreshold = window.innerHeight * 0.8; // Adjust the threshold as needed
    const messagePosition = message.getBoundingClientRect().top;

    if (messagePosition < scrollThreshold) {
      window.removeEventListener('scroll', handleScroll); // Remove the event listener once scrolled
      setTimeout(function() {
        message.style.opacity = '1';
        typeWelcomeText();
      }, 500); // Add a half-second delay before starting the animation
    }
  }

  window.addEventListener('scroll', handleScroll);
});
