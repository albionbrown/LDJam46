
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

var keys = {
    q: {
        key: 'q',
        pressed: false
    },
    w: {
        key: 'w',
        pressed: false
    },
    e: {
        key: 'e',
        pressed: false
    },
    a: {
        key: 'a',
        pressed: false
    },
    s: {
        key: 's',
        pressed: false
    },
    d: {
        key: 'd',
        pressed: false
    },
    f: {
        key: 'f',
        pressed: false
    },
    g: {
        key: 'g',
        pressed: false
    },
    h: {
        key: 'h',
        pressed: false
    },
    j: {
        key: 'j',
        pressed: false
    },
    k: {
        key: 'k',
        pressed: false
    },
    l: {
        key: 'l',
        pressed: false
    },
    i: {
        key: 'i',
        pressed: false
    },
    o: {
        key: 'o',
        pressed: false
    },
    p: {
        key: 'p',
        pressed: false
    },
};

function keyDownHandler(event) {

    switch (event.keyCode) {

        // Q
        case 81:
            keys['q'].pressed = true;
            break;

        // W
        case 87:
            keys['w'].pressed = true;
            break;

        // E
        case 69: 
            keys['e'].pressed = true;
            break;

        // A
        case 65:
            keys['a'].pressed = true;
            break;

        // S
        case 83:
            keys['s'].pressed = true;
            break;

        // D
        case 68:
            keys['d'].pressed = true;
            break;

        // F
        case 70:
            keys['f'].pressed = true;
            break;

        // G
        case 71:
            keys['g'].pressed = true;
            break;

        // H
        case 72:
            keys['h'].pressed = true;
            break;

        // J
        case 74:
            keys['j'].pressed = true;
            break;

        // K
        case 75:
            keys['k'].pressed = true;
            break;

        // L
        case 76:
            keys['l'].pressed = true;
            break;

        // I
        case 73:
            keys['i'].pressed = true;
            break;

        // O
        case 79:
            keys['o'].pressed = true;
            break;

        // P
        case 80:
            keys['p'].pressed = true;
            break;   
    }
}

function keyUpHandler(event) {

    switch (event.keyCode) {

        // Q
        case 81:
            keys['q'].pressed = false;
            break;

        // W
        case 87:
            keys['w'].pressed = false;
            break;

        // E
        case 69: 
            keys['e'].pressed = false;
            break;

        // A
        case 65:
            keys['a'].pressed = false;
            break;

        // S
        case 83:
            keys['s'].pressed = false;
            break;

        // D
        case 68:
            keys['d'].pressed = false;
            break;

        // F
        case 70:
            keys['f'].pressed = false;
            break;

        // G
        case 71:
            keys['g'].pressed = false;
            break;

        // H
        case 72:
            keys['h'].pressed = false;
            break;

        // J
        case 74:
            keys['j'].pressed = false;
            break;

        // K
        case 75:
            keys['k'].pressed = false;
            break;

        // L
        case 76:
            keys['l'].pressed = false;
            break;

        // I
        case 73:
            keys['i'].pressed = false;
            break;

        // O
        case 79:
            keys['o'].pressed = false;
            break;

        // P
        case 80:
            keys['p'].pressed = false;
            break;   
    }
}
