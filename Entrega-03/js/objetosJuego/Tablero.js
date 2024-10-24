class Tablero {
    constructor(ctx, modo, inicioY, finY) {
        this.inicioY = inicioY;
        this.finY = finY;
        this.ctx = ctx;
        this.filas = 0;
        this.columnas = 0;
        this.modo = modo;
        this.filas = 0;
        this.columnas = 0;
        this.tablero = [];
        this.crearTablero(modo);
    }
    InsertColumna(c, nueva) {
        if (c < this.columnas) {
            for (let i = this.filas; i < 0; i--) {
                let casillero = this.tablero[i][c];
                if (!casillero.getOcupado()) {
                    this.tablero[i][c] = nueva;
                    return chequearGanador();
                }
            }
        }
        return false;
    }
    chequearGanador() {
        let encontrado = false;

        if (encontrado === false) {
            encontrado = busquedaPorFila();
        }

        if (encontrado === false) {
            encontrado = busquedaPorColumna();
        }

        if (encontrado === false) {
            encontrado = busquedaPorDiagonalIzquierda();
        }

        if (encontrado === false) {
            encontrado = busquedaPorDiagonalDerecha();
        }
        return encontrado
    }
    crearTablero(modo) {
        let inicioTable;
        if (modo == 4) {
            this.filas = 6 + 1;
            this.columnas = 7;
            inicioTable = 255.3;
            this.llenarTablero(inicioTable);
        }
        if (modo == 5) {
            this.filas = 7 + 1;
            this.columnas = 8;
            inicioTable = 155.3;
            this.llenarTablero(inicioTable);
        }
        if (modo == 6) {
            this.filas = 8 + 1;
            this.columnas = 9;
            inicioTable = 155.3;
            this.llenarTablero(inicioTable);
        }
        if (modo == 7) {
            this.filas = 9 + 1;
            this.columnas = 9;
            inicioTable = 155;
            this.llenarTablero(inicioTable);
        }
        console.log(this.tablero)

    }
    drawTablero() {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        for (let i = 0; i < this.tablero.length; i++) {
            for (let j = 0; j < this.tablero[i].length; j++) {
                this.tablero[i][j].draw();
                this.tablero[i][j].drawObj();
            }
        }
    }

    llenarTablero(inicioTable) {
        for (let x = 0; x < this.filas; x++) {
            let fila = [];
            let inicioX = inicioTable;
            let finX = inicioTable + 105.3;
            for (let y = 0; y < this.columnas; y++) {
                let casillero = new Casillero(ctx, inicioX, finX, this.inicioY, this.finY);
                fila.push(casillero);
                inicioX = inicioX + 105.3;
                finX = finX + 105.3;
            }
            this.tablero.push(fila);
            this.inicioY = this.inicioY + 67;
            this.finY = this.finY + 67;
        }
    }
    //////////////////////////
    busquedaPorFila() {
        let contador = 0;
        let aux = "";
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                if (contador < mode) {
                    if (matriz[i][j].getObj() != null) {
                        if (contador == 0) {
                            aux = matriz[i][j].getObj().getName();
                            contador++;
                        } else if (contador > 0) {
                            if (matriz[i][j].getObj().getName() == aux) {
                                contador++;
                            } else {
                                contador = 1;
                                aux = matriz[i][j].getObj().getName();
                            }
                        }
                    } else {
                        if (matriz[i][j].getObj() == null) {
                            contador = 0;
                            aux = "";
                        }
                    }
                } else {
                    return true;
                }
            }
            if (contador == mode) {
                return true;
            } else {
                contador = 0;
                axu = "";
            }

        }
        return false;
    }

    busquedaPorColumna() {
        let contador = 0;
        let aux = "";

        let columna = 0;
        let fila = 0;

        while (columna < mode * 2) {
            while (fila < mode * 2) {
                if (contador < mode) {
                    if (matriz[fila][columna].getObj() != null) {
                        if (contador == 0) {
                            aux = matriz[fila][columna].getObj().getName();
                            contador++;
                        } else if (contador > 0) {
                            if (matriz[fila][columna].getObj().getName() == aux) {
                                contador++;
                            } else {
                                aux = matriz[fila][columna].getObj().getName();
                                contador = 1;
                            }
                        }
                    } else if (matriz[fila][columna].getObj() == null) {
                        aux = "";
                        contador = 0;
                    }
                } else {
                    return true;
                }
                fila++;
            }
            if (contador == mode) {
                return true;
            } else {
                columna++;
                fila = 0;
                contador = 0;
                axu = "";
            }
        }
        return false;
    }

    busquedaPorDiagonalIzquierda() {
        let contador = 0;
        let aux = "";
        let busqueda = false;

        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                if (matriz[i][j].getObj() != null) {
                    contador = 1;
                    aux = matriz[i][j].getObj().getName();
                    busqueda = true;
                    let x = j;
                    let y = i;
                    while (busqueda === true) {
                        if (contador < mode) {
                            x++;
                            y++;
                            if (x < columnas && y < filas) {
                                if (matriz[y][x].getObj() != null) {
                                    if (matriz[y][x].getObj().getName() == aux) {
                                        contador++;
                                    } else {
                                        busqueda = false;
                                    }
                                } else if (matriz[y][x].getObj() == null) {
                                    busqueda = false;
                                }
                            } else {
                                return false;
                            }
                        } else if (contador == mode) {
                            busqueda = false;
                            return true;
                        }
                    }
                }
            }
            if (contador == mode) {
                return true;
            }
        }
        return false;
    }

    busquedaPorDiagonalDerecha() {
        let contador = 0;
        let aux = "";
        let busqueda = false;

        for (let i = 0; i < matriz.length; i++) {
            for (let j = columnas - 1; j >= 0; j--) {
                if (matriz[i][j].getObj() != null) {
                    contador = 1;
                    aux = matriz[i][j].getObj().getName();
                    busqueda = true;
                    let x = j;
                    let y = i;
                    while (busqueda === true) {
                        if (contador < mode) {
                            x--;
                            y++;
                            if (x >= 0 && y < filas) {
                                if (matriz[y][x].getObj() != null) {
                                    if (matriz[y][x].getObj().getName() == aux) {
                                        contador++;
                                    } else {
                                        busqueda = false;
                                    }
                                } else if (matriz[y][x].getObj() == null) {
                                    busqueda = false;
                                }
                            } else {
                                return false;
                            }
                        } else if (contador == mode) {
                            busqueda = false;
                            return true;
                        }
                    }
                }
            }
            if (contador == mode) {
                return true;
            }
        }
        return false;
    }
}

