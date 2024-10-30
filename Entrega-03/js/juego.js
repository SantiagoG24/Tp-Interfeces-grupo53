btn_play = document.getElementById("btn-play");
btn_play.addEventListener('click', showConfig);
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let fichasEnPartida = [];

let mode = 0;
let tablero;
let isMouseDown = false;
let lastCircleCliked = null;


function showConfig() {
    let selecionModo = document.getElementById("selecionModo");
    let selecionFicha = document.getElementById("fichasEleccion");
    let btn_modo = document.getElementById("btn-modo");
    let start_game = document.getElementById("start-game");

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

    function showSelecionFicha() {
        selecionModo.classList.toggle("sacar");
        selecionFicha.classList.toggle("active");
    }
    function startGame() {
        selecionFicha.classList.toggle("sacar");
        armarTablero(mode);
        let imgironman = "assets/ironman-logo.png";
        let imgcapitan = "assets/captain-america-logo.png";
        let cantFichas = tablero.getFilas() * tablero.getColumnas() / 2;
        for (i = 0; i < cantFichas; i++) {
            let f1 = drawFicha("ironman", 100, 100 + i * 10, "red", imgironman);
            let f2 = drawFicha("capitanamerica", 1100, 100 + i * 10, "blue", imgcapitan);
        }

        tablero.drawTablero();
    }

    function armarTablero() {
        tablero = new Tablero(ctx, mode, 5, 67);
    }

}

function play() {
}

function drawFicha(name, x, y, color, img) {
    let ficha = new Circle(name, x, y, 25, color, ctx, img);
    fichasEnPartida.push(ficha);
    actualizar();
}
function actualizar() {
    tablero.drawTablero();
    for (let i = 0; i < fichasEnPartida.length; i++) {
        fichasEnPartida[i].draw();
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
    // console.log(e)
    isMouseDown = true;

    if (lastCircleCliked != null) {
        lastCircleCliked = null;
    }
    let clickFig = findClickedCircle(e.layerX, e.layerY);
    if (clickFig != null) {
        lastCircleCliked = clickFig;
    }
    // actualizar();
}

canvas.addEventListener("mousemove", onMouseMove, false);

function onMouseMove(e) {
    if (isMouseDown && lastCircleCliked != null) {
        lastCircleCliked.setPosition(e.layerX, e.layerY);
        actualizar();
    }
}

canvas.addEventListener("mouseup", onMouseUp, false);

function onMouseUp(e) {
    lastCircleCliked = null;
    isMouseDown = false;


}