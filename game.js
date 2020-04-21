var background = new Image(800, 600);
background.src = 'images/background.png';

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
    // ctx.drawImage(background, 0, 0);
    ctx.fillStyle = "#567d46";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < renderables.length; i++) {
        renderables[i].draw();
    }

    ctx.font = "30px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText("Aqua Qaos", 300, 30);
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

var resovoir = new Resovoir((canvas.width / 2) - 50, (canvas.height / 2) - 50, 100, 100, 'images/resovoir.png');

var city1 = new City(
    'NorthWestVille', 
    50, 
    50, 
    50, 
    50, 
    'images/city.png', 
    0, 
    0
);

city1.addWaterMeter(50, 0);
city1.addFireMeter(60, 0);

var city1River = new River(
    resovoir.x + (resovoir.width / 2),
    resovoir.y + (resovoir.height / 2),
    city1.x + (city1.width / 2), 
    city1.y + (city1.height / 2),
    10, 
    false, 
    1,
    125
);

city1River.addToRenderables();
city1River.setIncreaseFlowKey('e');
city1River.setRepairKey('w');
city1River.setDecreaseFlowKey('q');
city1.addRiver(city1River);
city1.addToRenderables();

var city2 = new City(
    'WestVille', 
    50, 
    300,
    50, 
    50, 
    'images/city.png', 
    0, 
    0
);

city2.addWaterMeter(50, 0);
city2.addFireMeter(60, 0);

var city2River = new River(
    resovoir.x + (resovoir.width / 2),
    resovoir.y + (resovoir.height / 2),
    city2.x + (city2.width / 2), 
    city2.y + (city2.height / 2), 
    10, 
    false, 
    1,
    87
);

city2River.addToRenderables();
city2River.setIncreaseFlowKey('d');
city2River.setRepairKey('s');
city2River.setDecreaseFlowKey('a');
city2.addRiver(city2River);
city2.addToRenderables();

var city3 = new City(
    'SouthVille', 
    375, 
    500, 
    50, 
    50, 
    'images/city.png', 
    0, 
    0
);

city3.addWaterMeter(-20, 0);
city3.addFireMeter(-10, 0);

var city3River = new River(
    resovoir.x + (resovoir.width / 2),
    resovoir.y + (resovoir.height / 2),
    city3.x + (city3.width / 2),
    city3.y + (city3.height / 2), 
    10, 
    false, 
    1,
    1
);

city3River.addToRenderables();
city3River.setIncreaseFlowKey('h');
city3River.setRepairKey('g');
city3River.setDecreaseFlowKey('f');
city3.addRiver(city3River);
city3.addToRenderables();

var city4 = new City(
    'EastVille', 
    700, 
    300,
    50,
    50, 
    'images/city.png',
    0, 
    0
);

city4.addWaterMeter(-20, 0);
city4.addFireMeter(-10, 0);

var city4River = new River(
    resovoir.x + (resovoir.width / 2),
    resovoir.y + (resovoir.height / 2),
    city4.x + (city4.width / 2), 
    city4.y + (city4.height / 2), 
    10, 
    false, 
    1,
    275
);

city4River.addToRenderables();
city4River.setIncreaseFlowKey('l');
city4River.setRepairKey('k');
city4River.setDecreaseFlowKey('j');
city4.addRiver(city4River);
city4.addToRenderables();

var city5 = new City(
    'NorthEastVille', 
    700, 
    50, 
    50, 
    50, 
    'images/city.png', 
    0, 
    0
);

city5.addWaterMeter(-20, 0);
city5.addFireMeter(-10, 0);

var city5River = new River(
    resovoir.x + (resovoir.width / 2),
    resovoir.y + (resovoir.height / 2),
    city5.x + (city5.width / 2),
    city5.y + (city5.height / 2),
    10, 
    false, 
    1,
    235
);

city5River.addToRenderables();
city5River.setIncreaseFlowKey('p');
city5River.setRepairKey('o');
city5River.setDecreaseFlowKey('i');
city5.addRiver(city5River);
city5.addToRenderables();

resovoir.addToRenderables();

setInterval(gameLoop, 100);

