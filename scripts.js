let circle = document.querySelector(".circle");
let mainImg = document.querySelector(".starbucks");
let buttons = document.querySelectorAll(".menu_btn");

function changeColor(color) {
  circle.style.background = color;
}
function changeTheme(imgPath, color) {
  document.querySelector('.starbucks').src = imgPath;
  document.querySelector('.circle').style.background = color;
}