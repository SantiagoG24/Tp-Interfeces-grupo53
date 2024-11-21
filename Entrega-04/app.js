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

const textoCards = document.querySelectorAll('.texto-card');
const imgWrappers = document.querySelectorAll('.img');

// Configuración del Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const imgWrapper = document.querySelector(`.img[data-img="${entry.target.dataset.img}"]`);

        if (entry.isIntersecting) {
            // Cuando el texto entra en pantalla, muestra la imagen correspondiente
            imgWrapper.classList.add('active');
            entry.target.classList.add('active');
        } else {
            // Cuando el texto sale de pantalla, oculta la imagen
            imgWrapper.classList.remove('active');
            entry.target.classList.remove('active');
        }
    });
}, {
    root: null, // Observar en relación al viewport
    threshold: 1.0, // Se activa cuando el 50% del texto es visible
});

// Observa cada bloque de texto
textoCards.forEach((card) => observer.observe(card));

////////////////////////////////////////////////////
const configuraciones = [
    { selector: '.arbusto4izq', velocidad: -0.3 },
    { selector: '.arIzq', velocidad: -0.3 },
    { selector: '.piedraizq', velocidad: -0.35 },
    { selector: '.arbusto1izq', velocidad: -0.3 },
    { selector: '.arDer2', velocidad: 0.3 },
    { selector: '.piedraDer4', velocidad: 0.4 },
    { selector: '.piedraDer3', velocidad: 0.4 },
    { selector: '.piedraDer1', velocidad: 0.4 },
    { selector: '.arDer3', velocidad: 0.2 },
    { selector: '.arbusto3der', velocidad: 0.2 },
    { selector: '.arbusto2der', velocidad: 0.2 }
];

const personaejes_img = [
    { selector: '.pj_uno', velocidad: -0.3 },
    { selector: '.pj_dos', velocidad: -0.4 },
    { selector: '.pj_tres', velocidad: -0.4 }
]

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    configuraciones.forEach(config => {
        const element = document.querySelector(config.selector);
        if (element) {
            element.style.transform = `translateX(${scrollPos * config.velocidad}px)`;
        }
    });

    personaejes_img.forEach(config => {
        const element = document.querySelector(config.selector);
        if (element) {
            element.style.transform = `translateY(${scrollPos * config.velocidad}px)`;
        }
    });
});
