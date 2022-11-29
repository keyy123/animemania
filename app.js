let toggleButton = document.querySelector(".checkbox");
toggleButton.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}








module.exports = { toggleDarkMode };