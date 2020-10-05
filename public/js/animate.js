let imgObj = null;
let animate;
let pos = 0;

init = () => {
    imgObj = document.getElementById('animate');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}

moveRight = () => {
    pos == 100 ? clearInterval(setInterval(moveRight, 5)) :
        imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
        animate = setTimeout(moveRight, 5);
        //pos += 10;
        redirect("./portfolio.html");
}

stop = () => {
    clearTimeout(animate);
    imgObj.style.left = '0px';
}

window.onload = init;

// animate progress

loadBar = (id, skillPercent, speed) => {
    const elem = document.getElementById(id)
    let width = 20;
    var id = setInterval(fill, speed);

    function fill(){
        width >= skillPercent ? clearInterval(id): width++; elem.style.width = width + "%";
        }
    }

const skillSet = [
    {
        id: "#html5-progressBar",
        percentage: 98,
        loadTime: 30
    },
    {
        id: "#css3-progressBar",
        percentage: 85,
        loadTime: 30
    },
    {
        id: "#js-progressBar",
        percentage: 60,
        loadTime: 30
    },
    {
        id: "#php-progressBar",
        percentage: 50,
        loadTime: 30
    },
    {
        id: "#microsoft-progressBar",
        percentage: 60,
        loadTime: 30
    },
    {
        id: "#java-progressBar",
        percentage: 80,
        loadTime: 30
    },
    {
        id: "#cpp-progressBar",
        percentage: 83,
        loadTime: 30
    },
    {
        id: "#python-progressBar",
        percentage: 70,
        loadTime: 30
    },
    {
        id: "#ae-progressBar",
        percentage: 60,
        loadTime: 30
    },
    {
        id: "#ps-progressBar",
        percentage: 55,
        loadTime: 30
    },
    {
        id: "#ai-progressBar",
        percentage: 80,
        loadTime: 30
    },
    {
        id: "#leadership-progressBar",
        percentage: 95,
        loadTime: 30
    },
    {
        id: "#speaking-progressBar",
        percentage: 90,
        loadTime: 30
    }
];

skillSet.forEach(function(skill) {
    loadBar(skill.id, skill.percentage, skill.loadTime);
});

