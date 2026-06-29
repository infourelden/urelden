// Navigation scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Reveal animation on scroll
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuBtn.textContent = navLinks.classList.contains('open') ? '✕' : '≡';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuBtn.textContent = '≡';
    });
  });
}
