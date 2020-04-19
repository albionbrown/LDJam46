var background = new Image(800, 600);
background.src = '/images/background.png';

// renderables.push({ 
//     name: 'background', 
//     image: background
// });
// delete background;

/**
 * Runs the game
 */
function gameLoop() {
    renderables[0].turn();
    drawAll();
}

/**
 * Draw all entities on the canvas
 */
function drawAll() {

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // var background = getRenderable('background');
    ctx.drawImage(background, 0, 0);

    for (let i = 0; i < renderables.length; i++) {
        let renderable = renderables[i];
        renderable.draw();
    }
}

/**
 * Returns an renderable by name
 */
function getRenderable(name) {

    for (let i = 0; i < renderables.length; i++) {

        let asset = renderables[i];
        if (asset.name == name) {
            return asset;
        }
    }

    // An renderable was not found
    return false;
}

var city1 = new City('London', 20, 10, 50, 50, '/images/city.png', 0, 0);
city1.addWaterMeter(-20, 0);
city1.addFireMeter(-10, 0);
city1.addToRenderables();

// var city2 = new City('Brighton', 700, 500, '/images/city.png', 0, 0);
// city2.addToRenderables();

// var city3 = new City('Birmingham', 0, 500, '/images/city.png', 0, 0);
// city3.addToRenderables();

// var city4 = new City('Bristol', 0, 300, '/images/city.png', 0, 0);
// city4.addToRenderables();

// var city5 = new City('Ipswich', 700, 300, '/images/city.png', 0, 0);
// city5.addToRenderables();

setInterval(gameLoop, 10);

