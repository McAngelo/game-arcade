/* const canvas = document.getElementById('canvasSpace');
let ctx = canvas.getContext("2d");
ctx.fillText("Hello World", 100, 150); */

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

function checkReady() {
    this.ready = true;
    playGame();
    
}

function playGame() {
    render();
}

function render() {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(mainImage, 10, 10);
}