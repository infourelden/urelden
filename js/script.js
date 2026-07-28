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
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuBtn.textContent = '≡';
      document.body.style.overflow = '';
    });
  });
}

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCounter = document.querySelector('.lightbox-counter');
const items = Array.from(document.querySelectorAll('.gallery-item'));
let currentIndex = 0;

function updateLightbox() {
  const item = items[currentIndex];
  lightboxImg.src = item.dataset.src;
  lightboxImg.alt = item.dataset.alt;
  lightboxCounter.textContent = `${currentIndex + 1} / ${items.length}`;
}

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

items.forEach((item, idx) => {
  item.addEventListener('click', () => openLightbox(idx));
});

document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
document.querySelector('.lightbox-prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateLightbox();
});
document.querySelector('.lightbox-next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateLightbox();
});

document.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);

window.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateLightbox();
  }
  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % items.length;
    updateLightbox();
  }
});
