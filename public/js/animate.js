var imgObj = null;
var animate;
var pos = 0;

function init(){
    imgObj = document.getElementById('animate');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}

function moveRight(){
    if(pos == 2000)
        clearInterval(setInterval(moveRight, 5));
    else{
        imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
        animate = setTimeout(moveRight, 5);
        pos += 10;
        redirect("./portfolio.html");
    }
}

function stop(){
    clearTimeout(animate);
    imgObj.style.left = '0px';
}

window.onload = init;