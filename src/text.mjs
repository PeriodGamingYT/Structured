import { _ActionEnum, _FindEnum } from './core.mjs';

export function Bold(bold=false) {
	return _ActionEnum("bold", bold);
}

export function Italic(italic=false) {
	return _ActionEnum("italic", bold);
}

export function Underline(underline=false) {
	return _ActionEnum("underline", underline);
}

export function FontType(type="Arial") {
	return _ActionEnum("type", type);
}

export function Font() {
	return _ActionEnum("font",
		_FindEnum("italic", arguments, false, [false]),
		_FindEnum("bold", arguments, false, [false]),
		_FindEnum("underline", arguments, false, [false]),
		_FindEnum("type", arguments, false ["Arial"])
	);
}

export function TextString(string="") {
	return _ActionEnum("textString", string);
}

export function Text() {
	return _ActionEnum("text"
		_FindEnum("rectangle", arguments, true),
		_FindEnum("font", arguments, false, [Font()]),
		_FindEnum("textString", arguments, true)
	);
}
