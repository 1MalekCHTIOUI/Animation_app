function rotate() {
    console.log("sss");
    let element = document.getElementById('main');
    let btn = document.getElementById('btn');
    let geo = document.getElementById('geo');
    let sec = document.getElementById('sec');
    let score = document.getElementById('score');
    score.innerHTML =  0
    btn.addEventListener("click", start_animation);
    let lastAngle = 360
    function start_animation(e){
        score.innerHTML ++;
        lastAngle = +lastAngle + +360;
        e.preventDefault();
        geo.style.transform = `rotate(${lastAngle}deg)`
        sec.style.transform = `rotate(${lastAngle}deg)`
    }
}

function Degree(deg) {
    let element = document.getElementById('visualizer');
    let lastAngle = 0; 
    start_animation();
    function start_animation(){
        lastAngle = +lastAngle + + deg;
        if(lastAngle > 90) throw new Error("Angle must be 90deg or less");
        element.style.transform = `rotate(${-lastAngle}deg)`
    }
}

module.exports = {
    rotate,
    Degree
} 