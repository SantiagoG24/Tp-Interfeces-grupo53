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
let menu = document.querySelector('.menu');
menu.addEventListener('click', toggleMenu);


function toggleMenu() {
    let nav = document.querySelector('.nav-bar');
    let menu = document.querySelector('.menu');
    // menu.classList.remove('active', 'reverse');
    menu.classList.toggle('active');
    nav.classList.toggle('visible');
    let categorias = document.querySelectorAll('.categoria');
    categorias.forEach((categoria, index) => {
        setTimeout(() => {
            categoria.classList.add('ver-categoria'); // Agrega la clase 'ver-categoria' con un retraso
        }, index * 500);
    });
}

document.addEventListener("DOMContentLoaded", loading);


function loading() {

    let porcentaje = document.querySelector("#porcentaje-carga");
    incrementarHasta100(porcentaje);

}


function incrementarHasta100(porcentaje) {
    let valor = 0;

    const interval = setInterval(() => {
        if (valor >= 1000) {
            clearInterval(interval);
            document.querySelector(".seccion-carga").classList.add("desaparecer");

            setTimeout(() => {
                document.querySelector(".seccion-carga").remove();
            }, 200);




        } else {
            valor += 0.1;
            porcentaje.textContent = valor.toFixed(0) + '%';
        }
    }, 1); //
}


// const div_der = document.querySelector('.ini-der');
// const arbol2 = document.querySelector('.arDer2');

// div_der.addEventListener('scroll', () => {
//     const scrollProgress = div_der.scrollTop / div_der.scrollHeight;
//     const offsetX = scrollProgress * div_der.offsetWidth;
//     arbol2.style.transform = `translateX(${offsetX}px)`; // Mover solo dentro del contenedor
// });

