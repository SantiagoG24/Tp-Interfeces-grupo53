class Boton {
    constructor(posX, posY, width, height, ctx, color,text) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.color = color
        this.text = text

    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
        this.ctx.fillStyle = "white"; // Color del texto
        this.ctx.font = "40px Arial"; // Fuente y tamaño del texto

        // Calcular posición del texto para centrarlo en el botón
        const textMetrics = this.ctx.measureText(this.text);
        const textX = this.posX + (this.width - textMetrics.width) / 2;
        const textY = this.posY + (this.height + 20) / 2; // Ajusta 20 según el tamaño de la fuente

        // Dibujar el texto
        this.ctx.fillText(this.text, textX, textY);
    }

    isPointInside(x, y) {
        return (
            x >= this.posX &&
            x <= this.posX + this.width &&
            y >= this.posY &&
            y <= this.posY + this.height
        );
    }



}