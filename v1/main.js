const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "#000";


const context = canvas.getContext("2d");

context.strokeStyle = "#ff4141";
context.lineWidth = 10;
context.lineCap = "round";

let shouldPaint = false;

document.addEventListener('mousedown', (e) => {
    shouldPaint = true;
    context.moveTo(e.pageX, e.pageY);
    context.beginPath();
});

document.addEventListener('mouseup', () => {
    shouldPaint = false;
})

document.addEventListener('mousemove', (e) => {
    if (shouldPaint) {
        context.lineTo(e.pageX, e.pageY);
        context.stroke();
    }
})


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        context.strokeStyle = link.style.backgroundColor;
    })
})