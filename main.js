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
// Contact Form Submission + Popup
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const successPopup = document.getElementById("successPopup");
  const closePopup = document.getElementById("closePopup");
  const btnText = document.querySelector(".btn-text");
  const loader = document.querySelector(".loader");

  form.addEventListener("submit", function () {
    // Show loader
    btnText.style.display = "none";
    loader.style.display = "inline-block";

    // Let Google Form submit normally (NO preventDefault)
    setTimeout(() => {
      loader.style.display = "none";
      btnText.style.display = "inline-block";

      form.reset();
      successPopup.classList.remove("hidden");
    }, 1200);
  });

  closePopup.addEventListener("click", () => {
    successPopup.classList.add("hidden");
  });
});
