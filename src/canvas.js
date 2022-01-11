import * from 'core.js';
export function Canvas(width=window.innerWidth, height=window.innerHeight) {
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.style.position = "absolute";
  canvas.style.left = "0";
  canvas.style.top = "0";
  canvas.style.width = "auto";
  canvas.style.height = "auto";
  document.body.appendChild(canvas);
  canvas = canvas.getContext("2d");
  return _ActionEnum("canvas", canvas, width, height);
}
