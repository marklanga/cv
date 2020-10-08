const canvas = document.getElementById('canvas'); 
const image = document.getElementById('source');
const ctx = canvas.getContext('2d');

const player = {
    w: 70,
    h: 70,
    x: 20,
    y: 200,
    speed: 6,
    dx: 5,
    dy: 3
};

function drawPlayer(){
    ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function newPos(){
    player.x += player.dx;
    player.y += player.dy;

    detectWalls();
}

function detectWalls(){
    if(player.x  + player.w > canvas.width || player.x < 0){
        player.dx *= -1;
    }

    if(player.y + player.h > canvas.height || player.y < 0){
        player.dy *= -1;
    }
}

function update(){
    clear();

    drawPlayer();

    newPos();

    requestAnimationFrame(update);
};

update();