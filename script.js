const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const area = document.getElementById("buttonArea");
const hint = document.getElementById("hint");

// GANTI dengan nomor WhatsApp tujuan.
// Format Indonesia: 628xxxxxxxxxx, tanpa tanda +.
const nomorWhatsApp = "6287790895248";

const pesan = [
  "Yahh, jangan pilih itu dong 😭",
  "Tombolnya ikut ngambek 🙈",
  "Pencet Maafin aja, sayang 💗",
  "Aku beneran minta maaf 🥺",
  "Hehe, kok dikejar terus 😭"
];

let urutan = 0;

function pindahTombol() {
  const areaRect = area.getBoundingClientRect();
  const tombolRect = noBtn.getBoundingClientRect();

  const maxX = Math.max(
    0,
    (areaRect.width - tombolRect.width) / 2 - 5
  );

  const maxY = Math.max(
    0,
    (areaRect.height - tombolRect.height) / 2 - 5
  );

  const x = (Math.random() * 2 - 1) * maxX;
  const y = (Math.random() * 2 - 1) * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `calc(50% + ${x}px)`;
  noBtn.style.top = `calc(50% + ${y}px)`;
  noBtn.style.transform = "translate(-50%, -50%)";

  hint.textContent = pesan[urutan % pesan.length];
  urutan++;
}

// Kabur saat kursor mendekat di laptop.
noBtn.addEventListener("pointerenter", (event) => {
  if (event.pointerType === "mouse") {
    pindahTombol();
  }
});

// Kabur saat disentuh di HP.
noBtn.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  pindahTombol();
});

// Saat tombol Maafin dipilih, buka WhatsApp.
yesBtn.addEventListener("click", () => {
  const nomor = nomorWhatsApp.replace(/\D/g, "");

  if (nomor === "6287790895248") {
    alert("Ganti nomor WhatsApp di script.js dulu ya!");
    return;
  }

  const pesanWA =
    "Aku mau maafin kamu 💗\n\nMakasih udah minta maaf. Kita ngobrol baik-baik ya.";

  const link =
    `https://wa.me/${nomor}?text=${encodeURIComponent(pesanWA)}`;

  window.open(link, "_blank");
});
