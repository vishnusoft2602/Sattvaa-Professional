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


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const popup = document.getElementById("successPopup");
  const closeBtn = document.getElementById("closePopup");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Disable button & show loading
    const btn = form.querySelector("button");
    btn.disabled = true;
    btn.textContent = "Sending...";

    // Simulate loading then show popup
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = "Send Message";

      popup.classList.remove("hidden"); // Show popup
      form.reset(); // clear form
    }, 1200);
  });

  // Close popup
  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
});
