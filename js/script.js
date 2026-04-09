// =============================================
// PedAItrics 2026 — Site Scripts
// =============================================

// --- Navbar scroll state ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// --- Mobile nav toggle ---
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});

// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// --- Active nav link highlighting on scroll ---
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

function highlightNav() {
  const scrollY = window.scrollY + 100;
  let current = '';
  sections.forEach(section => {
    if (section.offsetTop <= scrollY) {
      current = section.getAttribute('id');
    }
  });
  navAnchors.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightNav, { passive: true });
highlightNav();
