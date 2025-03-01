// Toggle Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Highlight Active Link
const currentPage = window.location.pathname.split('/').pop();
const navLinksAll = document.querySelectorAll('.nav-links a');

navLinksAll.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Smooth Scrolling (for anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animation on Scroll
const animateElements = document.querySelectorAll('.animate__animated');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeIn');
    }
  });
}, { threshold: 0.5 });

animateElements.forEach(element => {
  observer.observe(element);
});




document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});









// Form Submission Handler
const contactForm = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simulate form submission (replace with actual API call if needed)
  setTimeout(() => {
    responseMessage.textContent = 'Your message has been sent successfully!';
    responseMessage.classList.add('success');
    responseMessage.style.display = 'block';
    contactForm.reset();

    // Hide the message after 5 seconds
    setTimeout(() => {
      responseMessage.style.display = 'none';
      responseMessage.classList.remove('success');
    }, 5000);
  }, 1000);
});
