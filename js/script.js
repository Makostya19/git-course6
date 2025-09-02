const mainBtn = document.getElementById("main-btn");
const extraBtns = document.getElementById("extra-btns");

mainBtn.addEventListener("click", () => {
  if (extraBtns.style.display === "none" || extraBtns.style.display === "") {
    extraBtns.style.display = "flex"; // показываем кнопки
    mainBtn.innerHTML = '<img src="./assets/icon2.svg" alt="иконка"> Скрыть';
  } else {
    extraBtns.style.display = "none"; // скрываем кнопки
    mainBtn.innerHTML = '<img src="./assets/icon.svg" alt="иконка"> Показать все';
  }
});
