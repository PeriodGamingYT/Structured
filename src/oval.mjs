import { _ActionEnum, _FindEnum } from './core.mjs';
import { EnumToVec2, Vector2 } from './vector2.mjs';
import { Path } from './canvas.mjs';

export function Center(center=true) {
	return _ActionEnum("center", center);
}

// All set out like this because just passing "arguments" doesn't work.
export function Oval() {
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
		return ellipse(new Vector2(position.x - size.x / 2, position.y - size.y / 2), size);
	}

	var center = _FindEnum("center", arguments, false, Center()).args[0];
	var position = EnumToVec2(_FindEnum("position", arguments, true));
	var size = EnumToVec2(_FindEnum("size", arguments, true));
	var ovalPath = center ? ellipseByCenter(position, size) : ellipse(position, size);

	return _ActionEnum("oval",
		_FindEnum("position", arguments, true),
		_FindEnum("size", arguments, true),
		_FindEnum("center", arguments, false, Center(false)),
		Path(ovalPath)
	);
}