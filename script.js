// Keep the site interactions small and dependency-free.
const root = document.documentElement;
const menuToggle = document.querySelector('.menu-toggle');
const navigationLinks = document.querySelector('.nav-links');
const themeToggle = document.querySelector('.theme-toggle');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
const backToTop = document.querySelector('.back-to-top');

// Restore the visitor's preferred theme, falling back to their device setting.
const savedTheme = localStorage.getItem('portfolio-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
root.dataset.theme = savedTheme || (prefersDark ? 'dark' : 'light');

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('portfolio-theme', theme);
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

setTheme(root.dataset.theme);
themeToggle.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  navigationLinks.classList.remove('is-open');
}

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigationLinks.classList.toggle('is-open', !isOpen);
});

navigationLinks.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('is-visible', window.scrollY > 500);
}, { passive: true });

// Reveal sections when they enter the viewport; show everything if unsupported.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

// Keep the current section reflected in the desktop and mobile navigation.
const sectionLinks = [...document.querySelectorAll('.nav-links a')];
const sections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sectionLinks.forEach((link) => {
          const isActive = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', isActive);
          if (isActive) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  sections.forEach((section) => sectionObserver.observe(section));
}

// Generate a simple editable resume until a PDF is added to assets/resume/.
document.querySelector('.resume-button').addEventListener('click', () => {
  const resumeText = [
    'Sneha B H',
    'Computer Science Engineering Student | Aspiring Software Developer',
    '',
    'ABOUT',
    'Second-year Bachelor of Engineering student in Computer Science and Engineering.',
    'Interested in programming, artificial intelligence, web development and software development.',
    '',
    'SKILLS',
    'C, Python, HTML, CSS, JavaScript, Git, GitHub, Artificial Intelligence, Basic Machine Learning',
    '',
    'PROJECTS',
    'SmartPath 360 - Student resource platform built with HTML, CSS and JavaScript.',
    'Python Projects - A collection of Python programming practice projects.',
    '',
    'EDUCATION',
    'Bachelor of Engineering - Computer Science and Engineering (2nd Year)',
    'PUC - Science | SSLC',
    '',
    'CONTACT',
    'Email: sneha@example.com',
    'GitHub: https://github.com/',
    'LinkedIn: https://www.linkedin.com/'
  ].join('\n');
  const file = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
  const downloadUrl = URL.createObjectURL(file);
  const downloadLink = document.createElement('a');
  downloadLink.href = downloadUrl;
  downloadLink.download = 'Sneha-B-H-Resume.txt';
  downloadLink.click();
  URL.revokeObjectURL(downloadUrl);
});

// Native required/email validation runs first; valid details open a prefilled email.
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const subject = `Portfolio message from ${formData.get('name')}`;
  const body = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`;
  const recipient = 'sneha@example.com';
  formStatus.textContent = 'Opening your email app with the message ready to send.';
  window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.querySelector('#year').textContent = new Date().getFullYear();
