
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
        this.waterMeterRate = -1;
        this.fireMeterRate = 0.5;
        this.river = null;
        this.onFire = false;
        this.timeTillNextFire = null;
        this.fireStartTime = null;
        this.droughtStartTime = null;
        this.floodStartTime = null;
    }

    draw() {

        ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.x, this.y, this.width, this.height);
        this.waterMeter.draw();
        this.fireMeter.draw();

        if (this.onFire) {

            // Draw flames
            console.log("FUUUUCK");
        }
    }

    turn() {

        if (this.onFire) {

            this.fireMeter.setLevel(this.fireMeter.getLevel() + this.fireMeterRate);
            this.waterMeterRate = this.waterMeterRate - 2;
        }
        else {

            if (this.timeTillNextFire == null) {
                this.timeTillNextFire = Math.floor(Math.random() * 29) + 10;
                setTimeout(this.startFire, this.timeTillNextFire * 1000, this);
            }
        }
        
        this.waterMeter.setLevel(this.waterMeter.getLevel() + this.waterMeterRate + this.river.getFlow());

        // Check for flooding
        if (this.waterMeter.getLevel() >= 50) {
            // flood
            console.log('Flood!');

            // Start timer
            // If been going for 5 seconds
            // cityFlooded()
        }

        // Check for a drought
        if (this.waterMeter.getLevel() <= 0) {
            // flood
            console.log('Drought!');

            // Start timer
            // If been going for 5 seconds
            // cityDroughted()
        }


        // Has the city burnt down
        if (this.fireMeter.getLevel() >= 50) {
            
            // Start timer
            if (this.fireStartTime == null) {
                this.fireStartTime = loopStart;
            }

            // If been going for 5 seconds
            if (loopStart > (this.fireStartTime + 5000)) {
                this.cityBurnt()
            }
        }
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

    addRiver(river) {

        this.river = river;
    }

    // A setTimeout handler
    startFire(city) {

        city.onFire = true;
        city.timeTillNextFire = null;
    }

    cityFlooded() {

    }

    cityBurnt() {

        this.image.src = "/images/skull.png"
    }

    cityDroughted() {

    }
}