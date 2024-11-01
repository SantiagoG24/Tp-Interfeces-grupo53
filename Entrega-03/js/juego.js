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


function textGame(texto, x, y) {
    ctx.font = '700 30px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    let txt = texto;
    ctx.fillText(txt, x, y);
}

textGame('¡Haz Click para Comenzar a Jugar!', canvas.width / 2, canvas.height / 2);



/*Imagenes Fichas*/
let IronmanImg = "assets/ironman-logo.png";
let CaptainAmericaImg = "assets/captain-america-logo.png";




function showConfig() {
    let selecionModo = document.getElementById("selecionModo");
    let selecionFicha = document.getElementById("fichasEleccion");
    let btn_modo = document.getElementById("btn-modo");
    let start_game = document.getElementById("start-game");

    // Eventos para las opciones de fichas
    document.getElementById("buttonOpcionA").addEventListener("click", () => {
        IronmanImg = "assets/ironman-logo.png";
        CaptainAmericaImg = "assets/captain-america-logo.png";
    });

    document.getElementById("buttonOpcionB").addEventListener("click", () => {
        IronmanImg = "assets/ironman-logo2.png";
        CaptainAmericaImg = "assets/captain-america-logo2.png";
    });

    btn_modo.addEventListener('click', showSelecionFicha);
    start_game.addEventListener('click', startGame)
    selecionModo.addEventListener('click', selecionFicha);


    showMode();
    function showMode() {
        selecionModo.classList.toggle("active");
        let buttonMode4 = document.getElementById("mode4");
        let buttonMode5 = document.getElementById("mode5");
        let buttonMode6 = document.getElementById("mode6");
        let buttonMode7 = document.getElementById("mode7");




        buttonMode4.addEventListener("click", () => {
            mode = 4;
        });
        buttonMode5.addEventListener("click", () => {
            mode = 5;
        });
        buttonMode6.addEventListener("click", () => {
            mode = 6;
        });
        buttonMode7.addEventListener("click", () => {
            mode = 7;
        });



    }


    /*   function showMode() {
           let buttonMode4 = new Boton(10, 10, 150, 100, ctx);
           let buttonMode5 = new Boton(200, 10, 150, 100, ctx);

           buttonMode4.draw();
           buttonMode5.draw();

           canvas.addEventListener("click", (event) => {

           })

 
       }*/



    function showSelecionFicha() {
        selecionModo.classList.toggle("sacar");
        selecionFicha.classList.toggle("active");
    }

    function startGame() {
        selecionFicha.classList.toggle("sacar");
        armarTablero(mode);


        tablero.drawTablero();

        let cantFichas = tablero.getFilas() * tablero.getColumnas() - tablero.getFilas();

        for (let i = 0; i < cantFichas / 2; i++) {
            let f1 = drawFicha("ironman", canvasWidth / 8, canvasHeight / 4 + i * 10, "red", IronmanImg);
            let f2 = drawFicha("capitanamerica", (canvasWidth / 8) * 7, canvasHeight / 4 + i * 10, "blue", CaptainAmericaImg);
        }

        textGame('Jugador 1', canvasWidth / 8, canvasHeight / 8);
        textGame('Jugador 2', (canvasWidth / 8) * 7, canvasHeight / 8);
    }


    function armarTablero(mode) {
        tablero = new Tablero(ctx, mode, 5, 67);
    }

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
    }
}

function clearCanvas() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    if (tablero) {
        tablero.drawTablero();
        textGame('Jugador 1', canvasWidth / 8, canvasHeight / 8);
        textGame('Jugador 2', (canvasWidth / 8) * 7, canvasHeight / 8);
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
    if (clickFig != null) {
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
        console.log(col);
        if (col !== null) {
            let filaAinsertar = tablero.tenesEspacioColumna(col);
            if (filaAinsertar > 0) {
                let ganador = tablero.InsertColumna(col, filaAinsertar, lastCircleCliked);
                // if (ganador) {
                //     showGanador();
                // }
            }
        } else {
            lastCircleCliked.returPosIni();
        }
    }
    borrarFichaPartida(lastCircleCliked);
    lastCircleCliked = null;
    isMouseDown = false;
    actualizar();
} 