export import * from 'src/canvas.js';
export import * from 'src/vector2.js';
export import * from 'src/input.js';
export import * from 'src/core.js';

export function Game() {
	var args = Array.from(arguments);
	var args = [...args];
	var canvas = Canvas(
		_FindEnum("position", arguments),
		_FindEnum("size", arguments)
	);
}
