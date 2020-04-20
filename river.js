
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
        // Matrix transformation
        // ctx.translate(150, 75);
        // ctx.rotate(Math.PI / 2);
        // ctx.translate(-150, -75);
        ctx.beginPath();
        ctx.rect(0, 0, this.width, this.length);
        ctx.fillStyle = "#9cd3db";
        ctx.fill();
        ctx.closePath();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
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