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
