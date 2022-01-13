import * from 'src/canvas.js';
import * from 'src/vector2.js';

export function Game() {
	var args = Array.from(arguments);
	var args = [...args];
	var canvas = Canvas(
		_FindEnum("position", arguments),
		_FindEnum("size", arguments)
	);
}
