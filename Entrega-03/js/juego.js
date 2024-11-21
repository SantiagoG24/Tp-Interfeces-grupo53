let canvas = document.getElementById("myCanvas");
canvas.addEventListener('click', showConfig);

let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let fichasEnPartida = [];
let matriz = [];
let mode = 0;
let tablero;
let isMouseDown = false;
let lastCircleCliked = null;
let ronda = "ironman";
let crono = new Tiempo(5, ctx, canvas.width / 2, 30);
let imagenFondo = new Image();
imagenFondo.src = 'assets/fondo-canva.png';
let bienvenida = new Text(canvas.width / 2, canvas.height / 2, ctx, 'white', '¡Haz Click para Comenzar a Jugar!');
bienvenida.draw();
let jugador1Texto = new Text(canvasWidth / 8, canvasHeight / 8, ctx, 'white', 'Jugador 1');
let jugador2Texto = new Text((canvasWidth / 8) * 7, canvasHeight / 8, ctx, 'white', 'Jugador 2');

document.addEventListener("DOMContentLoaded", function () {
    llamarSecciones();
    mode4 = document.getElementById("mode4").addEventListener("click", function () {
        manejarBoton(this);
    });
    mode5 = document.getElementById("mode5").addEventListener("click", function () {
        manejarBoton(this);
    });
    mode6 = document.getElementById("mode6").addEventListener("click", function () {
        manejarBoton(this);
    });
    mode7 = document.getElementById("mode7").addEventListener("click", function () {
        manejarBoton(this);
    });

    a = document.getElementById("buttonOpcionA");
    b = document.getElementById("buttonOpcionB");
    c = document.getElementById("buttonOpcionC");
    d = document.getElementById("buttonOpcionD");
    // Eventos para las opciones
    a.addEventListener("click", () => seleccionarOpcion(a, "assets/ironman-logo.png"));
    b.addEventListener("click", () => seleccionarOpcion(b, "assets/captain-america-logo.png"));
    c.addEventListener("click", () => seleccionarOpcion(c, "assets/ironman-B.png"));
    d.addEventListener("click", () => seleccionarOpcion(d, "assets/captain-america-logo2.png"));



});
/*Imagenes Fichas*/
let player1Img = null;
let player2Img = null;

// variables de configfuracion del juego 
let selecionModo;
let btn_modo;
let selecionFicha;

let start_game;
let back_modo;
function llamarSecciones() {
    selecionModo = document.getElementById("selecionModo");// cuantas fichas 
    selecionFicha = document.getElementById("fichasEleccion");//estilo de las fichas

    btn_modo = document.getElementById("btn-modo");// btn para confirmar las fichas
    start_game = document.getElementById("start-game");// btn para empezar el juego 
    back_modo = document.getElementById("back");//btn para volver a selecionar modo

    btn_modo.addEventListener('click', showSelecionFicha);
    start_game.addEventListener('click', startGame);
    back_modo.addEventListener('click', showConfig);
}
// Eventos para las opciones de fichas
let opcionesSeleccionadas = new Set(); // Almacena opciones ya seleccionadas


function seleccionarOpcion(opcion, img) {
    // Si la opción ya está seleccionada, desmarcarla
    if (opcion.classList.contains('marcar1') || opcion.classList.contains('marcar2')) {
        opcion.classList.remove('marcar1', 'marcar2');
        opcionesSeleccionadas.delete(opcion); // Eliminarla del conjunto
        player1Img = null;
        player2Img = null;
        return; // No cambiar el turno si se desmarcó
    }

    // Limpiar selección previa del jugador actual
    if (turnoElegir === 1) {
        [a, b, c, d].forEach(btn => btn.classList.remove('marcar1'));
        opcion.classList.add('marcar1');
        player1Img = img;
    } else if (turnoElegir === 2) {
        [a, b, c, d].forEach(btn => btn.classList.remove('marcar2'));
        opcion.classList.add('marcar2');
        player2Img = img;
    }

    // Añadir la opción seleccionada al conjunto y cambiar el turno
    opcionesSeleccionadas.add(opcion);
    turnoElegir = turnoElegir === 1 ? 2 : 1;
}

