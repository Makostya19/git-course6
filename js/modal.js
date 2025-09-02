const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const newWindow = document.getElementById("newWindow");

openBtn.addEventListener("click", () => {
  newWindow.style.display = "block";
  document.body.classList.add("modal-open");
});

closeBtn.addEventListener("click", () => {
  newWindow.style.display = "none";
  document.body.classList.remove("modal-open");
});
