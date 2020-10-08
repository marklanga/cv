const canvas = document.getElementById('canvas'); 
const ctx = canvas.getContext('2d');

// const circle = {
//     x: 200,
//     y: 200,
//     size: 30,
//     dx: 5,
//     dy: 4
// };

// function drawCircle() {
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
//     ctx.fillStyle = 'purple';
//     ctx.fill();
// }

// function updateCanvas() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     drawCircle();

//     circle.x += circle.dx;
//     circle.y += circle.dy;

//     if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0){
//         circle.dx *= -1;
//     }

//     if(circle.y + circle.size > canvas.height || circle.y - circle.size < 0){
//         circle.dy *= -1;
//     }

//     requestAnimationFrame(updateCanvas);
//     console.log(123);
// }

// updateCanvas();

// animate person 2 

const image = document.getElementById('source');

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