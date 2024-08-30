const openNav = document.querySelector('.hamburger-btn');
const closeNav = document.querySelector('.close-wrap');
const overlay = document.querySelector('.overlay');
const menuItems = document.querySelectorAll('.menu-text');

// Add a transition to the overlay
overlay.style.transition = 'transform 0.3s ease-in-out'; // Adjust duration and easing as needed

// Function to disable scrolling
function disableScrolling() {
  document.body.style.overflow = 'hidden';
}

// Function to enable scrolling
function enableScrolling() {
  document.body.style.overflow = '';
}

openNav.addEventListener('click', () => {
  overlay.style.transform = 'translateY(0vh)';
  disableScrolling(); // Disable scrolling

  // Immediately set menu items to their final position
  menuItems.forEach((menuItem) => {
    menuItem.style.transform = 'translateY(0rem)';
  });
});

closeNav.addEventListener('click', () => {
  // Immediately reset menu items to their initial position
  menuItems.forEach((menuItem) => {
    menuItem.style.transform = 'translateY(-100%)'; // Replace with your initial position
  });

  overlay.addEventListener('transitionend', () => {
    overlay.style.transform = 'translateY(-100vh)';
    enableScrolling(); // Enable scrolling
  }, { once: true });
});

//Mouse Follow effect
const cursorCircle = document.querySelector('.cursor-circle');
let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;
const delay = 0.1; // The lower the value, the faster the circle catches up

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  circleX += (mouseX - circleX) * delay;
  circleY += (mouseY - circleY) * delay;

  cursorCircle.style.left = `${circleX}px`;
  cursorCircle.style.top = `${circleY}px`;

  requestAnimationFrame(animate);
}

animate();

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursorCircle.style.transform = 'scale(1.5)';
  });

  link.addEventListener('mouseleave', () => {
    cursorCircle.style.transform = 'scale(1)';
  });
});
