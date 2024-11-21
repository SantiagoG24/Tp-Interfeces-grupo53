document.addEventListener("mousemove", (event) => {
    const imagen = document.getElementById("img-123459");
    
    const velocidad = 0.08;

    const x = (window.innerWidth / 2 - event.clientX) * velocidad;
    const y = (window.innerHeight / 2 - event.clientY) * velocidad;


    imagen.style.transform = `translate(${x}px, ${y}px)`; 
});