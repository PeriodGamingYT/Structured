import { _FindEnum, _ActionEnum } from './src/core.mjs';
import { Canvas, CanvasPath } from './src/canvas.mjs';
import { Text, TextString, Bold, DrawText } from './src/text.mjs';
import { Rectangle } from './src/rectangle.mjs';
import { Position, Size } from './src/vector2.mjs';

export function Game() {
	var args = Array.from(arguments);
	var args = [...args];
	var canvas = Canvas(
		_FindEnum("position", arguments, false),
		_FindEnum("size", arguments, false)
	);

	DrawText(
		canvas,
		Text(
			TextString("Hello, World!"),
			Bold(true),
			Rectangle(
				Position(50, 50),
				Size(50, 50)
			)
		)
	);

	return _ActionEnum("game", canvas);
}
