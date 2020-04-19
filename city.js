
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

    turn() {
       
        // TODO rate
        this.fireMeter.setLevel(this.fireMeter.getLevel() + 0.1);
       this.waterMeter.setLevel(this.waterMeter.getLevel() - 0.01);
    }

    addToRenderables() {

        renderables.push(this);
    }

    addWaterMeter(x, y) {

        var waterMeterLevel = 25;
        this.waterMeter = new WaterMeter(this.x + x, this.y + y, waterMeterLevel);
    }

    addFireMeter(x, y) {

        var fireMeterLevel = 0;
        this.fireMeter = new FireMeter(this.x + x, this.y + y, fireMeterLevel);
    }
}