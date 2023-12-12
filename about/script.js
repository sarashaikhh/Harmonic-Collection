

// code for message
document.addEventListener('DOMContentLoaded', function() {
    const message = document.querySelector('.message');
    const gridContainer = document.querySelector('.grid-container');
  
    const welcomeTextContent = "Thank you for embarking on this journey into the world of shapes. I hope you enjoy learning about the different shapes and take away lessons for the future. Let your curiosity be your guide as you navigate through the shapes on our interactive menu below - your presence adds to the dimension our exploration.  Let the adventure unfold, and may each shape unveil a new chapter in the art of shape. Your quest for artistic discovery begins now!";
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
  