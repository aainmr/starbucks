let circle = document.querySelector(".circle");
let mainImg = document.querySelector(".starbucks");
let buttons = document.querySelectorAll(".menu_btn");

function changeColor(color) {
  circle.style.background = color;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const imgPath = button.getAttribute("data-img");
    mainImg.src = imgPath;
  });
});
