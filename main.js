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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const btnText = submitBtn.querySelector(".btn-text");
  const loader = submitBtn.querySelector(".loader");
  const successPopup = document.getElementById("successPopup");
  const closePopup = document.getElementById("closePopup");

  form.addEventListener("submit", (e) => {
    btnText.style.display = "none";
    loader.style.display = "inline-block";

    // Google Forms does not reliably trigger iframe load, so we fake a completion callback after 1 second
    setTimeout(() => {
      // Show popup
      successPopup.classList.remove("hidden");

      // Reset button
      btnText.style.display = "inline-block";
      loader.style.display = "none";

      // Clear form
      form.reset();
    }, 1000);
  });

  closePopup.addEventListener("click", () => {
    successPopup.classList.add("hidden");
  });
});
