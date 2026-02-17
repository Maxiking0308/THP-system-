// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Roster filters
  const divisionSelect = document.getElementById("filter-division");
  const searchInput = document.getElementById("filter-search");
  const rosterTable = document.getElementById("roster-table");

  function filterRoster() {
    if (!rosterTable) return;
    const rows = rosterTable.querySelectorAll("tbody tr");
    const division = divisionSelect ? divisionSelect.value : "all";
    const query = searchInput ? searchInput.value.toLowerCase() : "";

    rows.forEach(row => {
      const rowDivision = row.getAttribute("data-division") || "all";
      const text = row.textContent.toLowerCase();
      const matchesDivision = division === "all" || rowDivision === division;
      const matchesSearch = !query || text.includes(query);
      row.style.display = matchesDivision && matchesSearch ? "" : "none";
    });
  }

  if (divisionSelect) {
    divisionSelect.addEventListener("change", filterRoster);
  }

  if (searchInput) {
    searchInput.addEventListener("input", filterRoster);
  }

  // Simple client-side hooks for forms (replace with real backend calls)
  const recruitmentForm = document.getElementById("recruitment-form");
  if (recruitmentForm) {
    recruitmentForm.addEventListener("submit", e => {
      e.preventDefault();
      // TODO: send data via fetch() to your backend or Discord webhook
      alert("Application submitted. Staff will review your application soon.");
      recruitmentForm.reset();
    });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      // TODO: integrate with ticket/email system
      alert("Message sent. Leadership will get back to you as soon as possible.");
      contactForm.reset();
    });
  }
});
