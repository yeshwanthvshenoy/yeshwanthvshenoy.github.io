// Typed.js — hero typing animation
new Typed('#typed', {
  strings: [
    'Staff Software Engineer',
    'Platform Engineering',
    'DevEx',
    'Distributed Systems',
    'Cloud Native SaaS'
  ],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
});

// Fade-in on scroll — one-time trigger per element
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// Active nav highlight — updates as sections enter viewport
const navLinks = document.querySelectorAll('.nav-item');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-item[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('section[id]').forEach(section => navObserver.observe(section));

// Mobile sidebar toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

if (menuToggle && sidebar) {
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('mobile-open');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
      sidebar.classList.remove('mobile-open');
    }
  });

  // Close sidebar when a nav link is clicked on mobile
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
    });
  });
}
