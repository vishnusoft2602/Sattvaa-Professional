// For now basic JS — smooth scroll & nav active state

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
