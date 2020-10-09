const canvas = document.getElementById('canvas'); 
const image = document.getElementById('source');
const ctx = canvas.getContext('2d');

const mark = {
    w: 70,
    h: 70,
    x: 20,
    y: 200,
    speed: 6,
    dx: 5,
    dy: 3
};

function drawmark(){
    ctx.drawImage(image, mark.x, mark.y, mark.w, mark.h);
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function newPos(){
    mark.x += mark.dx;
    mark.y += mark.dy;

    detectWalls();
}

function detectWalls(){
    if(mark.x  + mark.w > canvas.width || mark.x < 0){
        mark.dx *= -1;
    }

    if(mark.y + mark.h > canvas.height || mark.y < 0){
        mark.dy *= -1;
    }
}

function update(){
    clear();

    drawmark();

    newPos();

    requestAnimationFrame(update);
};

update();