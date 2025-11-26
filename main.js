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
});



// Track if user actually submitted the form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const popup = document.getElementById("successPopup");
  const overlay = document.getElementById("successOverlay");
  const okBtn = document.getElementById("successOk");

  // Ensure popup is hidden on page load
  if (popup) popup.style.display = "none";
  if (overlay) overlay.style.display = "none";

  if (!form) {
    console.error("Contact form not found!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      mode: "no-cors"
    })
      .then(() => {
        // Show popup on success
        popup.style.display = "block";
        overlay.style.display = "block";

        // Clear the form after submitting
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      });
  });

  // Close popup when clicking OK
  okBtn.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
  });
});
