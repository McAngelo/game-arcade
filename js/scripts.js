let player = {
    x: 50,
    y: 100,
    paceMouth: 320,
    pacDir: 0,
    pSize: 32,
    speed: 5
};
let score = 0;
let gscore = 0;
const canvas = document.createElement("canvasSpace");
console.log(canvasSpace);
let ctx = canvasSpace.getContext("2d");

canvas.height = 400;
canvas.width = 600;
document.body.appendChild(canvas);

let mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "img/pac.png";

let keyClick = {};

document.addEventListener("keydown", function (event) {
    keyClick[event.key] = true;
    move(keyClick);
}, false);

document.addEventListener("keyup", function (event) {
    delete keyClick[event.key];
}, false);

function move(key){
    const keyAction = Object.keys(key)[0];
    switch (keyAction) {
        case 'ArrowLeft':
            player.x -= player.speed;
            player.pacDir = 64;
            break;
        case 'ArrowRight':
            player.x += player.speed;
            player.pacDir = 0;
            break;
        case 'ArrowUp':
            player.y -= player.speed;
            player.pacDir = 96;
            break;
        case 'ArrowDown':
            player.y += player.speed;
            player.pacDir = 32;
            break;
        default:
            break;
    }

    if(player.x >= (canvas.width-32)){
        player.x = 0;
    }
    if(player.x < 0){
        player.x = (canvas.width-32);
    }
    if(player.y >= (canvas.height-32)){
        player.y = 0;
    }
    if(player.y < 0){
        player.y = (canvas.height-32);
    }
    
    render();
}

function checkReady() {
    this.ready = true;
    playGame();
    
}

function playGame() {
    render();
}

function render() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        mainImage, 
        player.paceMouth, 
        player.pacDir, 
        32, 32, 
        player.x, 
        player.y, 
        player.pSize, 
        player.pSize
    );
    ctx.font = '20px Verdana';
    ctx.fillStyle = "white";
    ctx.fillText(`Pacman: ${score} vrs Ghost: ${gscore}`, 2, 18);
}