
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

        var y = this.y + (this.height - this.level)

        ctx.beginPath();
        ctx.rect(this.x, y, this.width, this.level);
        ctx.fillStyle = this.colour;
        ctx.fill();
        ctx.closePath();
    }

    setLevel(level) {

        if (level >= 0 && level <= 50) {
            this.level = level;
        }
    }

    getLevel () {

        return this.level;
    }
}