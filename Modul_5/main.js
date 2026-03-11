const hour = new Date().getHours();
let greeting = "Selamat Datang";

if (hour >= 3 && hour < 11) greeting = "Selamat Pagi 🌅";
else if (hour >= 11 && hour < 15) greeting = "Selamat Siang ☀️";
else if (hour >= 15 && hour < 18) greeting = "Selamat Sore 🌇";
else greeting = "Selamat Malam 🌙";

document.getElementById("dynamic-greeting").innerText = greeting;

// Logika Gacha THR
const thrAmounts = [
    "Rp 50.000 💵",
    "Rp 100.000 💸",
    "Rp 250.000 💰",
    "Rp 500.000 🤑",
    "Rp 1.000.000 💳",
    "Pahala Puasa 🕌",
    "Zonk! Coba Lagi 🤣",
];

const thrModal = document.getElementById("thrModal");
const thrResult = document.getElementById("thr-result");
const thrMessage = document.getElementById("thr-message");

thrModal.addEventListener("show.bs.modal", (event) => {
    thrResult.innerHTML =
        '<div class="spinner-border text-warning" role="status"><span class="visually-hidden">Loading...</span></div>';

    setTimeout(() => {
        const randomThr =
            thrAmounts[Math.floor(Math.random() * thrAmounts.length)];
        thrResult.innerText = randomThr;

        if (randomThr.includes("Zonk")) {
            thrMessage.innerText =
                "Waduh, belum beruntung nih. Jangan menyerah, coba klik lagi amplopnya! hehehe ✌️";
        } else {
            thrMessage.innerText =
                "Semoga rezekinya berkah, puasanya lancar, dan jangan lupa sebagian disedekahkan ya. 🕌✨";

            confetti({
                particleCount: 150,
                spread: 90,
                origin: { y: 0.6 },
                colors: ["#ffc107", "#198754", "#ffffff", "#ff0000"],
            });
        }
    }, 800);
});

thrModal.addEventListener("hidden.bs.modal", (event) => {
    thrResult.innerText = "Rp 0";
});