const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
   // stops the function form running when they are not moused down
   if (!isDrawing) return;
   console.log(e);
   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
   ctx.beginPath();

   // start from
   ctx.moveTo(lastX, lastY);
   // go to
   ctx.lineTo(e.offsetX, e.offsetY);

   ctx.stroke();
   [lastX, lastY]  = [e.offsetX, e.offsetY];
   (hue > 360 ? hue = 0 : hue++);

   if (ctx.lineWidth >= 300 || ctx.lineWidth <= 1) {
      direction = !direction;
   }
   (direction ? ctx.lineWidth++ : ctx.lineWidth--);
}

canvas.addEventListener('mousedown', (e) => {
   isDrawing = true;
   [lastX, lastY]  = [e.offsetX, e.offsetY];
});
canvas.addEventListener('touchstart', () => isDrawing = true);
canvas.addEventListener('touchend', () => isDrawing = false);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchcancel', () => isDrawing = false);

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mousemove', draw);
