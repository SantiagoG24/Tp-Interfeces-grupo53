// const carrouseles = document.querySelector('.carrousel-div');
// const btn_izq = document.querySelector('.div-flecha-izq');
// const btn_der = document.querySelector('.div-flecha-der');
// const contenido = document.querySelector('.carrousel-card-grandes');
// const ancho_card = contenido.querySelector('.card-grande');
// let counter = 0;

// // const scrollRight = () => {
// //     console.log("btn-der");
// //     const maxScrollLeft = contenido.scrollWidth - contenido.clientWidth; // tope de deplazamiento
// //     if (contenido.scrollLeft + ancho_card >= maxScrollLeft) {
// //         contenido.scrollLeft = maxScrollLeft;
// //     } else {
// //         contenido.classList.add("tope");
// //         setTimeout(() => {
// //             contenido.classList.remove("tope");
// //         }, 350);
// //         contenido.scrollLeft += ancho_card;
// //     }
// // };
// const scrollRight = () => {
//     console.log("btn-der");
//     if (counter >= 2) return; // Evitar ir más allá de la última imagen
//     contenido.classList.add('mover-der')
//     counter++;
// };


// // const scrollLeft = () => {
// //     console.log("btn-izq");
// //     if (contenido.scrollLeft - ancho_card <= 0) {
// //         contenido.scrollLeft = 0;
// //     } else {
// //         contenido.classList.add("skew1");
// //         setTimeout(() => {
// //             contenido.classList.remove("skew1");
// //         }, 350);
// //         contenido.scrollLeft -= ancho_card;
// //     }
// // };
// const scrollLeft = () => {
//     console.log("btn-izq");
//     if (counter <= 0) return; // Evitar ir más allá de la primera imagen
//     contenido.classList.add('mover-izq')
//     counter--;
// };
// btn_izq.addEventListener("click", scrollLeft);
// btn_der.addEventListener("click", scrollRight);

// //     carrouseles.forEach((carrousel) => {
// // });
