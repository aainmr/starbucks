 function changeCup(color, imagePath) {
    // Muda a cor do círculo
    document.querySelector('.circle').style.background = color;

    // Muda a imagem do copo principal
    document.getElementById('mainCup').src = imagePath;
  }