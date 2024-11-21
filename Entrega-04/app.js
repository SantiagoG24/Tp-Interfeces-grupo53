// Lista de imágenes
const images = ["assets/app-divertida1.png", "assets/app-divertida2.png", "assets/app-divertida3.png", "assets/app-divertida4.png"];
let currentImageIndex = 0;

// Función para cambiar la imagen
function changeImage() {
    const slider = document.getElementById("slider");
    slider.classList.remove('active')
    currentImageIndex = (currentImageIndex + 1) % images.length;
    let imgActual = images[currentImageIndex];
    slider.src = imgActual;
    setTimeout(() => {
        slider.classList.add('active');
    }, 50);
}

// Cambia la imagen cada 3 segundos
setInterval(changeImage, 3000);
let menu = document.querySelector('.menu');
menu.addEventListener('click', toggleMenu);
function toggleMenu() {
    let menu = document.querySelector('.menu');
    let nav = document.querySelector('.nav-bar');
    let categorias = document.querySelectorAll('.categoria');

    if (menu.classList.contains('active')) {
        // Inicia la animación de cierre
        menu.classList.add('closing');
        menu.classList.remove('active');
        nav.classList.remove('visible');

        // Animación inversa para las categorías
        categorias.forEach((categoria, index) => {
            setTimeout(() => {
                categoria.classList.remove('ver-categoria');
                categoria.classList.add('ver-categoria-reversa');
            }, index * 500); // Retraso progresivo
        });

        // Elimina la clase `closing` cuando termina la animación
        menu.addEventListener('animationend', function onCloseAnimationEnd(e) {
            if (e.animationName.includes('close')) {
                menu.classList.remove('closing');
                menu.removeEventListener('animationend', onCloseAnimationEnd);
            }
        });
    } else {
        // Inicia la animación de apertura
        menu.classList.add('active');
        nav.classList.add('visible');

        // Animación de aparición para las categorías
        categorias.forEach((categoria, index) => {
            setTimeout(() => {
                categoria.classList.add('ver-categoria');
                categoria.classList.remove('ver-categoria-reversa');
            }, index * 500); // Retraso progresivo
        });
    }
}


document.addEventListener("DOMContentLoaded", loading);


function loading() {

    let porcentaje = document.querySelector("#porcentaje-carga");
    incrementarHasta100(porcentaje);

}


function incrementarHasta100(porcentaje) {
    let valor = 0;

    const interval = setInterval(() => {
        if (valor >= 100) {
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

document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll(".cards-div .card"); 
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("paralax");
                }, index * 300); 
            }
        });
    }, { threshold: 0.5 }); 
  
    items.forEach(item => observer.observe(item));
});
const centerLogo = document.getElementById('logo-centro');
const headerLogo = document.getElementById('logo');

window.addEventListener('scroll', () => {
    const logoRect = centerLogo.getBoundingClientRect();

    // Si el logo en el centro toca la parte superior de la pantalla
    if (logoRect.top <= 5) {
        centerLogo.style.opacity = '0'; // Desaparece el logo principal
        headerLogo.style.opacity = '1'; // Aparece el logo en el header
        headerLogo.style.transform = 'scale(1)'; // Escala el logo al tamaño normal
    } else {
        centerLogo.style.opacity = '1'; // Reaparece el logo principal
        headerLogo.style.opacity = '0'; // Desaparece el logo en el header
        headerLogo.style.transform = 'scale(0.8)'; // Vuelve a su tamaño inicial
    }
});
