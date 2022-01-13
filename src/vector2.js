import * from 'core.js';

// Object for conveinence sake.
export class Vector2 {
	constructor(x=0, y=0) {
		this.x = x;
		this.y = y;
	}
}

export function EnumToVec2(actionEnum, defaultX=0, defaultY=0) {
	if(actionEnum.found) {
		return new Vector2(actionEnum.args[0], actionEnum.args[1]);
	} else {
		return new Vector2(defaultX, defaultY);
	}
}

export function Vec2() {
	return _ActionEnum(
		"vec2", 
		arguments[0], 
		arguments.length == 1 ? arguments[0] : arguments[1]
	);
}

export function Size() {
	return _ActionEnum(
		"size", 
		Vec2(...arguments)
	);
}

export function Position() {
	return _ActionEnum(
		"position", 
		Vec2(...arguments)
	);
}
