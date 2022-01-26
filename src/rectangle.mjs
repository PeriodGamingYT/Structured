import { _ActionEnum, _FindEnum } from './core.mjs';
import { Path } from './canvas.mjs';
import { EnumToVec2 } from './vector2.mjs';

export function Rectangle() {
    return _ActionEnum(
        "rectangle",
        _FindEnum("position", arguments, true),
        _FindEnum("size", arguments, true)
    );
}

export function RectanglePath() {
    var rectangle = _FindEnum("rectangle", arguments, true);
    var rectanglePath = new Path2D();
    var startPoint = EnumToVec2(_FindEnum("position", rectangle.args, true));
    var endPoint = EnumToVec2(_FindEnum("size", rectangle.args, true));
    rectanglePath.moveTo(startPoint.x, startPoint.y);
    rectanglePath.lineTo(endPoint.x, startPoint.y);
    rectanglePath.lineTo(endPoint.x, endPoint.y);
    rectanglePath.lineTo(startPoint.x, endPoint.y);
    rectanglePath.lineTo(startPoint.x, startPoint.y);
    return Path(rectanglePath);
}