// Lista de imágenes
const images = ["assets/app-divertida1.png", "assets/app-divertida2.png", "assets/app-divertida3.png", "assets/app-divertida4.png"];
let currentImageIndex = 0;

// Función para cambiar la imagen
function changeImage() {
    const slider = document.getElementById("slider");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slider.src = images[currentImageIndex];

}

// Cambia la imagen cada 3 segundos
setInterval(changeImage, 3000);


let arbusto4 = document.getElementsByClassName(".")
let logo = document.getElementsByClassName(".logo-centro")
console.log(logo);
let arbol1 = document.getElementsByClassName(".")
let piedra2 = document.getElementsByClassName(".")
let arbusto1 = document.getElementsByClassName(".")
let arbol2 = document.getElementsByClassName(".")
let piedra3 = document.getElementsByClassName(".")
let piedra1 = document.getElementsByClassName(".")
let arbol3 = document.getElementsByClassName(".")
let arbusto2 = document.getElementsByClassName(".")

// window.addEventListener('scroll', () => {
//     let valor = window.scrollY;
//     logo.style.marginTop = valor * 2.5 + 'px'
//     logo.style.Top = valor * -1.5 + 'px'
// })
