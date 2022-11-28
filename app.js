let toggleButton = document.querySelector(".checkbox");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    console.log("done!")
});
