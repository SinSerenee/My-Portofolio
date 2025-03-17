const toggleButton = document.getElementById("toggleMode");
const body = document.body;

// Cek apakah pengguna sebelumnya memilih Dark Mode
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀️ Mode Terang";
}

// Fungsi untuk toggle Dark/Light Mode
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        toggleButton.textContent = "☀️ Mode Terang";
    } else {
        localStorage.setItem("darkMode", "disabled");
        toggleButton.textContent = "🌙 Mode Gelap";
    }
});
