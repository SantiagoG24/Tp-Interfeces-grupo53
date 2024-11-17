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

// let sec_card = document.querySelector('.cards-div ');
// sec_card.addEventListener('')

// // Crear un observer para detectar cuando el div entra en la pantalla
// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             // Cuando el div entra en la pantalla, añade una clase "visible"
//             entry.target.classList.add('visible');
//         } else {
//             // Si el div sale de la pantalla, puedes quitar la clase "visible"
//             entry.target.classList.remove('visible');
//         }
//     });
// }, {
//     threshold: 0.5  // Esto hace que el evento se dispare cuando el 50% del div es visible
// });

// // Seleccionamos todos los divs con la clase "card" y los observamos
// document.querySelectorAll('.card').forEach(card => {
//     observer.observe(card);
// });