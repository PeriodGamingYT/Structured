import { _FindEnum, _ActionEnum } from './src/core.mjs';
import { Canvas } from './src/canvas.mjs';

export function Game() {
	var args = Array.from(arguments);
	var args = [...args];
	var canvas = Canvas(
		_FindEnum("position", arguments, false),
		_FindEnum("size", arguments, false)
	);

	return _ActionEnum("game", canvas);
}
