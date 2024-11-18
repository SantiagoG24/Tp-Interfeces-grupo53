document.addEventListener("mousemove", (event) => {
    
    const image = document.getElementById("img-123459");
    
    
    const speed = 0.08;


    const xOffset = (window.innerWidth / 2 - event.clientX) * speed;
    const yOffset = (window.innerHeight / 2 - event.clientY) * speed;


    image.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
});