const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext("2d");

function rand(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// ==============================================================

function drawArc(x = 0, y = 0, color = "#000") {
  ctx.beginPath();
  ctx.arc(x, y, width > 600 ? 50 : 25, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.lineWidth = 5;
  ctx.fill();
}

function onDraw(e) {

  if(e instanceof TouchEvent)
    drawArc(
      e.touches[0].pageX,
      e.touches[0].pageY,
      `#${rand(0, 255).toString(16)}${rand(0, 255).toString(16)}${rand(0, 255).toString(16)}`
    );

  else
    drawArc(e.pageX, e.pageY, `#${rand(0, 255).toString(16)}${rand(0, 255).toString(16)}${rand(0, 255).toString(16)}`);

}

window.addEventListener("mousedown", (e) => {
  onDraw(e);
  window.addEventListener("mousemove", onDraw);
});

window.addEventListener("mouseup", () => {
  window.removeEventListener("mousemove", onDraw);
});

window.addEventListener("touchstart", (e) => {
  onDraw(e);
  window.addEventListener("touchmove", onDraw);
});

window.addEventListener("touchend", () => {
  window.removeEventListener("touchmove", onDraw);
});
