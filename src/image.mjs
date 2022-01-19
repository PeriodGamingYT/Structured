import { Position } from './vector2.mjs';
import { _ActionEnum, _FindEnum } from './core.mjs';

export function URL(url="") {
    return _ActionEnum(
			"url",
			url
		);
}

export function Image() {
	var url = _FindEnum("url", arguments, true).args[0];
	var position = _FindEnum("position", arguments, false).args[0];
	if(position.found == false) {
		position = Vec2(0, 0);
	}

	return _ActionEnum(
		"image",
		url,
		position
	);
}
