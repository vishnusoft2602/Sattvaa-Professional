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
// -----------------------------
// GOOGLE FORM SUBMISSION HANDLER (Fix #2)
// -----------------------------
let formSubmitted = false;

document.getElementById("contactForm").addEventListener("submit", () => {
  formSubmitted = true;

  // Show loading animation
  document.querySelector("#submitBtn .btn-text").style.display = "none";
  document.querySelector("#submitBtn .loader").style.display = "inline-block";
});

// Detect when Google Form loads inside iframe
const iframe = document.querySelector("iframe[name='hidden_iframe']");

iframe.addEventListener("load", () => {
  if (formSubmitted) {

    // Reset form
    document.getElementById("contactForm").reset();

    // Hide loader and show text again
    document.querySelector("#submitBtn .loader").style.display = "none";
    document.querySelector("#submitBtn .btn-text").style.display = "inline-block";

    // Show Success Popup
    document.getElementById("successPopup").classList.remove("hidden");

    formSubmitted = false;
  }
});

// Close popup
document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("successPopup").classList.add("hidden");
});
