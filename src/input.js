export var Keys = {};
window.onkeydown = (e) => {
  Keys[e.key.toLowerCase()] = true;
}

window.onkeyup = (e) => {
  Keys[e.key.toLowerCase()] = false;
}

export var Mouse = {};
window.onblur = () => {
  for(var i of _keys) {
    i = false;
  }
  
  for(var i of Mouse) {
    i = false;
  }
}

var _mouseLut = [
  "left",
  "middle",
  "right"
];

window.onmousedown = (e) => {
  Mouse[_mouseLut[e.which]] = true;
}

window.onmouseup = () => {
  Mouse[_mouseLut[e.which]] = false;
}
