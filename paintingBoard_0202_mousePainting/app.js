const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

function onMove(event){
    ctx.moveTo(event.offsetX, event.offsetY); 
}
 
canvas.addEventListener("mousemove", onMove);
