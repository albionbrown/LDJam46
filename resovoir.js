
class Resovoir {

    constructor(locX, locY, width, height, imageSrc) {

        this.x = locX;
        this.y = locY;
        this.width = width;
        this.height = height;
        this.imageSrc = imageSrc;
        this.image = new Image();
        this.image.src = this.imageSrc;
    }

    draw() {

        ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.x, this.y, this.width, this.height);
    }

    turn() {
       
    }

    addToRenderables() {

        renderables.push(this);
    }
}