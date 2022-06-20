// canvasを作ってHTMLに突っ込む。
const canvas = document.getElementById("star_can")
const context = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 700;

context.fillStyle = "rgb(255,179,0)";
context.strokeStyle = "rgb(255,255,255)";
context.lineWidth = 2;

//太陽
context.beginPath();
context.arc(canvas.width/2,canvas.height/2,20,0, Math.PI*2, false);
context.fill();

//第一軌道
context.beginPath();
context.arc(canvas.width/2,canvas.height/2,40,0, Math.PI*2, false);
context.stroke();

//第二軌道
context.beginPath();
context.arc(canvas.width/2,canvas.height/2,60, Math.PI*2, false);
context.stroke();

context.beginPath();
context.arc(canvas.width/2,canvas.height/2,80,0, Math.PI*2, false);
context.stroke();