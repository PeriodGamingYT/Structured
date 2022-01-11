function Canvas() {
  var canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = "absolute";
  canvas.style.left = "0";
  canvas.style.top = "0";
  document.body.appendChild(canvas);
  canvas = canvas.getContext("2d");
  return canvas;
}
