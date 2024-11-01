class Casillero {
    constructor(ctx, inicioX, finX, inicioY, finY) {
        this.inicioX = inicioX;
        this.finX = finX;
        this.inicioY = inicioY;
        this.finY = finY;
        this.ctx = ctx;
        this.ocupado = false;
        this.obj = null;
        this.imgFicha = null;
        this.imgOcupacion = null;
        this.imgCasillero = new Image();
        this.imgCasillero.src = "../../Entrega-03/assets/casillero.jpg";
        this.imgCasillero.onload = () => {
            this.draw();
        };

    }
    getOcupado() {
        return this.ocupado;
    }



    draw() {
        this.ctx.fillStyle = "#757575";
        this.ctx.fillRect(this.inicioX, this.inicioY, 105.3, 70);
        this.ctx.drawImage(this.imgCasillero, this.inicioX, this.inicioY, 105.3, 70);
        /* this.ctx.beginPath();
         this.ctx.arc(this.inicioX + 52.65, this.inicioY + 33.5, 25, 0, 2 * Math.PI);
         this.ctx.fillStyle = "white";
         this.ctx.fill();
         this.ctx.closePath();*/
    }

    getInicioX() {
        return this.inicioX;
    }

    getInicioY() {
        return this.inicioY;
    }

    getFinX() {
        return this.finX;
    }

    getFinY() {
        return this.finY;
    }

    setOcupado(obj) {
        this.ocupado = true;
        this.obj = obj;
        this.imgFicha = this.obj.getImg();
    }

    deleteOcupado() {
        this.ocupado = false;
        this.obj = null;
    }

    drawObj() {
        if (this.ocupado == true) {
            this.ctx.beginPath();
            this.ctx.arc(this.inicioX + 52.65, this.inicioY + 33.5, 25, 0, 2 * Math.PI);
            this.ctx.fillStyle = this.obj.getFill();
            this.ctx.fill();
            this.ctx.closePath();

            this.imgOcupacion = new Image();
            this.imgOcupacion.src = this.imgFicha;
            this.ctx.drawImage(this.imgOcupacion, this.inicioX, this.inicioY, 105.3, 70);
        }
    }
    estaEnComlumna(x) {
        return x > this.inicioX && x < this.finX
    }

    getObj() {
        return this.obj;
    }

}