function manejarBoton(btn) {
    // Si el botón ya tiene la clase 'marcar', desmarcarlo
    if (btn.classList.contains("marcar")) {
        btn.classList.remove("marcar");
        return;
    }

    // Remover la clase 'marcar' de todos los botones
    mode4 = document.getElementById("mode4").classList.remove("marcar");
    mode5 = document.getElementById("mode5").classList.remove("marcar");
    mode6 = document.getElementById("mode6").classList.remove("marcar");
    mode7 = document.getElementById("mode7").classList.remove("marcar");

    // Agregar la clase 'marcar' al botón clickeado
    btn.classList.add("marcar");

    // Cambiar el modo según el botón clickeado
    mode = parseInt(btn.id.replace("mode", ""), 10); // Extraer el número del ID
}
let turnoElegir = 1;
let restart = document.getElementById('reset');
let a;
let b;
let c;
let d;
let mode4;
let mode5;
let mode6;
let mode7;
function showSelecionFicha() {
    if (mode !== 0) {
        selecionModo.classList.remove("active");
        selecionFicha.classList.add("active");
    }
}
function showMode() {
    selecionModo.classList.toggle("active");
}
function startGame() {
    restart.addEventListener('click', resetGame);
    if (player1Img !== null && player2Img !== null) {
        selecionFicha.classList.remove("active");

        armarTablero(mode);


        tablero.drawTablero();

        let cantFichas = tablero.getFilas() * tablero.getColumnas();

        for (let i = 0; i < cantFichas / 2; i++) {
            let f1 = drawFicha("ironman", canvasWidth / 8, canvasHeight / 4 + i * 10, "red", player1Img);
            let f2 = drawFicha("capitanamerica", (canvasWidth / 8) * 7, canvasHeight / 4 + i * 10, "blue", player2Img);
        }

        jugador1Texto.draw();
        jugador2Texto.draw();
        setFichas(ronda);
        crono.iniciar()
    }
}
function showConfig() {
    canvas.removeEventListener("click", showConfig);
    selecionFicha.classList.remove("active");
    showMode();
}
function armarTablero(mode) {
    tablero = new Tablero(ctx, mode, 5, 67);
}



function setFichas(ronda) {
    for (let i = 0; i < fichasEnPartida.length; i++) {
        let ficha = fichasEnPartida[i];
        if (ficha.getName() == ronda) {
            ficha.setActivado();
        }
    }
}
function cambiarRonda() {
    setFichas(ronda);
    if (ronda == 'ironman') {
        ronda = 'capitanamerica';
        jugador1Texto.setText('Jugador 1');
        jugador2Texto.setText('¡Es tu turno!');

    } else {
        ronda = 'ironman'
        jugador1Texto.setText('¡Es tu turno!');
        jugador2Texto.setText('Jugador 2');
    }
    actualizar();
    setFichas(ronda);

}

function createTablero(inicioTable) {
    for (let x = 0; x < filas; x++) {
        let fila = [];
        let inicioX = inicioTable;
        let finX = inicioTable + 105.3;
        for (let y = 0; y < columnas; y++) {
            casillero = new Casillero(ctx, inicioX, finX, inicioY, finY);
            fila.push(casillero);
            inicioX = inicioX + 105.3;
            finX = finX + 105.3;
        }
        matriz.push(fila);
        inicioY = inicioY + 67;
        finY = finY + 67;
    }
}

function drawFicha(name, x, y, color, img) {
    let ficha = new Circle(name, x, y, 25, color, ctx, img);
    fichasEnPartida.push(ficha);
    actualizar();
}
function actualizar() {
    clearCanvas();
    for (let i = 0; i < fichasEnPartida.length; i++) {
        fichasEnPartida[i].draw();
        crono.mostrarTiempo();
    }
}

function clearCanvas() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(imagenFondo, 0, 0, canvasWidth, canvasHeight);

    if (tablero) {
        tablero.drawTablero();
        jugador1Texto.draw();
        jugador2Texto.draw();
    }

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j].draw();
            matriz[i][j].drawObj();
        }
    }
}

function findClickedCircle(x, y) {
    for (let i = 0; i < fichasEnPartida.length; i++) {
        let circle = fichasEnPartida[i];
        if (circle.isPointInside(x, y)) {
            return circle;
        }
    }
}

canvas.addEventListener("mousedown", onMouseDown, false);
function onMouseDown(e) {
    isMouseDown = true;

    // Busca si el clic está sobre una ficha
    let clickedFicha = findClickedCircle(e.layerX, e.layerY);

    // Solo reasigna lastCircleCliked si encuentra una ficha válida
    if (clickedFicha && clickedFicha.getActivado()) {
        lastCircleCliked = clickedFicha; // Asigna nueva ficha
    }

    actualizar();
}

canvas.addEventListener("mousemove", onMouseMove, false);

