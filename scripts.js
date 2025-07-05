let circle = document.querySelector(".circle");
let mainImg = document.querySelector(".starbucks");
let buttons = document.querySelectorAll(".menu_btn");

function changeColor(color) {
  document.querySelector('.circle').style.background = color;
  document.querySelector('.starbucks').src = 'img/img1.png'; // ou img2.png, etc.
}