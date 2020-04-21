
class River {

    constructor (srcX, srcY, destX, destY, width, damaged, flow, rotation) {

        this.srcX = srcX;
        this.srcY = srcY;
        this.destX = destX;
        this.destY = destY;
        this.width = width;
        this.length = this.calculateLength();
        this.damaged = damaged;
        this.flow = flow;
        this.rotation = rotation;

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
        var adjacent = this.destX - this.srcX;
        var opposite = -(this.destY - this.srcY);

        // var angleRadians = Math.asin(opposite / this.length);
        // var angleDegrees = angleRadians * (180 / Math.PI) + 90;
        // var rotation = angleDegrees * (Math.PI / 180);

        // console.log("Opposite " + opposite);
        // console.log("Adjacent " + adjacent);
        // console.log("Angle Radians from horizontal " + angleRadians);
        // console.log("Angle degrees from horizontal " + angleDegrees);

        ctx.save();

        ctx.translate(this.srcX, this.srcY);
        ctx.rotate(this.rotation * (Math.PI / 180));
        ctx.translate(-(this.srcX), -this.srcY);

        ctx.fillStyle = "#9cd3db";
        ctx.fillRect(this.srcX, this.srcY, (this.flow) * 2 + 10, this.length);

        ctx.restore();
    }

    calculateLength() {

        var a = this.srcX - this.destX;
        var b = this.srcY - this.destY;
        var c = Math.pow(a, 2) + Math.pow(b, 2);
        return Math.sqrt(c);
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