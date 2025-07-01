// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
  hamburger.querySelector('i').classList.toggle('fa-bars');
  hamburger.querySelector('i').classList.toggle('fa-xmark');
});

// Close nav links on click (mobile)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('show')) {
      nav.classList.remove('show');
      hamburger.querySelector('i').classList.add('fa-bars');
      hamburger.querySelector('i').classList.remove('fa-xmark');
    }
  });
});


/* Custom animated cursor */
window.addEventListener('DOMContentLoaded', () => {
  // Create the cursor element
  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  cursor.innerHTML = `<img src="images/cursor.png" width="32" height="32" alt="cursor">`;
  document.body.appendChild(cursor);

  // Follow the mouse
  document.addEventListener('mousemove', e => {
    cursor.style.top  = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });

  // Optional: shrink on click for feedback
  document.addEventListener('mousedown', () => cursor.style.transform += ' scale(0.8)');
  document.addEventListener('mouseup',   () => cursor.style.transform  = 'translate(-50%, -50%)');
});
