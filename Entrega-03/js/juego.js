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


/*Imagenes Fichas*/
let player1Img;
let player2Img;

// variables de configfuracion del juego 
let selecionModo = document.getElementById("selecionModo");// cuantas fichas 
let btn_modo = document.getElementById("btn-modo");// btn para confirmar las fichas
let selecionFicha = document.getElementById("fichasEleccion");//estilo de las fichas

let start_game = document.getElementById("start-game");// btn para empezar el juego 
let back_modo = document.getElementById("back");//btn para volver a selecionar modo

let turnoElegir = 1;
function showConfig() {
    canvas.removeEventListener("click", showConfig);


    // Eventos para las opciones de fichas
    let opcionesSeleccionadas = new Set(); // Almacena opciones ya seleccionadas
    let a = document.getElementById("buttonOpcionA");
    let b = document.getElementById("buttonOpcionB");
    let c = document.getElementById("buttonOpcionC");
    let d = document.getElementById("buttonOpcionD");
    function seleccionarOpcion(opcion, img) {

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

    // Eventos para las opciones
    a.addEventListener("click", () => seleccionarOpcion(a, "assets/ironman-logo.png"));
    b.addEventListener("click", () => seleccionarOpcion(b, "assets/captain-america-logo.png"));
    c.addEventListener("click", () => seleccionarOpcion(c, "assets/ironman-B.png"));
    d.addEventListener("click", () => seleccionarOpcion(d, "assets/captain-america-logo2.png"));

    btn_modo.addEventListener('click', showSelecionFicha);
    start_game.addEventListener('click', startGame)
    // selecionModo.addEventListener('click', selecionFicha);
    back_modo.addEventListener('click', showSelecionFicha);

    function showMode() {

        selecionModo.classList.toggle("active");
        // Botones
        let botones = document.querySelectorAll("#mode4, #mode5, #mode6, #mode7");

        // Agregar evento a cada botón
        botones.forEach(btn => {
            btn.addEventListener("click", () => {
                // Remover la clase 'marcar' de todos los botones
                botones.forEach(btn => btn.classList.remove("marcar"));

                // Agregar la clase 'marcar' al botón clickeado
                btn.classList.add("marcar");

                // Cambiar el modo según el botón clickeado
                mode = parseInt(btn.id.replace("mode", ""), 10); // Extraer el número del ID
            });
        });
    }

    showMode();

    function showSelecionFicha() {
        selecionModo.classList.remove("active");
        selecionFicha.classList.add("active");
    }

    function startGame() {

        selecionFicha.classList.remove("active");
        armarTablero(mode);


        tablero.drawTablero();

        let cantFichas = tablero.getFilas() * tablero.getColumnas();

        for (let i = 0; i < cantFichas / 2; i++) {
            let f1 = drawFicha("ironman", canvasWidth / 8, canvasHeight / 4 + i * 10, "red", IronmanImg);
            let f2 = drawFicha("capitanamerica", (canvasWidth / 8) * 7, canvasHeight / 4 + i * 10, "blue", CaptainAmericaImg);
        }

        jugador1Texto.draw();
        jugador2Texto.draw();
        setFichas(ronda);
        crono.iniciar()

    }

    function armarTablero(mode) {
        tablero = new Tablero(ctx, mode, 5, 67);
    }
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
function play() {
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

    if (lastCircleCliked != null) {
        lastCircleCliked = null;
    }
    let clickFig = findClickedCircle(e.layerX, e.layerY);
    if (clickFig != null && clickFig.getActivado() == true) {
        lastCircleCliked = clickFig;
    }
    actualizar();
}

canvas.addEventListener("mousemove", onMouseMove, false);

function onMouseMove(e) {
    if (isMouseDown && lastCircleCliked != null) {
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

function onMouseUp(e) {
    if (tablero && lastCircleCliked !== null) {
        let col = tablero.whereClick(e.layerX, e.layerY);
        if (col !== null) {
            let filaAinsertar = tablero.tenesEspacioColumna(col);
            if (filaAinsertar > 0) {
                let ganador = tablero.InsertColumna(col, filaAinsertar, lastCircleCliked);
                borrarFichaPartida(lastCircleCliked);
                actualizar();
                if (ganador) {
                    showGanador();
                } else {
                    cambiarRonda()
                }
            }
        } else {
            lastCircleCliked.returPosIni();
        }
    }
    lastCircleCliked = null;
    isMouseDown = false;

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
    let ganador = document.getElementById("ganador");
    ganador.classList.remove("active");
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

