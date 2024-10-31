
let canvas = document.getElementById("myCanvas");
canvas.addEventListener('click', showConfig);

let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let fichasEnPartida = [];

let mode = 0;
let tablero;
let isMouseDown = false;
let lastCircleCliked = null;

<<<<<<< HEAD
ctx.font = '700 30px Arial';
ctx.fillStyle = 'white';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
let texto = '¡Haz Click para Comenzar a Jugar!';
let x = canvas.width / 2;
let y = canvas.height / 2;
ctx.fillText(texto, x, y);
=======

function textGame(texto,x,y){
    ctx.font = '700 30px Arial';         
    ctx.fillStyle = 'white';         
    ctx.textAlign = 'center';          
    ctx.textBaseline = 'middle'; 
    let txt = texto;
    ctx.fillText(txt, x, y);
}

textGame('¡Haz Click para Comenzar a Jugar!',canvas.width / 2,canvas.height / 2);
>>>>>>> 5e912cd98964ca505c76beb6c73fbd02329769d1



/*Imagenes Fichas*/
let IronmanImg = "assets/ironman-logo.png";
let CaptainAmericaImg = "assets/captain-america-logo.png";

<<<<<<< HEAD

=======
 
>>>>>>> 5e912cd98964ca505c76beb6c73fbd02329769d1



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

<<<<<<< HEAD
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
=======
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
            
            let cantFichas = tablero.getFilas() * tablero.getColumnas();

            for (let i = 0; i < cantFichas; i++) {
                let f1 = drawFicha("ironman", canvasWidth / 8, canvasHeight / 4 + i * 10, "red", IronmanImg);
                let f2 = drawFicha("ironman", (canvasWidth / 8) * 7, canvasHeight / 4 + i * 10, "blue", CaptainAmericaImg);
            }

            textGame('Jugador 1', canvasWidth / 8, canvasHeight / 8); 
            textGame('Jugador 2', (canvasWidth / 8) * 7, canvasHeight / 8);
        }
        

        function armarTablero() {
            tablero = new Tablero(ctx, mode, 5, 67);
        }
>>>>>>> 5e912cd98964ca505c76beb6c73fbd02329769d1

    }

    function showCantFichas() {

        let buttonMode4 = new Circle("modo4", 50, 100, 90, "blue", ctx);
        let buttonMode5 = new Circle("modo5", 180, 100, 50, "blue", ctx);
        let buttonMode6 = new Circle("modo6", 250, 100, 50, "blue", ctx);
        let buttonMode7 = new Circle("modo7", 100, 100, 50, "blue", ctx);
        buttonMode4.draw()
        buttonMode5.draw()
        buttonMode6.draw()

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
        let cantFichas = tablero.getFilas() * tablero.getColumnas();

        for (i = 0; i < cantFichas; i++) {
            let f1 = drawFicha("ironman", 100, 100 + i * 10, "red", IronmanImg);
            let f2 = drawFicha("ironman", 1100, 100 + i * 10, "blue", CaptainAmericaImg);
        }


        tablero.drawTablero();
    }

    function armarTablero() {
        tablero = new Tablero(ctx, mode, 5, 67);
    }

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


<<<<<<< HEAD
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
=======

    function drawFicha(name, x, y, color, img) {
        let ficha = new Circle(name, x, y, 25, color, ctx, img);
        fichasEnPartida.push(ficha);
>>>>>>> 5e912cd98964ca505c76beb6c73fbd02329769d1
        actualizar();
    }
}

canvas.addEventListener("mouseup", onMouseUp, false);

<<<<<<< HEAD
function onMouseUp(e) {
    lastCircleCliked = null;
    isMouseDown = false;
=======
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
>>>>>>> 5e912cd98964ca505c76beb6c73fbd02329769d1


}