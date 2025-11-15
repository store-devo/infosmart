const btn = document.querySelector("#btn");
const mlogo = document.querySelector("#menu-logo");
const sidebar = document.querySelector("#sidebar");

btn.addEventListener("click", () => {
  if (mlogo.classList.contains("fa-bars")) {
    mlogo.classList.remove("fa-bars");
    mlogo.classList.add("fa-xmark");
  } else {
    mlogo.classList.remove("fa-xmark");
    mlogo.classList.add("fa-bars");
  }
});

btn.addEventListener("click", () => {
  sidebar.classList.toggle("-scale-x-0");
});

document.addEventListener("click", (e) => {
  if (!btn.contains(e.target) && !sidebar.contains(e.target)) {
    sidebar.classList.add("-scale-x-0");
    mlogo.classList.remove("fa-xmark");
    mlogo.classList.add("fa-bars");
  }
});
// ///////

// tanggal // jam
const hariNama = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];
const bulanNama = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const now = new Date();

const hari = hariNama[now.getDay()];
const tanggal = now.getDate();
const bulan = bulanNama[now.getMonth()];
const tahun = now.getFullYear();

const fullDate = `${hari}, ${tanggal} ${bulan} ${tahun}`;

document.getElementById("tanggal").textContent = fullDate;
//

function updateJamLengkap() {
  const now = new Date();

  // Ambil jam user
  const jam = now.getHours();

  // Tentukan keterangan waktu
  let waktuKet = "";
  if (jam >= 4 && jam < 12) {
    waktuKet = "Pagi";
  } else if (jam >= 12 && jam < 15) {
    waktuKet = "Siang";
  } else if (jam >= 15 && jam < 18) {
    waktuKet = "Sore";
  } else {
    waktuKet = "Malam";
  }

  // Format jam real-time sesuai timezone user
  const waktu = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit",
  });

  document.getElementById("jam").textContent = waktu + " — " + waktuKet;
}

setInterval(updateJamLengkap, 1000);
updateJamLengkap();
