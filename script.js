function toggleNavbar() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".details-toggle-btn"); // ✅ updated line

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const infoBox = btn.nextElementSibling;
      infoBox.classList.toggle("show");

      // Toggle button text
      btn.textContent = infoBox.classList.contains("show") ? "Hide Details" : "View Details";
    });
  });
});

document.querySelector('.hero-button').addEventListener('click', function(e) {
  e.preventDefault();
  const section = document.querySelector('.product-gallery');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
});



document.querySelector('.hero-button').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
});

