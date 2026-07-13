const button = document.querySelector(".button");

if (button) {
  button.addEventListener("click", () => {
    button.dataset.clicked = "true";
  });
}
