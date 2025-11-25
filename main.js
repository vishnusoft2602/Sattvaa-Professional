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
document.getElementById("contactForm").addEventListener("submit", function () {
  let btn = document.getElementById("submitBtn");
  let text = btn.querySelector(".btn-text");
  let loader = btn.querySelector(".loader");

  // Show loading
  btn.disabled = true;
  text.style.display = "none";
  loader.style.display = "inline-block";

  // Fake delay for Google Forms redirect
  setTimeout(() => {
    showSuccessPopup();
    btn.disabled = false;
    text.style.display = "inline";
    loader.style.display = "none";

    document.getElementById("contactForm").reset();
  }, 1500);
});

// Popup show
function showSuccessPopup() {
  document.getElementById("successPopup").style.display = "flex";
}

// Close popup
document.getElementById("closePopup").onclick = () => {
  document.getElementById("successPopup").style.display = "none";
};

