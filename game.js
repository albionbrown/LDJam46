var background = new Image(800, 600);
background.src = '/images/background.png';

var loopStart = null;


// renderables.push({ 
//     name: 'background', 
//     image: background
// });
// delete background;

/**
 * Runs the game
 */
function gameLoop() {

    var time = new Date();
    loopStart = time.getTime();

    // console.log("city1River flow " + city1River.getFlow());
    // console.log("city1 water rate " + city1.waterMeterRate);

    for (let i = 0; i < renderables.length; i++) {
        renderables[i].turn();
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
        renderables[i].draw();
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

var city1 = new City('London', 50, 50, 50, 50, '/images/city.png', 0, 0);
city1.addWaterMeter(50, 0);
city1.addFireMeter(60, 0);
city1.addToRenderables();

var city1River = new River(resovoir.x, resovoir.y, city1.x, city1.y, 10, false, 1);
city1River.addToRenderables();
city1River.setIncreaseFlowKey('e');
city1River.setRepairKey('w');
city1River.setDecreaseFlowKey('q');
city1.addRiver(city1River);

// var city2 = new City('Brighton', 50, 300, 50, 50, '/images/city.png', 0, 0);
// city2.addWaterMeter(50, 0);
// city2.addFireMeter(60, 0);
// city2.addToRenderables();

// var city2River = new River(city2.x, city2.y, resovoir.x, resovoir.y, 10, false, 1);
// city2River.addToRenderables();
// city2River.setIncreaseFlowKey('d');
// city2River.setRepairKey('s');
// city2River.setDecreaseFlowKey('a');
// city2.addRiver(city2River);

// var city3 = new City('Birmingham', 375, 500, 50, 50, '/images/city.png', 0, 0);
// city3.addWaterMeter(-20, 0);
// city3.addFireMeter(-10, 0);
// city3.addToRenderables();

// var city3River = new River(city3.x, city3.y, resovoir.x, resovoir.y, 10, false, 1);
// city3River.addToRenderables();
// city3River.setIncreaseFlowKey('h');
// city3River.setRepairKey('g');
// city3River.setDecreaseFlowKey('f');
// city3.addRiver(city3River);

// var city4 = new City('Bristol', 700, 300, 50, 50, '/images/city.png', 0, 0);
// city4.addWaterMeter(-20, 0);
// city4.addFireMeter(-10, 0);
// city4.addToRenderables();

// var city4River = new River(city4.x, city4.y, resovoir.x, resovoir.y, 10, false, 1);
// city4River.addToRenderables();
// city4River.setIncreaseFlowKey('l');
// city4River.setRepairKey('k');
// city4River.setDecreaseFlowKey('j');
// city4.addRiver(city4River);

// var city5 = new City('Ipswich', 700, 50, 50, 50, '/images/city.png', 0, 0);
// city5.addWaterMeter(-20, 0);
// city5.addFireMeter(-10, 0);
// city5.addToRenderables();

// var city5River = new River(city5.x, city5.y, resovoir.x, resovoir.y, 10, false, 1);
// city5River.addToRenderables();
// city5River.setIncreaseFlowKey('p');
// city5River.setRepairKey('o');
// city5River.setDecreaseFlowKey('i');
// city5.addRiver(city5River);

setInterval(gameLoop, 100);

