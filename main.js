// ------------------------------
// Navigation Active State
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  console.log("Sattvaa website loaded successfully!");
});


// ------------------------------
// Contact Form Submission Handler
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  // Only run on contact page
  if (form && status) {
    form.addEventListener("submit", function (e) {
      status.textContent = "Sending...";

      setTimeout(() => {
        status.textContent = "Message sent successfully!";
        form.reset();
      }, 1200);
    });
  }
});
