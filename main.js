// ------------------------------
// Navigation Active State
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".main-nav a");
  const currentPage = window.location.pathname.split("/").pop();

  // Highlight correct menu item based on page
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});

// IMPORTANT:
// DO NOT ADD CONTACT FORM CODE HERE.
// CONTACT PAGE HAS ITS OWN INLINE SCRIPT THAT HANDLES SUBMISSION + POPUP.
