
class Meter {

    constructor (colour, x, y, level) {

        this.colour = colour;
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 50;
        this.level = level;
    }

    draw() {

        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.colour;
        ctx.fill();
        ctx.closePath();
    }
}