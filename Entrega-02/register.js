"use strict"
 let form_register = document.querySelector('#form-register');
 let popover = document.querySelector('#popover-register');

 form_register.addEventListener ('submit', (event) => {
    event.preventDefault();
    popover.showPopover();
 }
);

