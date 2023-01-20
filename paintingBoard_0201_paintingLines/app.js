const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
    ]

// ctx.moveTo(0,0);

function onClick(event){
    ctx.beginPath();  // ctx.beginPath() 코드를 작성하면 path를 분리시켜 다른색상의 선을 그릴수있게됨
    ctx.moveTo(0,0); 
    const color = colors[Math.floor(Math.random()*colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

// canvas.addEventListener("click", onClick);
canvas.addEventListener("mousemove", onClick);
