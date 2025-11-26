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

  // ------------------------------
  // Contact Form Submission + Popup
  // ------------------------------

  const form = document.getElementById("contactForm");
  const popup = document.getElementById("successPopup");
  const closePopup = document.getElementById("closePopup");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let formData = new FormData(form);

      fetch("YOUR_GOOGLE_SCRIPT_URL_HERE", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.text())
        .then(() => {
          form.reset();
          popup.classList.remove("hidden");  // Show popup AFTER sending
        })
        .catch((err) => console.error("Error:", err));
    });
  }

  if (closePopup) {
    closePopup.addEventListener("click", () => {
      popup.classList.add("hidden"); // Hide popup on OK click
    });
  }
});
