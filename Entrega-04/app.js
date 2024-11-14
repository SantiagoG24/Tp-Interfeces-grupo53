// Lista de imágenes
const images = ["assets/app-divertida1.png", "assets/app-divertida2.png", "assets/app-divertida3.png", "assets/app-divertida4.png"];
let currentImageIndex = 0;

// Función para cambiar la imagen
function changeImage() {
    const slider = document.getElementById("slider");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slider.src = images[currentImageIndex];
    console.log(images[currentImageIndex]);
}

// Cambia la imagen cada 3 segundos
setInterval(changeImage, 3000);