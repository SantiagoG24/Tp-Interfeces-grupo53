const carrousel = document.querySelector("#card-container");
const btn_next = document.querySelector("#btn_next");
btn_next.addEventListener('click', next);
const btn_prev = document.querySelector("#btn_prev");
btn_prev.addEventListener('click', prev);

function next() {
    carrousel.style = "transform: translateX(-42%)"
    console.log("next btn")
}
function prev() {
    carrousel.style = "transform: translateX(0%)"
    console.log("prev btn");
}



const car_mini = document.querySelector("#cont-carrousel-mini");
const btn_next_m = document.querySelector("#btn_next1");
btn_next_m.addEventListener('click', nextm);
const btn_prev_m = document.querySelector("#btn_prev1");
btn_prev_m.addEventListener('click', prevm);
function nextm() {
    car_mini.style = "transform: translateX(-36%)";
    console.log("next btn")
}
function prevm() {
    car_mini.style = "transform: translateX(0%)";
    console.log("prev btn");
} 