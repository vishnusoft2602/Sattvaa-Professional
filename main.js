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
// Contact Form Submission + Popup
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const successPopup = document.getElementById("successPopup");
  const closePopup = document.getElementById("closePopup");

  const btnText = submitBtn.querySelector(".btn-text");
  const loader = submitBtn.querySelector(".loader");

  form.addEventListener("submit", function () {
    // Show loader animation
    btnText.style.display = "none";
    loader.style.display = "inline-block";
    submitBtn.disabled = true;

    // Let Google Form submit normally (no preventDefault)
    setTimeout(() => {
      loader.style.display = "none";
      btnText.style.display = "inline-block";
      submitBtn.disabled = false;

      form.reset();
      successPopup.classList.remove("hidden");
    }, 1200);
  });

  closePopup.addEventListener("click", () => {
    successPopup.classList.add("hidden");
  });
});
