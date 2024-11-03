document.addEventListener("DOMContentLoaded", function() {
    const contenedorTarjetas = document.querySelectorAll(".card");

    contenedorTarjetas.forEach(card => {
        card.addEventListener("click", function(event) {
            if (event.target.closest(".btn-agregar-card")) {
                const btnAgregar = card.querySelector(".btn-agregar-card");
                const btnQuitar = card.querySelector(".btn-quitar-card");
                btnAgregar.style.display = "none";
                btnQuitar.style.display = "flex";
            } else if (event.target.closest(".btn-quitar-card")) {
                const btnAgregar = card.querySelector(".btn-agregar-card");
                const btnQuitar = card.querySelector(".btn-quitar-card");
                btnQuitar.style.display = "none";
                btnAgregar.style.display = "flex";
            }
        });
    });
});