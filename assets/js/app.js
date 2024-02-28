const navigation = document.getElementById("navigation");
const close = document.getElementById("close");
const open = document.getElementById("open");
const menu = document.getElementById("menu");

open.addEventListener("click", handleOpen);
close.addEventListener("click", handleClose);

function handleOpen() {
  navigation.classList.add("overlay");
  menu.classList.add("show");
  open.style.display = "none";
  close.style.display = "block";
}

function handleClose() {
  navigation.classList.remove("overlay");
  menu.classList.remove("show");
  open.style.display = "block";
  close.style.display = "none";
}
