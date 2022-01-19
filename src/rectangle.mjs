import { Position, Size } from './vector2.mjs';
import { _ActionEnum, _FindEnum } from './core.mjs';

export function Rectangle() {
    return _ActionEnum(
        "rectangle",
        _FindEnum("position", arguments, true),
        _FindEnum("size", arguments, true)
    );
}
