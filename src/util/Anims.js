window.onload = () => {
    let element = document.getElementById('main');
    let btn = document.getElementById('btn');
    let geo = document.getElementById('geo');
    let score = document.getElementById('score');
    score.innerHTML =  0
    btn.addEventListener("click", start_animation);
    let lastAngle = 360
    function start_animation(e){
        score.innerHTML ++;
        lastAngle = +lastAngle + +360;
        e.preventDefault();
        element.style.transform = `rotate(${lastAngle}deg)`
        geo.classList.add("rotate")

    }
    btn.addEventListener("onmousedown", start_animations);
    function start_animations(){
        console.log("ss");
    }
}
