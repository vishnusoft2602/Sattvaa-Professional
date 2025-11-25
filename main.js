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
  const popup = document.getElementById("successPopup");
  const closeBtn = document.getElementById("closePopup");

  const btn = document.getElementById("submitBtn");
  const btnText = btn.querySelector(".btn-text");
  const loader = btn.querySelector(".loader");

  form.addEventListener("submit", function () {
    // Show loader
    btn.disabled = true;
    btnText.style.display = "none";
    loader.style.display = "block";

    // After Google Form submits (hidden iframe), show popup
    setTimeout(() => {
      btn.disabled = false;
      btnText.style.display = "inline";
      loader.style.display = "none";

      popup.classList.remove("hidden");
      form.reset();
    }, 1800);
  });

  // Close popup
  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
});
