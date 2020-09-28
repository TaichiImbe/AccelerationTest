window.addEventListener('deviceorientation', handleOrientation, true);

function handleOrientation(event) {
    const absolute = event.absolute;
    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;

    const hoge = document.getElementById("Hoge");

    hoge.textContent = absolute
    
}