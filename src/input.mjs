export var Focused = true;
window.onblur = () => {
  Focused = false;
}

window.onfocus = () => {
	Focused = true;
}

export var Keys = {};
window.onkeydown = (e) => {
  Keys[e.key.toLowerCase()] = true;
}

window.onkeyup = (e) => {
  Keys[e.key.toLowerCase()] = false;
}

import { Vector2 } from './vector2.mjs';
export var Mouse = {};

var _mouseLut = [
  "left",
  "right",
  "middle",
  "back",
  "forward"
];

function decode(buttons, mouseLut=false) {
	if(buttons === 0) {
		return mouseLut ? _mouseLut : [];
	}
	
	var result = [];
	var i = 1;
	var j = 0;
	while(i <= 16) {
		if(buttons & i === i) {
			result.push(_mouseLut[j]);
		}

		j++;
		i *= 2;
	}
	
	return result;
}

window.onmousedown = (e) => {
	var buttons = decode(e.buttons);
  for(var i of buttons) {
  	Mouse[i] = true;
  }
}

window.onmouseup = (e) => {
  var buttons = decode(e.buttons, true);
  for(var i of buttons) {
  	Mouse[i] = false;
  }
}

window.ondblclick = () => {
	Mouse["double"] = true;
}

var timeout;
window.onmousemove = (e) => {
	clearTimeout(timeout);
	Mouse["where"] = new Vector2(e.clientX, e.clientY);
	Mouse["move"] = new Vector2(e.movementX, e.movementY);
	timeout = setTimeout(function() {
		Mouse["move"] = new Vector2(0, 0);
	}, 1);
}
