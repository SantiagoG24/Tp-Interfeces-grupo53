class Tiempo {
    constructor(duracionMinutos, ctx, x, y) {
        this.duracion = duracionMinutos * 60; // Convertimos los minutos a segundos
        this.tiempoRestante = this.duracion;
        this.intervalo = null;
        this.ctx = ctx; // Contexto del canvas
        this.x = x; // Posición X en el canvas
        this.y = y; // Posición Y en el canvas
    }

    // Método para iniciar el temporizador
    iniciar() {
        this.detener(); // Detener cualquier intervalo anterior
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

    // Método para detener el temporizador
    detener() {
        if (this.intervalo) {
            clearInterval(this.intervalo);
            this.intervalo = null;
        }
    }

    // Método para mostrar el tiempo en formato "MM:SS" en el canvas
    mostrarTiempo() {
        // Borrar el área del temporizador antes de dibujar el tiempo actualizado
        this.ctx.clearRect(this.x - 50, this.y - 20, 100, 40);
        
        // Formatear el tiempo restante como "MM:SS"
        let minutos = Math.floor(this.tiempoRestante / 60);
        let segundos = this.tiempoRestante % 60;
        let tiempoFormateado = `${this.formatoDobleDigito(minutos)}:${this.formatoDobleDigito(segundos)}`;

        // Dibujar el tiempo en el canvas
        this.ctx.font = '20px Arial';
        this.ctx.fillStyle = 'white';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(tiempoFormateado, this.x, this.y);
    }

    // Método auxiliar para formato de doble dígito
    formatoDobleDigito(numero) {
        return numero < 10 ? '0' + numero : numero;
    }

    // Método que se ejecuta cuando el tiempo se agota
    tiempoTerminado() {
        console.log("¡El tiempo ha terminado!");
        this.ctx.clearRect(this.x - 50, this.y - 20, 100, 40);
        this.ctx.fillText('¡El tiempo ha terminado, esto es un EMPATE!', this.x, this.y);
    }
}