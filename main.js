document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".app-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  const recruitmentForm = document.getElementById("recruitment-form");
  if (recruitmentForm) {
    recruitmentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Bewerbung gesendet. Das Staff‑Team meldet sich bei dir.");
      recruitmentForm.reset();
    });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Nachricht gesendet. Wir melden uns so schnell wie möglich.");
      contactForm.reset();
    });
  }
});
