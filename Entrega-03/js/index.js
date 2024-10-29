"use strict"
let menu = document.querySelector('#header-menu');
let nav_bar = document.querySelector('.nav-bar')
menu.addEventListener('click', menu_desplegable);
function menu_desplegable() {
    nav_bar.classList.toggle("visible")
}



//menu del usuario 
let btnUser = document.querySelector(".header-user");
let menuUser = document.querySelector(".user-menu")

btnUser.addEventListener('click', desplegarMenuUser);
function desplegarMenuUser() {
    menuUser.classList.toggle("visible-user")
}