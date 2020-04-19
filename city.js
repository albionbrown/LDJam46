
class City {

    constructor (name, locX, locY, width, height, imageSrc, waterDamage, fireDamage) {

        this.name = name;
        this.x = locX;
        this.y = locY;
        this.width = width;
        this.height = height;
        this.imageSrc = imageSrc;
        this.image = new Image();
        this.image.src = this.imageSrc;
        this.waterMeter = null;
        this.fireMeter = null;
        this.waterMeterRate = -0.01;
        this.fireMeterRate = 0.01;
    }

    draw() {

        ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.x, this.y, this.x + this.width, this.y + this.height);
        this.waterMeter.draw();
        this.fireMeter.draw();
    }

    turn() {
       
        // TODO rate
        this.fireMeter.setLevel(this.fireMeter.getLevel() + this.fireMeterRate);
        this.waterMeter.setLevel(this.waterMeter.getLevel() + this.waterMeterRate);
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