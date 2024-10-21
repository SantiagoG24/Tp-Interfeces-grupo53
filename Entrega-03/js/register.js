"use strict"
 let form_register = document.querySelector('#form-register');
 let popover = document.querySelector('#popover-register');


let contraseña = document.querySelector('#contraseña');
let repetirContraseña = document.getElementById("repetir-contraseña");
let errorMensaje = document.getElementById("error-mensaje");

repetirContraseña.addEventListener("input", validarContrasenas);

function validarContrasenas() {
    let valorContraseña = contraseña.value;
    let valorRepetirContraseña = repetirContraseña.value;

    if (valorContraseña !== valorRepetirContraseña) {
        errorMensaje.style.display = "block";  
        contraseña.style.border = "2px solid red"; 
        repetirContraseña.style.border = "2px solid red";  
    } else {
        errorMensaje.style.display = "none";  
        contraseña.style.border = "2px solid green";  
        repetirContraseña.style.border = "2px solid green"; 
    }
}



 form_register.addEventListener ('submit', (event) => {
    event.preventDefault();
    popover.showPopover();
 }
);

