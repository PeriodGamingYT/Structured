import { Canvas } from './src/canvas.mjs';
import { _FindEnum } from './src/core.mjs';

export function Game() {
	var args = Array.from(arguments);
	var args = [...args];
	var canvas = Canvas(
		_FindEnum("position", arguments),
		_FindEnum("size", arguments)
	);
}
