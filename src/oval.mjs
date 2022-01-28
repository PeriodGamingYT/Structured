import { _ActionEnum, _FindEnum } from './core.mjs';
import { EnumToVec2, Vector2 } from './vector2.mjs';
import { Rectangle } from './rectangle.mjs';
import { Path } from './canvas.mjs';

function ellipse(position=new Vector2(), size=new Vector2()) {
	var magic = .5522848;
	var offset = new Vector2((size.x / 2) * magic, (size.y / 2) * magic);
	var end = new Vector2(position.x + size.x, position.y + size.y);
	var middle = new Vector2(position.x + size.x / 2, position.y + size.y / 2);
	var resultPath = new Path2D();
	resultPath.moveTo(position.x, middle.y);
	resultPath.bezierCurveTo(position.x, middle.y - offset.y, middle.x - offset.x, position.y, middle.x, position.y);
	resultPath.bezierCurveTo(middle.x + offset.x, position.y, end.x, middle.y - offset.y, end.x, middle.y);
	resultPath.bezierCurveTo(end.x, middle.y + offset.y, middle.x + offset.x, end.y, middle.x, end.y);
	resultPath.bezierCurveTo(middle.x - offset.x, end.y, position.x, middle.y + offset.y, position.x, middle.y);
	return resultPath;
}

function ellipseByCenter(position=new Vector2(), size=new Vector2()) {
	return ellipse(new Vector2(position.x - size.x / 2, position.u - size.y / 2), size);
}

export function Center(center=true) {
	return _ActionEnum("center", center);
}

export function OvalPath() {
	var oval = _FindEnum("oval", arguments, true);
	var center = _FindEnum("center", oval.args, false, Center()).args[0];
	var position = EnumToVec2(_FindEnum("position", oval.args, true));
	var size = EnumToVec2(_FindEnum("size", oval.args, true));
	var ovalPath;
	if(center) {
		ovalPath = ellipseByCenter(position, size);
	} else {
		ovalPath = ellipse(position, size);
	}

	return Path(ovalPath);
}

// All set out like this because just passing "arguments" doesn't work.
export function Oval() {
	return _ActionEnum("oval",
		_FindEnum("position", arguments, true),
		_FindEnum("size", arguments, true),
		_FindEnum("center", arguments, false, Center(false)),
		_ActionEnum("path", OvalPath(_ActionEnum("oval",
			_FindEnum("position", arguments, true),
			_FindEnum("size", arguments, true),
			_FindEnum("center", arguments, true)
		)))
	);
}