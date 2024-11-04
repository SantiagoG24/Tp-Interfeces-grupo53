class Text {
    constructor(posX, posY, ctx, color, text) {
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;  
        this.color = color;
        this.text = text;
    }

    draw() {
        this.ctx.font = '700 30px Arial'; 
        this.ctx.fillStyle = this.color; 
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(this.text, this.posX, this.posY);
    }
    
    setText(text) {
        this.text = text;
    }


}