document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const logoutBtn = document.getElementById("logout-btn");
  const userNameSpan = document.getElementById("user-name");

  // Simple demo auth in localStorage; replace with real backend sessions
  function setLoggedInUser(name) {
    localStorage.setItem("thprp_user", name);
    if (userNameSpan) userNameSpan.textContent = name;
  }

  function getLoggedInUser() {
    return localStorage.getItem("thprp_user");
  }

  function clearUser() {
    localStorage.removeItem("thprp_user");
  }

  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const username = document.getElementById("login-username").value.trim();
      const password = document.getElementById("login-password").value.trim();

      // TODO: replace with real API call
      if (!username || !password) {
        alert("Please enter both username and password.");
        return;
      }

      setLoggedInUser(username);
      window.location.href = "dashboard.html";
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      clearUser();
      window.location.href = "index.html";
    });
  }

  // Protect dashboard page (client-side only; still need server-side protection)
  if (window.location.pathname.endsWith("dashboard.html")) {
    const user = getLoggedInUser();
    if (!user) {
      window.location.href = "login.html";
    } else if (userNameSpan) {
      userNameSpan.textContent = user;
    }
  }
});
