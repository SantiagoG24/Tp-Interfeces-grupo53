class Casillero {
    
    constructor(ctx, inicioX, finX, inicioY, finY) {
        this.inicioX = inicioX;
        this.finX = finX;
        this.inicioY = inicioY;
        this.finY = finY;
        this.width = finX - inicioX;      
        this.height = finY - inicioY;    
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
        this.ctx.fillRect(this.inicioX, this.inicioY, this.width, this.height);
        this.ctx.drawImage(this.imgCasillero, this.inicioX, this.inicioY, this.width, this.height);
       /* this.ctx.beginPath();
         this.ctx.arc(this.inicioX + 52.65, this.inicioY + 33.5, 25, 0, 2 * Math.PI);
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
        if (this.ocupado === true) {
            // Calcular el centro del círculo y el radio en función del tamaño del casillero
            const centerX = this.inicioX + this.width / 2;
            const centerY = this.inicioY + this.height / 2;
            const radius = Math.min(this.width, this.height) * 0.3;  // Proporcional al tamaño del casillero
    
            // Dibujar el círculo en el centro del casillero
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            this.ctx.fillStyle = this.obj.getFill();
            this.ctx.fill();
            this.ctx.closePath();
    
            // Configurar el recorte circular
            this.ctx.save(); // Guardar el estado del contexto
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            this.ctx.clip(); // Recortar al círculo
    
            // Dibujar la imagen ajustada al círculo
            this.imgOcupacion = new Image();
            this.imgOcupacion.src = this.imgFicha;
            this.ctx.drawImage(this.imgOcupacion, centerX - radius, centerY - radius, radius * 2, radius * 2);
    
            // Restaurar el estado del contexto para evitar afectar otros dibujos
            this.ctx.restore();
        }
    }
    
    
    estaEnComlumna(x) {
        return x > this.inicioX && x < this.finX
    }

    getObj() {
        return this.obj;
    }

}