function onMouseMove(e) {
    if (isMouseDown && lastCircleCliked) {

        lastCircleCliked.setPosition(e.layerX, e.layerY);
        actualizar();
    }
    // console.log("X" + e.layerX, " Y " + e.layerY);
    // console.log(tablero.whereClick(e.layerX, e.layerY));
}
function borrarFichaPartida(ficha) {
    let index = fichasEnPartida.indexOf(ficha);
    fichasEnPartida.splice(index, 1);
}
canvas.addEventListener("mouseup", onMouseUp, false);
let posYinicial = 125;
function onMouseUp(e) {
    isMouseDown = false;
    if (tablero && lastCircleCliked) {
        let col = tablero.whereClick(e.layerX, e.layerY);
        if (col != null) {
            let filaAinsertar = tablero.tenesEspacioColumna(col);
            if (filaAinsertar > 0) {
                tablero.getPosFila(filaAinsertar);
                let posX = tablero.getPosColumna(col);
                let posY = tablero.getPosFila(filaAinsertar);
                const lastCircleClikedFinal = lastCircleCliked;
                animacionTirarFicha(lastCircleCliked, posX, posY, posYinicial, () => {
                    // Esta lógica se ejecuta cuando la animación termina
                    let ganador = tablero.InsertColumna(col, filaAinsertar, lastCircleClikedFinal);
                    borrarFichaPartida(lastCircleCliked);
                    actualizar();
                    if (ganador) {
                        showGanador();
                    } else {
                        cambiarRonda();
                    }
                });
            }
        } else {
            lastCircleCliked.returPosIni(); // Regresa a la posición inicial
            actualizar();
        }
    }
    lastCircleCliked = null;


}
function animacionTirarFicha(ficha, x, yFinal, yInicial, onComplete) {
    const velocidadCaida = 5; // Velocidad en píxeles por cuadro
    let posicionActualY = yInicial;

    // Función de animación
    const animacion = () => {
        actualizar();

        ficha.setPosition(x, posicionActualY);
        ficha.draw();
        // Verificar si la ficha ha llegado a la posición final
        if (posicionActualY < yFinal) {
            posicionActualY += velocidadCaida; // Incrementar la posición
            requestAnimationFrame(animacion); // Continuar la animación
        } else {
            // Alinear exactamente en la posición final
            ficha.setPosition(x, yFinal);
            ficha.draw();
            actualizar();
            if (onComplete) onComplete();
            // Llamar a la función del tablero cuando termine
        }
    };

    // Iniciar la animación
    animacion();
}



function borrarTodasLasFichas() {
    while (fichasEnPartida.length > 0) {
        fichasEnPartida.pop();
    }
}

function showGanador() {
    let ganador = document.getElementById('ganador');
    let ficha_ganadora = document.getElementById('ficha-ganadora');
    let reiniciar = document.getElementById('reiniciar');
    ganador.classList.toggle("active");

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(imagenFondo, 0, 0, canvasWidth, canvasHeight);
    tablero = null;
    borrarTodasLasFichas();
    mode = 0;
    ganador.style.display = "block";

    if (ronda === "ironman") {
        ficha_ganadora.innerHTML = "Ganó IronMan";
    } else {
        ficha_ganadora.innerHTML = "Ganó Capitán América";
    }

    crono.detener();
    reiniciar.addEventListener('click', resetGame);
}
function resetGame() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(imagenFondo, 0, 0, canvasWidth, canvasHeight);
    tablero = null;
    fichasEnPartida = [];
    mode = 0;
    player1Img = null;
    player2Img = null;
    turnoElegir = 1;
    ronda = 'ironman';
    crono.resetear();
    let ganador = document.getElementById('ganador');
    ganador.classList.remove("active");
    limpiarOpcionesFicha();
    limpiarOpcionesModo();
    showConfig();
}
function cambiarTurno() {
    let div_turno = document.getElementById('turno');
    if (turnoElegir == 1) {
        turnoElegir = 2;
        div_turno.innerHTML = "Jugador 2";
    } else {
        turnoElegir = 1;
        div_turno.innerHTML = "Jugador 1";
    }
}
function limpiarOpcionesFicha() {
    let a = document.getElementById("buttonOpcionA");
    let b = document.getElementById("buttonOpcionB");
    let c = document.getElementById("buttonOpcionC");
    let d = document.getElementById("buttonOpcionD");
    a.classList.remove('marcar1');
    a.classList.remove('marcar2');
    b.classList.remove('marcar1');
    b.classList.remove('marcar2');
    c.classList.remove('marcar1');
    c.classList.remove('marcar2');
    d.classList.remove('marcar1');
    d.classList.remove('marcar2');
}
function limpiarOpcionesModo() {
    document.getElementById("mode4").classList.remove("marcar");
    document.getElementById("mode5").classList.remove("marcar");
    document.getElementById("mode6").classList.remove("marcar");
    document.getElementById("mode7").classList.remove("marcar");
}
