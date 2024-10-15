"use strict"
let btnagregar = document.getElementById('btn-agregar-card');
let btnquitar = document.getElementById('btn-quitar-card');

btnagregar.addEventListener('click', () => {
    btnagregar.style.display = 'none';
    btnquitar.style.display = 'flex';
});


btnquitar.addEventListener('click', () => {
    btnquitar.style.display = 'none';
    btnagregar.style.display = 'flex'; 
});