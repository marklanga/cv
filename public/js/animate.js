let imgObj = null;
let animate;
let pos = 0;

init = () => {
    imgObj = document.getElementById('animate');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}

moveRight = () => {
    pos == 2000 ? clearInterval(setInterval(moveRight, 5)) :
        imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
        animate = setTimeout(moveRight, 5);
        pos += 10;
        redirect("./portfolio.html");
}

stop = () => {
    clearTimeout(animate);
    imgObj.style.left = '0px';
}

window.onload = init;