import { EnumToVec2, Position } from './vector2.mjs';
import { _ActionEnum, _FindEnum } from './core.mjs';

export function URL(url="") {
    return _ActionEnum(
			"url",
			url
		);
}

export function CImage() { // Method called "CImage" because Image() in DOM API exists.
	var url = _FindEnum("url", arguments, true);
	var position = _FindEnum("position", arguments, false, Position(0, 0));

	return _ActionEnum(
		"image",
		url,
		position
	);
}

export function DrawImage() {
	var context = _FindEnum("context", _FindEnum("canvas", arguments, true).args, true).args[0];
	var image = _FindEnum("image", arguments, true);
	var position = EnumToVec2(_FindEnum("position", image.args, true));
	var imageElement = new Image();
	imageElement.src = _FindEnum("url", image.args, true).args[0];
	imageElement.onload = () => {
		context.drawImage(imageElement, position.x, position.y);
	}
	
	console.log(imageElement);
}