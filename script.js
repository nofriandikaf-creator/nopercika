
const cover = document.getElementById("cover");
const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("anniversaryMusic");
const musicButton = document.getElementById("musicButton");
const musicLabel = document.getElementById("musicLabel");

let opened = false;

// Membuka amplop dan memulai musik
openButton.addEventListener("click", async function () {
    if (opened) return;
    opened = true;

    openButton.disabled = true;
    openButton.textContent = "With love... ♡";

    // Mulai musik setelah klik pengguna
    try {
        await music.play();
    } catch (error) {
        console.log("Musik belum dapat diputar.");
    }

    // Jalankan animasi amplop
    envelope.classList.add("open");

    // Tampilkan isi website
    setTimeout(function () {
        mainContent.hidden = false;
        musicButton.hidden = false;

        cover.classList.add("hide");

        // Hilangkan halaman pembuka setelah transisi
        setTimeout(function () {
            cover.style.display = "none";
        }, 850);

        window.scrollTo(0, 0);
    }, 1000);
});

// Tombol untuk menjeda atau melanjutkan musik
musicButton.addEventListener("click", async function () {
    if (music.paused) {
        try {
            await music.play();
        } catch (error) {
            console.log("Musik gagal diputar.");
        }
    } else {
        music.pause();
    }

    updateMusicButton();
});

// Perbarui tulisan tombol musik
function updateMusicButton() {
    if (music.paused) {
        musicLabel.textContent = "Putar Musik";
        musicButton.firstChild.textContent = "▶ ";
    } else {
        musicLabel.textContent = "Musik Aktif";
        musicButton.firstChild.textContent = "♫ ";
    }
}

music.addEventListener("play", updateMusicButton);
music.addEventListener("pause", updateMusicButton);
