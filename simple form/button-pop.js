const openButton = document.getElementById("openPopup");
const closeButton = document.getElementById("closePopup");
const popup = document.getElementById("welcomePopup");

openButton.addEventListener("click", () => {
    if (!popup.open) {
        popup.showModal();
    }
});

closeButton.addEventListener("click", () => {
    popup.close();
});

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.close();
    }
});
