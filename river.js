
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

        this.timeTillNextBreak = null;
        this.normalColour = "#9cd3db";
        this.damagedColour = '#696969';
    }

    turn() {
        
        var increaseKey = keys[this.increaseKey];
        var decreaseKey = keys[this.decreaseKey];
        var repairKey   = keys[this.repairKey];

        if (this.damaged) {

            if (repairKey.pressed) {
                this.damaged = false;
            }
        }
        else {

            if (this.timeTillNextBreak == null) {
                this.timeTillNextBreak = Math.floor(Math.random() * 29) + 10;
                setTimeout(this.break, this.timeTillNextBreak * 1000, this);
            }

            if (increaseKey.pressed) {
                this.increaseFlow();
            }
    
            if (decreaseKey.pressed) {
                this.decreaseFlow();
            }
        }
    }

    draw() {

        var centreX = this.srcX + (this.width / 2);
        // var centreY = sourceY + (this.length / 2);
        var adjacent = this.destX - this.srcX;
        var opposite = -(this.destY - this.srcY);

        ctx.save();

        ctx.translate(this.srcX, this.srcY);
        ctx.rotate(this.rotation * (Math.PI / 180));
        ctx.translate(-(this.srcX), -this.srcY);

        if (this.damaged) {
            ctx.fillStyle = this.damagedColour;
        }
        else {
            ctx.fillStyle = this.normalColour;      
        }

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

    break(river) {

        river.damaged = true;
    }
}