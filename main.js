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

function showPopup() {
  const popup = document.getElementById("successPopup");
  const btn = document.getElementById("submitBtn");
  const btnText = btn.querySelector(".btn-text");
  const loader = btn.querySelector(".loader");

  btn.disabled = false;
  btnText.style.display = "inline";
  loader.style.display = "none";

  popup.classList.remove("hidden");
  
  document.getElementById("contactForm").reset();
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const btn = document.getElementById("submitBtn");
  const btnText = btn.querySelector(".btn-text");
  const loader = btn.querySelector(".loader");

  form.addEventListener("submit", () => {
    btn.disabled = true;
    btnText.style.display = "none";
    loader.style.display = "block";
  });

  document.getElementById("closePopup").onclick = () => {
    document.getElementById("successPopup").classList.add("hidden");
  };
});
