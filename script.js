function showTab(tab) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById(tab).classList.add("active");
  updateStats();
}

/* OFFICERS */
function addOfficer() {
  let data = JSON.parse(localStorage.getItem("officers")) || [];
  const dn = document.getElementById("newDN").value;
  const rank = document.getElementById("newRank").value;
  if(!dn || !rank) return;
  data.push({ dn, rank });
  localStorage.setItem("officers", JSON.stringify(data));
  loadOfficers();
}

function loadOfficers() {
  let data = JSON.parse(localStorage.getItem("officers")) || [];
  const list = document.getElementById("officerList");
  if(list){
    list.innerHTML = "";
    data.forEach(o => {
      list.innerHTML += `<li>#${o.dn} - ${o.rank}</li>`;
    });
  }
}

/* VEHICLES */
function addVehicle() {
  let data = JSON.parse(localStorage.getItem("vehicles")) || [];
  const name = document.getElementById("vehicleName").value;
  if(!name) return;
  data.push(name);
  localStorage.setItem("vehicles", JSON.stringify(data));
  loadVehicles();
}

function loadVehicles() {
  let data = JSON.parse(localStorage.getItem("vehicles")) || [];
  const list = document.getElementById("vehicleList");
  if(list){
    list.innerHTML = "";
    data.forEach(v => list.innerHTML += `<li>${v}</li>`);
  }
}

/* SCHEDULE */
function addShift() {
  let data = JSON.parse(localStorage.getItem("shifts")) || [];
  const date = document.getElementById("shiftDate").value;
  if(!date) return;
  data.push(date);
  localStorage.setItem("shifts", JSON.stringify(data));
  loadShifts();
}

function loadShifts() {
  let data = JSON.parse(localStorage.getItem("shifts")) || [];
  const list = document.getElementById("shiftList");
  if(list){
    list.innerHTML = "";
    data.forEach(s => list.innerHTML += `<li>${s}</li>`);
  }
}

/* APPLICATIONS */
function addApplication() {
  let data = JSON.parse(localStorage.getItem("applications")) || [];
  const name = document.getElementById("appName").value;
  if(!name) return;
  data.push(name);
  localStorage.setItem("applications", JSON.stringify(data));
  loadApplications();
}

function loadApplications() {
  let data = JSON.parse(localStorage.getItem("applications")) || [];
  const list = document.getElementById("applicationList");
  if(list){
    list.innerHTML = "";
    data.forEach(a => list.innerHTML += `<li>${a}</li>`);
  }
}

/* CAD */
function addCall() {
  let data = JSON.parse(localStorage.getItem("calls")) || [];
  const text = document.getElementById("callText").value;
  if(!text) return;
  data.push(text);
  localStorage.setItem("calls", JSON.stringify(data));
  loadCalls();
}

function loadCalls() {
  let data = JSON.parse(localStorage.getItem("calls")) || [];
  const list = document.getElementById("callList");
  if(list){
    list.innerHTML = "";
    data.forEach(c => list.innerHTML += `<li>${c}</li>`);
  }
}

/* STATS */
function updateStats(){
  document.getElementById("statOfficers").innerText =
    (JSON.parse(localStorage.getItem("officers")) || []).length;

  document.getElementById("statVehicles").innerText =
    (JSON.parse(localStorage.getItem("vehicles")) || []).length;

  document.getElementById("statShifts").innerText =
    (JSON.parse(localStorage.getItem("shifts")) || []).length;

  document.getElementById("statCalls").innerText =
    (JSON.parse(localStorage.getItem("calls")) || []).length;
}

loadOfficers();
loadVehicles();
loadShifts();
loadApplications();
loadCalls();
updateStats();
