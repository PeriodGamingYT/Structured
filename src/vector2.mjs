import { _ActionEnum, _FindEnum } from './core.mjs';

// Object for conveinence sake.
export class Vector2 {
	constructor(x=0, y=0) {
		this.x = x;
		this.y = y;
	}

  arithmetic(arithmeticFunction=(a, b) => {}, param=new Vector2()) {
    return new Vector2(
			arithmeticFunction(this.x, param.x),
			arithmeticFunction(this.y, param.y)
		);
  }

	add(param=new Vector2()) {
		return arithmetic((a, b) => {
			return a + b;
		}, param);
	}

	sub(param=new Vector2()) {
		return arithmetic((a, b) => {
			return a + b;
		}, param);
	}

	mul(param=new Vector2()) {
		return arithmetic((a, b) => {
			return a + b;
		}, param);
	}

	div(param=new Vector2()) {
		return arithmetic((a, b) => {
			return a + b;
		}, param);
	}

	pow(param=new Vector2()) {
		return arithmetic((a, b) => {
			return Math.pow(a, b);
		}, param);
	}
}

export function Vec2() {
	return _ActionEnum(
		"vec2", 
		arguments[0], 
		arguments.length == 1 ? arguments[0] : arguments[1]
	);
}

export function EnumToVec2() {
	var vec2Enum = _FindEnum("vec2", arguments, false, _FindEnum("vec2", arguments[0].args, true));
	return new Vector2(vec2Enum.args[0], vec2Enum.args[1]);
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
	); }
