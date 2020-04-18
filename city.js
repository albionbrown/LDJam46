
class City {

    constructor (name, locX, locY, imageSrc, waterDamage, fireDamage) {

        this.name = name;
        this.x = locX;
        this.y = locY;
        this.imageSrc = imageSrc;
        this.image = new Image(100, 100);
        this.image.src = this.imageSrc;
        this.waterMeter = null;
        this.fireMeter = null;
    }

    draw() {

        ctx.drawImage(this.image, this.x, this.y);
        this.waterMeter.draw();
        this.fireMeter.draw();
    }

    addToRenderables() {

        renderables.push(this);
    }

    addWaterMeter(x, y) {

        var waterMeterLevel = 50;
        this.waterMeter = new WaterMeter(this.x + x, this.y + y, waterMeterLevel);
    }

    addFireMeter(x, y) {

        var fireMeterLevel = 0;
        this.fireMeter = new FireMeter(this.x + x, this.y + y, fireMeterLevel);
    }
}