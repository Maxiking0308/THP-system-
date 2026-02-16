const users = [
  { dienstnummer: "101", passwort: "admin", rank: "Colonel", level: 5 },
  { dienstnummer: "214", passwort: "trooper", rank: "Trooper", level: 1 }
];

function login() {
  const dn = document.getElementById("dienstnummer").value;
  const pw = document.getElementById("passwort").value;

  const user = users.find(u => u.dienstnummer === dn && u.passwort === pw);

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("Falsche Daten");
  }
}

if (window.location.pathname.includes("dashboard.html")) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) window.location.href = "index.html";

  document.getElementById("userInfo").innerText =
    "Dienstnummer: #" + user.dienstnummer + " | Rang: " + user.rank;

  showTab("home");
  loadAll();
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}

function showTab(tab) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById(tab).classList.add("active");
}

function loadAll() {
  loadOfficers();
  loadVehicles();
  loadShifts();
  loadApplications();
  loadCalls();
}

/* OFFICERS */

function addOfficer() {
  let data = JSON.parse(localStorage.getItem("officers")) || [];
  const dn = document.getElementById("newDN").value;
  const rank = document.getElementById("newRank").value;
  data.push({ dn, rank });
  localStorage.setItem("officers", JSON.stringify(data));
  loadOfficers();
}

function loadOfficers() {
  let data = JSON.parse(localStorage.getItem("officers")) || [];
  const list = document.getElementById("officerList");
  list.innerHTML = "";
  data.forEach(o => {
    list.innerHTML += `<li>#${o.dn} - ${o.rank}</li>`;
  });
}

/* VEHICLES */

function addVehicle() {
  let data = JSON.parse(localStorage.getItem("vehicles")) || [];
  const name = document.getElementById("vehicleName").value;
  data.push(name);
  localStorage.setItem("vehicles", JSON.stringify(data));
  loadVehicles();
}

function loadVehicles() {
  let data = JSON.parse(localStorage.getItem("vehicles")) || [];
  const list = document.getElementById("vehicleList");
  list.innerHTML = "";
  data.forEach(v => {
    list.innerHTML += `<li>${v}</li>`;
  });
}

/* SCHEDULE */

function addShift() {
  let data = JSON.parse(localStorage.getItem("shifts")) || [];
  const date = document.getElementById("shiftDate").value;
  data.push(date);
  localStorage.setItem("shifts", JSON.stringify(data));
  loadShifts();
}

function loadShifts() {
  let data = JSON.parse(localStorage.getItem("shifts")) || [];
  const list = document.getElementById("shiftList");
  list.innerHTML = "";
  data.forEach(s => {
    list.innerHTML += `<li>${s}</li>`;
  });
}

/* APPLICATIONS */

function addApplication() {
  let data = JSON.parse(localStorage.getItem("applications")) || [];
  const name = document.getElementById("appName").value;
  data.push(name);
  localStorage.setItem("applications", JSON.stringify(data));
  loadApplications();
}

function loadApplications() {
  let data = JSON.parse(localStorage.getItem("applications")) || [];
  const list = document.getElementById("applicationList");
  list.innerHTML = "";
  data.forEach(a => {
    list.innerHTML += `<li>${a}</li>`;
  });
}

/* CAD */

function addCall() {
  let data = JSON.parse(localStorage.getItem("calls")) || [];
  const text = document.getElementById("callText").value;
  data.push(text);
  localStorage.setItem("calls", JSON.stringify(data));
  loadCalls();
}

function loadCalls() {
  let data = JSON.parse(localStorage.getItem("calls")) || [];
  const list = document.getElementById("callList");
  list.innerHTML = "";
  data.forEach(c => {
    list.innerHTML += `<li>${c}</li>`;
  });
}
