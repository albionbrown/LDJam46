
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
        this.fireImage = new Image();
        this.fireImage.src = "images/fire.png";
        this.waterMeter = null;
        this.fireMeter = null;
        this.waterMeterRate = -1;
        this.fireMeterRate = 1;
        this.river = null;
        this.onFire = false;
        this.fireInitiated = false;
        this.timeTillNextFire = null;
        this.fireStartTime = null;
        this.droughtStartTime = null;
        this.floodStartTime = null;
        this.disabled = false;
    }

    draw() {

        ctx.font = "15px Arial";
        ctx.fillStyle = "#fff";
        ctx.fillText(this.name, this.x - (this.width / 2), this.y);
        ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.x, this.y, this.width, this.height);
        this.waterMeter.draw();
        this.fireMeter.draw();

        if (this.onFire) {

            // Draw flames
            ctx.drawImage(this.fireImage, 0, 0, this.fireImage.width, this.fireImage.height, this.x, this.y, 20, 20);
        }
    }

    turn() {

        if (this.disabled == true) {
            return;
        }

        if (this.onFire) {
            
            if (this.waterMeter.getLevel() >= this.fireMeter.getLevel()) {
                this.fireMeterRate = -1;
            }
            else {
                this.fireMeterRate = 1;
            }

            this.fireMeter.setLevel(this.fireMeter.getLevel() + this.fireMeterRate);

            if (this.fireMeter.getLevel() == 0) {
                this.stopFire();
            }
        }
        else {

            if (this.timeTillNextFire == null) {
                this.timeTillNextFire = Math.floor(Math.random() * 19) + 5;
                setTimeout(this.startFire, this.timeTillNextFire * 1000, this);
            }
        }
        
        this.waterMeter.setLevel(this.waterMeter.getLevel() + this.waterMeterRate + this.river.getFlow());

        // Check for flooding
        if (this.waterMeter.getLevel() >= 50) {

            this.river.setFlow(1);

            if (!this.onFire) {
                // Start timer
                if (this.floodStartTime == null) {
                    this.floodStartTime = loopStart;
                }
                // If been going for 5 seconds
                else if (loopStart > (this.floodStartTime + 5000)) {
                    this.cityFlooded();
                }
            }
        }
        else {
            this.floodStartTime = null;
        }

        // Check for a drought
        if (this.waterMeter.getLevel() <= 0) {

            this.river.setFlow(1);

            // Start timer
            if (this.droughtStartTime == null) {
                this.droughtStartTime = loopStart;
            }
            // If been going for 5 seconds
            else if (loopStart > (this.droughtStartTime + 5000)) {
                this.cityDroughted();
            }
        }
        else {
            this.droughtStartTime = null;
        }


        // Has the city burnt down
        if (this.fireMeter.getLevel() >= 50) {
            
            // Start timer
            if (this.fireStartTime == null) {
                this.fireStartTime = loopStart;
            }
            // If been going for 5 seconds
            else if (loopStart > (this.fireStartTime + 5000)) {
                this.cityBurnt();
            }
        }
        else {
            this.fireStartTime = null;
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
        city.fireMeter.setLevel(50);
    }

    stopFire() {

        this.onFire = false;
        this.timeTillNextFire = null;
        this.waterMeterRate = -1;
        // console.log(this.name + " fire extinguished");
    }

    cityFlooded() {

        this.image.src = "images/city_flooded.png";
        this.disableCity();
        // console.log(this.name + " flooded!");
    }

    cityBurnt() {

        this.image.src = "images/city_burnt.png";
        this.disableCity();
        // console.log(this.name + " burnt!");
    }

    cityDroughted() {

        this.image.src = "images/city_droughted.png";
        this.disableCity();
    }

    disableCity() {

        this.disabled = true;
    }
}