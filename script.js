const openNav = document.querySelector('.hamburger-btn');
const closeNav = document.querySelector('.close-wrap');
const overlay = document.querySelector('.overlay');
const menuItems = document.querySelectorAll('.menu-text');
const staggerDelay = 100; // Adjust the delay as needed

// Add a transition to the overlay
overlay.style.transition = 'transform 0.3s ease-in-out'; // Adjust duration and easing as needed

openNav.addEventListener('click', () => {
  overlay.style.transform = 'translateY(0vh)';

  overlay.addEventListener('transitionend', () => {
    menuItems.forEach((menuItem, index) => {
      setTimeout(() => {
        menuItem.style.transform = 'translateY(0rem)';
      }, index * staggerDelay);
    });
  }, { once: true });
});

closeNav.addEventListener('click', () => {
  menuItems.forEach((menuItem, index) => {
    setTimeout(() => {
      menuItem.style.transform = 'translateY(-100%)'; // Replace with your initial position
    }, (menuItems.length - index - 1) * staggerDelay);
  });

  menuItems[menuItems.length - 1].addEventListener('transitionend', () => {
    overlay.style.transform = 'translateY(-100vh)';
  }, { once: true });
});


