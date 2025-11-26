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

// ------------------------------
// CONTACT FORM — Loader + Popup
// ------------------------------

// Track if user actually submitted the form
let formSubmitted = false;

const form = document.getElementById("contactForm");
const iframe = document.querySelector("iframe[name='hidden_iframe']");
const submitBtn = document.getElementById("submitBtn");
const successPopup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");

// -----------------------------
// FIXED SUBMIT HANDLER
// -----------------------------
form.addEventListener("submit", (event) => {
  event.preventDefault(); // stops browser from auto-loading iframe immediately

  formSubmitted = true;

  // Show loader + hide text
  submitBtn.querySelector(".btn-text").style.display = "none";
  submitBtn.querySelector(".loader").style.display = "inline-block";

  // Now manually submit to Google Forms
  form.submit();
});

// -----------------------------
// Detect iframe load (Google returns response)
// -----------------------------
iframe.addEventListener("load", () => {
  if (formSubmitted) {

    // Reset form fields
    form.reset();

    // Restore submit button text
    submitBtn.querySelector(".loader").style.display = "none";
    submitBtn.querySelector(".btn-text").style.display = "inline-block";

    // Show success popup
    successPopup.classList.remove("hidden");

    // Reset flag
    formSubmitted = false;
  }
});

// -----------------------------
// Close Success Popup
// -----------------------------
closePopup.addEventListener("click", () => {
  successPopup.classList.add("hidden");
});
