import { _ActionEnum, _FindEnum } from './core.mjs';
import { Stroke, Fill, Drawable, Color, ColorEnumToString } from './canvas.mjs';
import { Position, EnumToVec2 } from './vector2.mjs';

export function Bold(bold=false) {
	return _ActionEnum("bold", bold);
}

export function Italic(italic=false) {
	return _ActionEnum("italic", italic);
}

export function Underline(underline=false) {
	return _ActionEnum("underline", underline);
}

export function FontType(fontType="Arial") {
	return _ActionEnum("fontType", fontType);
}

export function Font() {
	return _ActionEnum("font",
		_FindEnum("bold", arguments, false, [false]),
		_FindEnum("italic", arguments, false, [false]),
		_FindEnum("underline", arguments, false, [false]),
		_FindEnum("fontType", arguments, false ["Arial"])
	);
}

export function TextString(string="") {
	return _ActionEnum("textString", string);
}

// No way to add text to a path so we have to draw it directly instead.
export function DrawText() {
	var text = _FindEnum("text", arguments, true);
	var textString = _FindEnum("textString", text.args, true).args[0];
	var bold = _FindEnum("bold", text.args, false, Bold(false)).args[0] ? "bold" : "";
	var italic = _FindEnum("italic", text.args, false, Italic(false)).args[0] ? "italic" : "";
	var underline = _FindEnum("underline", text.args, false, Underline(false)).args[0] ? "underline" : "";
	var font = _FindEnum("fontType", text.args, false, FontType("Arial")).args[0];
	var rectangle = _FindEnum("rectangle", text.args, true);
	var position = EnumToVec2(_FindEnum("position", rectangle.args, true));
	var size = EnumToVec2(_FindEnum("size", rectangle.args, true));
	var stroke = _FindEnum("stroke", arguments, false, Stroke(Drawable(true), Color(0, 0, 0)));
	var fill = _FindEnum("fill", arguments, false, Fill(Drawable(true), Color(255, 255, 255)));
	var context = _FindEnum("context", _FindEnum("canvas", arguments, true).args, true).args[0];
	context.font = `${bold} ${italic} ${underline} ${size.y}pt ${font}`;
	var textPosition = EnumToVec2(Position(position.x, position.y+size.y));
	if(_FindEnum("drawable", stroke.args, true).args[0]) {
		context.strokeStyle = ColorEnumToString(_FindEnum("color", stroke.args));
		context.lineWidth = _FindEnum("lineWidth", stroke.args, true).args[0];
		context.strokeText(textString, textPosition.x, textPosition.y, size.x);
	}

	if(_FindEnum("drawable", fill.args, true).args[0]) {
		context.fillStyle = ColorEnumToString(_FindEnum("color", fill.args, true));
		context.fillText(textString, textPosition.x, textPosition.y, size.x);
	}
}

// All set out like this because just passing "arguments doesn't work".
export function Text() {
	return _ActionEnum("text",
		_FindEnum("rectangle", arguments, true),
		_FindEnum("font", arguments, false, Font()),
		_FindEnum("textString", arguments, true),
		_FindEnum("fontType", arguments, false, FontType("Arial"))
	);
}
