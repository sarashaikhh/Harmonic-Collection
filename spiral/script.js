document.addEventListener('DOMContentLoaded', function () {
  const imageContainer = document.getElementById('draw');
  const refreshButton = document.getElementById('refreshButton');

  refreshButton.addEventListener('click', function () {
    // Clear the drawing by setting innerHTML to an empty string
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.38 253.53">
      <path fill="none" stroke="${randomColor}" stroke-miterlimit="10" stroke-width="5px" d="m2.1,75.45C49.9,1.45,148.6-19.75,222.5,28.05c59.2,38.2,76.2,117.2,37.9,176.3-30.6,47.3-93.7,60.9-141.1,30.4-37.9-24.5-48.7-75-24.3-112.9,19.6-30.3,60-39,90.3-19.4,24.2,15.7,31.2,48,15.5,72.2-12.5,19.4-38.4,25-57.8,12.4-15.5-10-20-30.7-9.9-46.2,8-12.4,24.6-16,37-8,9.9,6.4,12.8,19.7,6.4,29.6"/>
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
