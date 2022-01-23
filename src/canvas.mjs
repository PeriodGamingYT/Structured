import { EnumToVec2, Vector2, Position, Size } from './vector2.mjs';
import { _ActionEnum, _FindEnum } from './core.mjs';

export function Canvas() {
	var size = EnumToVec2(_FindEnum("size", arguments, false, [window.innerWidth, window.innerHeight]));
	var position = EnumToVec2(_FindEnum("position", arguments, false, [0, 0]));
  var canvas = document.createElement("canvas");
  canvas.width = size.x;
  canvas.height = size.y;
  canvas.style.position = "absolute";
  canvas.style.left = `${position.x}px`;
  canvas.style.top = `${position.y}px`;
  canvas.style.width = "auto";
  canvas.style.height = "auto";
  document.body.appendChild(canvas);
  canvas = canvas.getContext("2d");
  return _ActionEnum("canvas", 
		_ActionEnum("context", canvas), 
		Position(position.x, position.y), 
		Size(size.x, size.y)
	);
}

export function Drawable(drawable=true) {
	return _ActionEnum("drawable", drawable);
}

export function Color(r=0, g=0, b=0) {
	return _ActionEnum("color", r, g, b);
}

export function ColorEnumToString(actionEnum) {
	return `rgb(${actionEnum.args[0]}, ${actionEnum.args[1]}, ${actionEnum.args[2]})`;
}

export function Fill() {
	return _ActionEnum("fill", 
		_FindEnum("drawable", arguments, true),
		_FindEnum("color", arguments, true)
	);
}

export function LineWidth(width=1) {
	return _ActionEnum("lineWidth", width);
}

export function Stroke() {
	return _ActionEnum("stroke",
    _FindEnum("drawable", arguments, true),
		_FindEnum("color", arguments, true),
		_FindEnum("lineWidth", arguments, false, [LineWidth(1)])
  );
}

export function Path(path = new Path2D()) {
	return _ActionEnum("path", path);
}

export function CanvasPath(path = new Path2D()) {
	var canvas = _FindEnum("canvas", arguments, true);
	var context = _FindEnum("context", canvas.args, true).args[0];
	var stroke = _FindEnum("stroke", arguments, false, [Stroke(Drawable(true), Color(0, 0, 0))]);
	var fill = _FindEnum("fill", arguments, false, [Fill(Drawable(true), Color(255, 255, 255))]);

	var path = _FindEnum("path", arguments, true).args[0];
	if(_FindEnum("drawable", fill.args, true).args[0]) {
		context.fillStyle = ColorEnumToString(_FindEnum("color", fill.args, true));
		context.fill(path);
	}

	if(_FindEnum("drawable", stroke.args, true).args[0]) {
		context.strokeStyle = ColorEnumToString(_FindEnum("color", stroke.args));
		context.lineWidth = _FindEnum("lineWidth", stroke.args, true).args[0];
		context.stroke(path);
	}
}
