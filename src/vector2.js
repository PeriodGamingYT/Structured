// Object for conveinence sake.
class Vector2 {
	constructor(x=0, y=0) {
		this.x = x;
		this.y = y;
	}
}

function EnumToVec2(actionEnum, defaultX=0, defaultY=0) {
	if(actionEnum.found) {
		return new Vector2(actionEnum.args[0], actionEnum.args[1]);
	} else {
		return new Vector2(defaultX, defaultY);
	}
}

function Vec2() {
	return _ActionEnum(
		"vec2", 
		arguments[0], 
		arguments.length == 1 ? arguments[0] : arguments[1]
	);
}

function Size() {
	return _ActionEnum(
		"size", 
		Vec2(...arguments)
	);
}

function Position() {
	return _ActionEnum(
		"position", 
		Vec2(...arguments)
	);
}
