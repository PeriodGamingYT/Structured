import { MakeTracker } from './tracker.mjs';

export var Focused = MakeTracker(true);
window.onblur = () => {
  Focused.value = false;
}

window.onfocus = () => {
	Focused.value = true;
}

export var Keys = {};
window.onkeydown = (e) => {
	if(!Keys[e.key.toLowerCase]) {
		Keys[e.key.toLowerCase()] = MakeTracker(true);
		return;
	}

	Keys[e.key.toLowerCase()].value = true;
}

window.onkeyup = (e) => {
  if(!Keys[e.key.toLowerCase]) {
  		Keys[e.key.toLowerCase()] = MakeTracker(false);
  		return;
  	}
  
  	Keys[e.key.toLowerCase()].value = false;
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
  	if(!Mouse[i]) {
  		Mouse[i] = MakeTracker(true);
  	} else {
  		Mouse[i].value = true;
  	}
  }
}

window.onmouseup = (e) => {
  var buttons = decode(e.buttons, true);
  for(var i of buttons) {
  	if(!Mouse[i]) {
  		Mouse[i] = MakeTracker(false);
  	} else {
  		Mouse[i].value = false;
  	}
 	}
}

window.ondblclick = () => {
	if(!Mouse["double"]) {
		Mouse["double"] = MakeTracker(true);
		return;
	}

	if(!Mouse["double"].changed && !Mouse["double"].start) {
		Mouse["double"].value = false;
		return;
	}

	Mouse["double"].value = true;
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
