class Circle {
    constructor(name, posX, posY, radius, fill, ctx, img) {
        this.name = name;
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.activado = false;
        this.ctx = ctx;
        this.radius = radius;
        this.source = img;
        this.img = new Image();
        this.img.src = img;
        this.posIni = {
            x: this.posX,
            y: this.posY
        }
        this.img.onload = () => {
            this.draw();
        };
    }
    returPosIni() {
        this.setPosition(this.posIni.x, this.posIni.y);
    }
    getActivado() {
        return this.activado;
    }
    setActivado() {
        this.activado = !this.activado;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.fill;
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.drawImage(this.img, this.posX - 25.5, this.posY - 25, 50, 50);
    }



    getName() {
        return this.name;
    }

    getFill() {
        return this.fill;
    }

    getRadius() {
        return this.radius;
    }

    isPointInside(x, y) {
        let _x = this.posX - x;
        let _y = this.posY - y;
        return Math.sqrt(_x * _x + _y * _y) < this.radius;
    }

    getPosition() {
        return {
            x: this.posX,
            y: this.posY
        }
    }

    setPosition(x, y) {
        this.posX = x;
        this.posY = y;
    }

    getPosX() {
        return this.posX;
    }

    getPosY() {
        return this.posY;
    }

    getImg() {
        return this.source;
    }

    isPointInside(x, y) {
        let xd = this.posX - x;
        let yd = this.posY - y;
        let distance = Math.sqrt(xd * xd + yd * yd);

        return distance <= this.radius;
    }
}
