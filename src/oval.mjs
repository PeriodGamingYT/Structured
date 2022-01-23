import { _ActionEnum, _FindEnum } from './core.mjs';

export function Raduis(isRaduis=true) {
	return _ActionEnum("isRaduis", isRaduis);
}

export function Oval() {
	return _ActionEnum(
		_FindEnum("rectangle", arguments, true),
		_FindEnum("isRaduis", argmuents, false, [Raduis(false)])
	);
}
