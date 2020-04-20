
class River {

    constructor (srcX, srcY, destX, destY, width, damaged, flow) {

        this.srcX = srcX;
        this.srcY = srcY;
        this.destX = destX;
        this.destY = destY;
        this.width = width;
        this.length = this.calculateLength();
        this.damaged = damaged;
        this.flow = flow;
        this.rotation = null;

        this.increaseKey = null;
        this.decreaseKey = null;
        this.repairKey = null;
    }

    turn() {
        
        var increaseKey = keys[this.increaseKey];
        var decreaseKey = keys[this.decreaseKey];

        if (increaseKey.pressed) {
            this.increaseFlow();
        }

        if (decreaseKey.pressed) {
            this.decreaseFlow();
        }
    }

    draw() {

        // var sourceX;
        // var sourceY;
        // var destX;
        // var destY;

        // if (this.destX < this.srcX) {
        //     sourceX = this.destX;
        //     destX = this.srcX;
        // }
        // else {
        //     sourceX = this.srcX;
        //     destX = this.destX;
        // }

        // if (this.destY < this.srcY) {
        //     sourceY = this.destY;
        //     destY = this.srcY;
        // }
        // else {
        //     sourceY = this.srcY;
        //     destY = this.destY;
        // }

        var centreX = this.srcX + (this.width / 2);
        // var centreY = sourceY + (this.length / 2);
        var adjacent = this.srcX - this.destX;
        var opposite = this.destY - this.srcY;

        var rotation = (Math.atan(opposite / adjacent)) * (180 / Math.PI);
        
        console.log("Opposite " + opposite);
        console.log("Adjacent " + adjacent);
        console.log("Rotation " + rotation);

        ctx.save();

        ctx.translate(centreX, this.srcY);
        ctx.rotate(rotation);
        ctx.translate(-centreX, -this.srcY);

        ctx.fillStyle = "#9cd3db";
        ctx.fillRect(800, 600, this.width, this.length);

        ctx.restore();
    }

    calculateLength() {

        var a = this.srcX - this.destX;
        var b = this.srcY - this.destY;

        return Math.sqrt((a * a) + (b * b));
    }

    addToRenderables() {

        renderables.push(this);
    }

    getFlow() {
        
        if (this.broken) {
            this.flow = 0;
        }

        return this.flow;
    }

    setFlow(flow) {
        
        this.flow = flow;
    }

    increaseFlow() {

        this.flow++;
    }

    decreaseFlow() {

        if (this.flow > 0) {
            this.flow--;
        }
    }

    setIncreaseFlowKey(key) {

        this.increaseKey = key;
    }

    setRepairKey(key) {

        this.repairKey = key;
    }

    setDecreaseFlowKey(key) {

        this.decreaseKey = key;
    }
}