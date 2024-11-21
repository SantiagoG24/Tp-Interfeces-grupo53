const arr_imagenes = [
  "/Entrega-04/assets/0.png", "/Entrega-04/assets/1p.png", "/Entrega-04/assets/2.png", 
  "/Entrega-04/assets/3.png", "/Entrega-04/assets/4.png", "/Entrega-04/assets/5.png", 
  "/Entrega-04/assets/6.png", "/Entrega-04/assets/7.png", "/Entrega-04/assets/8.png", 
  "/Entrega-04/assets/9.png", "/Entrega-04/assets/10.png"
];

const img_dinamica = document.getElementById('img-scroll'); 
const seccionAmigos = document.querySelector('.seccion-mas-amigos'); // Selecciona la sección
let scrollCount = 0; // Contador de desplazamientos
let img_actual = 0; // Índice actual de la imagen
let lastScrollTop = 0; // Última posición del scroll

// Desplazamiento extra requerido
const extraScrollOffset = 500; 

// Función para manejar el evento de scroll
window.addEventListener('scroll', () => {
  // Obtener las coordenadas de la sección
  const sectionRect = seccionAmigos.getBoundingClientRect();
  
  // Verificar si la sección está visible en el viewport y con el desplazamiento adicional
  if (sectionRect.top <= window.innerHeight - extraScrollOffset && sectionRect.bottom >= 0 + extraScrollOffset) {
    const currentScrollTop = window.scrollY;

    // Verificar si el usuario está haciendo scroll hacia abajo o arriba
    if (currentScrollTop > lastScrollTop) {
      // Scroll hacia abajo
      scrollCount++;
    } else {
      // Scroll hacia arriba
      scrollCount--;
    }

    // Restringir el contador dentro del rango
    if (scrollCount < 0) scrollCount = 0;

    // Calcular el índice de la imagen basado en el contador
    const newImageIndex = Math.floor(scrollCount / 60) % arr_imagenes.length;

    // Cambiar la imagen solo si el índice es diferente
    if (newImageIndex !== img_actual) {
      img_actual = newImageIndex;
      img_dinamica.src = arr_imagenes[img_actual];
    }

    // Actualizar la posición del scroll
    lastScrollTop = currentScrollTop;
  }
});