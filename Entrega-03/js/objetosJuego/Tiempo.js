class Tiempo {
    constructor(duracionMinutos, ctx, x, y) {
        this.duracion = duracionMinutos * 60;
        this.tiempoRestante = this.duracion;
        this.intervalo = null;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
    }


    iniciar() {
        this.detener();
        this.tiempoRestante = this.duracion;

        this.intervalo = setInterval(() => {
            if (this.tiempoRestante > 0) {
                this.tiempoRestante--;
                this.mostrarTiempo();
            } else {
                this.detener();
                this.tiempoTerminado();
            }
        }, 1000);
    }
    resetear() {
        this.detener();
        this.tiempoRestante = this.duracion;
    }

    detener() {
        if (this.intervalo) {
            clearInterval(this.intervalo);
            this.intervalo = null;
        }
    }


    mostrarTiempo() {

        this.ctx.clearRect(this.x - 50, this.y - 20, 100, 40);


        let minutos = Math.floor(this.tiempoRestante / 60);
        let segundos = this.tiempoRestante % 60;
        let tiempoFormateado = `${this.formatoDobleDigito(minutos)}:${this.formatoDobleDigito(segundos)}`;


        this.ctx.font = '700 30px Arial';
        this.ctx.fillStyle = 'white';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(tiempoFormateado, this.x, this.y);
    }


    formatoDobleDigito(numero) {
        return numero < 10 ? '0' + numero : numero;
    }


    tiempoTerminado() {
        console.log("¡El tiempo ha terminado!");
        this.ctx.clearRect(this.x - 50, this.y - 20, 100, 40);
        this.ctx.fillText('¡El tiempo ha terminado, esto es un EMPATE!', this.x, this.y);
    }

}
