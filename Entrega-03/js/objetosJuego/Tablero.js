class Tablero {
    constructor(ctx, inicioX, finX, inicioY, finY, filas, columnas, modo) {
        this.inicioX = inicioX;
        this.finX = finX;
        this.inicioY = inicioY;
        this.finY = finY;
        this.ctx = ctx;
        this.filas = filas;
        this.columnas = columnas;
        this.tablero = new Casillero[filas][columnas];
        this.modo = modo;
        crearCasilleros
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

    }
}