const search = document.getElementById("search");

let dataCache = []; // simpan semua data

async function loadData() {
  const res = await fetch("data.json");
  const data = await res.json();
  dataCache = data;
  tampilkanCard(dataCache.slice(0, 20)); // tampilkan semua dulu
}

function tampilkanCard(list) {
  const container = document.getElementById("scp");
  container.innerHTML = "";

  list.forEach((item) => {
    container.innerHTML += `<div
              class="w-full flex-none max-w-[180px] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 "
            >
              <div class="w-full h-36">
                <img
                  src="img/${item.url}"
                  alt="Gambar HP"
                  class="w-full h-full"
                />
              </div>

              <div class="p-3">
                <h2
                  class="text-base font-semibold leading-tight mb-1 line-clamp-2"
                >
                  ${item.title}
                </h2>
                <p class="text-gray-600 font-semibold mb-3 text-sm">
                  Rp ${item.price}
                </p>

                <button
                  class="w-full py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition"
                >
                  Lihat Detail
                </button>
              </div>
            </div>
      
      
    `;
  });
}

document.getElementById("search").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();

  // kalau input kosong, tampilkan semua data
  if (keyword === "") {
    tampilkanCard(dataCache);
    return;
  }

  // filter nama yang mirip
  const hasil = dataCache.filter((item) =>
    item.title.toLowerCase().includes(keyword)
  );

  if (hasil.length === 0) {
    const container = document.getElementById("scp");
    container.innerHTML = `
      <div class="w-full text-center py-5 text-gray-600">
        🔍 Data tidak ditemukan
      </div>
    `;
    return;
  }

  tampilkanCard(hasil);
});

// load data waktu halaman dibuka
loadData();

// ............................

const container = document.getElementById("scp");
let isDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
  isDown = true;
  container.classList.add("active");
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
  isDown = false;
  container.classList.remove("active");
});

container.addEventListener("mouseup", () => {
  isDown = false;
  container.classList.remove("active");
});

container.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 2; // geser lebih cepat
  container.scrollLeft = scrollLeft - walk;
});
