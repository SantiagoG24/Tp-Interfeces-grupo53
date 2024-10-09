"use strict"
let menu = document.querySelector('#header-menu');
let nav_bar = document.querySelector('.nav-bar')
menu.addEventListener('click', menu_desplegable);
function menu_desplegable(event) {
    console.log(event)
    nav_bar.classList.toggle("visible")
}