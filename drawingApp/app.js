const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// 선그리기 stroke
// ctx.rect(50,50,100,200)
// ctx.stroke() 

// 색채우기 fill
ctx.rect(150,150,100,100)
ctx.rect(250,250,100,100)
ctx.fill() 
// 또는 위 두 코드를 한줄로 ctx.fillRect(150,150,100,100)
ctx.rect(350,350,100,100)
ctx.fillStyle = "red";
setTimeout(()=>{ctx.fill();}, 5000)