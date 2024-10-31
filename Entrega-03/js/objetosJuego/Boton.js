class Boton {
    constructor(posX, posY, width, height, ctx,mode) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        
    }

    draw() {
        this.ctx.fillStyle = "pink";
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
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





    
