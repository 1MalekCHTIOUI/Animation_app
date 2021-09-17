window.onload = () => {
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
