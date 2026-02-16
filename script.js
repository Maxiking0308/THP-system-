// Feste User (kannst du erweitern)
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

// Dashboard laden
if (window.location.pathname.includes("dashboard.html")) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    window.location.href = "index.html";
  } else {
    document.getElementById("welcome").innerText =
      "Willkommen #" + user.dienstnummer;
    document.getElementById("rank").innerText =
      "Rang: " + user.rank;
  }

  loadVehicles();
  loadShifts();
}

// Fahrzeuge speichern
function addVehicle() {
  let vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
  const name = document.getElementById("vehicleName").value;
  vehicles.push(name);
  localStorage.setItem("vehicles", JSON.stringify(vehicles));
  loadVehicles();
}

function loadVehicles() {
  let vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
  const list = document.getElementById("vehicleList");
  if (list) {
    list.innerHTML = "";
    vehicles.forEach(v => {
      list.innerHTML += "<li>" + v + "</li>";
    });
  }
}

// Dienstplan speichern
function addShift() {
  let shifts = JSON.parse(localStorage.getItem("shifts")) || [];
  const date = document.getElementById("shiftDate").value;
  shifts.push(date);
  localStorage.setItem("shifts", JSON.stringify(shifts));
  loadShifts();
}

function loadShifts() {
  let shifts = JSON.parse(localStorage.getItem("shifts")) || [];
  const list = document.getElementById("shiftList");
  if (list) {
    list.innerHTML = "";
    shifts.forEach(s => {
      list.innerHTML += "<li>" + s + "</li>";
    });
  }
}
