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
     
    for (let i = 0; i < renderables.length; i++) {
        let renderable = renderables[i].turn();
    }

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

var resovoir = new Resovoir(350, 250, 50, 50, '/images/resovoir.png');
resovoir.addToRenderables();

var city1 = new City('London', 20, 10, 50, 50, '/images/city.png', 0, 0);
city1.addWaterMeter(-20, 0);
city1.addFireMeter(-10, 0);
city1.addToRenderables();

var city1River = new River(350, 250, 20, 10, 10, false, 1);
city1River.addToRenderables();
city1River.setIncreaseFlowKey('e');
city1River.setRepairKey('w');
city1River.setDecreaseFlowKey('q');
city1.addRiver(city1River);

var city2 = new City('Brighton', 700, 500, 50, 50, '/images/city.png', 0, 0);
city2.addWaterMeter(-20, 0);
city2.addFireMeter(-10, 0);
city2.addToRenderables();

var city2River = new River(700, 500, 20, 10, 10, false, 1);
city2River.addToRenderables();
city2River.setIncreaseFlowKey('d');
city2River.setRepairKey('s');
city2River.setDecreaseFlowKey('a');
city2.addRiver(city2River);

var city3 = new City('Birmingham', 20, 500, 50, 50, '/images/city.png', 0, 0);
city3.addWaterMeter(-20, 0);
city3.addFireMeter(-10, 0);
city3.addToRenderables();

var city3River = new River(700, 500, 20, 10, 10, false, 1);
city3River.addToRenderables();
city3River.setIncreaseFlowKey('h');
city3River.setRepairKey('g');
city3River.setDecreaseFlowKey('f');
city3.addRiver(city3River);

var city4 = new City('Bristol', 20, 300, 50, 50, '/images/city.png', 0, 0);
city4.addWaterMeter(-20, 0);
city4.addFireMeter(-10, 0);
city4.addToRenderables();

var city4River = new River(700, 500, 20, 10, 10, false, 1);
city4River.addToRenderables();
city4River.setIncreaseFlowKey('l');
city4River.setRepairKey('k');
city4River.setDecreaseFlowKey('j');
city4.addRiver(city4River);

var city5 = new City('Ipswich', 700, 300, 50, 50, '/images/city.png', 0, 0);
city5.addWaterMeter(-20, 0);
city5.addFireMeter(-10, 0);
city5.addToRenderables();

var city5River = new River(700, 500, 20, 10, 10, false, 1);
city5River.addToRenderables();
city5River.setIncreaseFlowKey('p');
city5River.setRepairKey('o');
city5River.setDecreaseFlowKey('i');
city5.addRiver(city5River);

setInterval(gameLoop, 100);

