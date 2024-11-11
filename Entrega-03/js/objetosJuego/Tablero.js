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
        this.inicioX;
        this.finX;
        this.tableroXI;
        this.tableroXF;
        this.tableroYI;
        this.tableroXF;

    }

    getFilas() {
        return this.filas - 1;
    }

    getColumnas() {
        return this.columnas;
    }
    tenesEspacioColumna(c) {
        for (let i = this.filas - 1; i >= 1; i--) {  // Empieza en la última fila y va hasta la fila 1
            let cas = this.tablero[i][c];
            if (cas.getOcupado() == false) {
                return i;
            }
        }
        return -1;
    }

    InsertColumna(c, f, nueva) {
        let casillero = this.tablero[f][c];
        casillero.setOcupado(nueva);
        casillero.drawObj();
        return this.chequearGanador();
    }



    chequearGanador() {
        let encontrado = false;

        if (encontrado === false) {
            encontrado = this.busquedaPorFila();
        }

        if (encontrado === false) {
            encontrado = this.busquedaPorColumna();
        }

        if (encontrado === false) {
            encontrado = this.busquedaPorDiagonalIzquierda();
        }

        if (encontrado === false) {
            encontrado = this.busquedaPorDiagonalDerecha();
        }
        return encontrado
    }
    crearTablero(modo) {
        let casilleroWidth = 0;
        let casilleroHeight = 0;

        if (modo == 4) {
            this.filas = 6 + 1;
            this.columnas = 7;
            casilleroWidth = 105.3;
            casilleroHeight = 70;
        } else if (modo == 5) {
            this.filas = 7 + 1;
            this.columnas = 8;
            casilleroWidth = 105.3;
            casilleroHeight = 70;
        } else if (modo == 6) {
            this.filas = 8 + 1;
            this.columnas = 9;
            casilleroWidth = 95.3;
            casilleroHeight = 65;
        } else if (modo == 7) {
            this.filas = 9 + 1;
            this.columnas = 9;
            casilleroWidth = 76.24;
            casilleroHeight = 52;
        }

        let tableroAncho = this.columnas * casilleroWidth;
        let tableroAlto = this.filas * casilleroHeight;

        let inicioX = (canvasWidth - tableroAncho) / 2;
        let inicioY = (canvasHeight - tableroAlto) / 2;
        this.tableroXI = inicioX;
        this.tableroYI = inicioY;

        this.llenarTablero(inicioX, inicioY, casilleroWidth, casilleroHeight);
    }

    llenarTablero(inicioX, inicioY, casilleroWidth, casilleroHeight) {
        for (let x = 0; x < this.filas; x++) {
            let fila = [];
            let posX = inicioX;
            for (let y = 0; y < this.columnas; y++) {
                let casillero = new Casillero(this.ctx, posX, posX + casilleroWidth, inicioY, inicioY + casilleroHeight);
                fila.push(casillero);
                posX += casilleroWidth;
                this.tableroXF = posX;
            }
            this.tablero.push(fila);
            inicioY += casilleroHeight;
            this.tableroYF = inicioY;
        }
    }

    whereClick(x, y) {
        if (x > this.tableroXI && x < this.tableroXF && y > this.tableroYI && y < this.tableroYF) {
            let res = this.buscarColumnaPos(x);
            return res;
        }
        return null;
    }
    buscarColumnaPos(x) {
        for (let i = 0; i < this.columnas; i++) {
            let cas = this.tablero[0][i];
            if (cas.estaEnComlumna(x)) {
                return i;
            }
        }
        return null;
    }

    drawTablero() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(imagenFondo, 0, 0, canvasWidth, canvasHeight);
        for (let i = 0; i < this.tablero.length; i++) {
            for (let j = 0; j < this.tablero[i].length; j++) {
                this.tablero[i][j].draw();
                this.tablero[i][j].drawObj();
            }
        }

    }
    //////////////////////////
    busquedaPorFila() {
        let contador = 0;
        let aux = "";
        for (let i = 0; i < this.tablero.length; i++) {
            for (let j = 0; j < this.tablero[i].length; j++) {
                if (contador < mode) {
                    if (this.tablero[i][j].getObj() != null) {
                        if (contador == 0) {
                            aux = this.tablero[i][j].getObj().getName();
                            contador++;
                        } else if (contador > 0) {
                            if (this.tablero[i][j].getObj().getName() == aux) {
                                contador++;
                            } else {
                                contador = 1;
                                aux = this.tablero[i][j].getObj().getName();
                            }
                        }
                    } else {
                        if (this.tablero[i][j].getObj() == null) {
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
                aux = "";
            }

        }
        return false;
    }

    busquedaPorColumna() {
        let contador = 0;
        let aux = "";
        for (let j = 0; j < this.tablero[0].length; j++) {
            contador = 0;
            aux = "";

            for (let i = 0; i < this.tablero.length; i++) {
                if (contador < mode) {
                    if (this.tablero[i][j].getObj() != null) {
                        if (contador == 0) {
                            aux = this.tablero[i][j].getObj().getName();
                            contador++;
                        } else {
                            if (this.tablero[i][j].getObj().getName() == aux) {
                                contador++;
                            } else {
                                contador = 1;
                                aux = this.tablero[i][j].getObj().getName();
                            }
                        }
                    } else {
                        contador = 0;
                        aux = "";
                    }
                } else {
                    return true;
                }
            }

            if (contador == mode) {
                return true;
            }
        }

        return false;
    }

    busquedaPorDiagonalIzquierda() {
        let contador = 0;
        let aux = "";
        let busqueda = false;

        for (let i = 0; i < this.tablero.length; i++) {
            for (let j = 0; j < this.tablero[i].length; j++) {
                if (this.tablero[i][j].getObj() != null) {
                    contador = 1;
                    aux = this.tablero[i][j].getObj().getName();
                    busqueda = true;
                    let x = j;
                    let y = i;
                    while (busqueda === true) {
                        if (contador < mode) {
                            x++;
                            y++;
                            if (x < this.columnas && y < this.filas) {
                                if (this.tablero[y][x].getObj() != null) {
                                    if (this.tablero[y][x].getObj().getName() == aux) {
                                        contador++;
                                    } else {
                                        busqueda = false;
                                    }
                                } else if (this.tablero[y][x].getObj() == null) {
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

        for (let i = 0; i < this.tablero.length; i++) {
            for (let j = this.columnas - 1; j >= 0; j--) {
                if (this.tablero[i][j].getObj() != null) {
                    contador = 1;
                    aux = this.tablero[i][j].getObj().getName();
                    busqueda = true;
                    let x = j;
                    let y = i;
                    while (busqueda === true) {
                        if (contador < mode) {
                            x--;
                            y++;
                            if (x >= 0 && y < this.filas) {
                                if (this.tablero[y][x].getObj() != null) {
                                    if (this.tablero[y][x].getObj().getName() == aux) {
                                        contador++;
                                    } else {
                                        busqueda = false;
                                    }
                                } else if (this.tablero[y][x].getObj() == null) {
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