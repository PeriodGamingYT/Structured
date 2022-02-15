import { _ActionEnum, _FindEnum } from './core.mjs';
import { EnumToVec2 } from './vector2.mjs';

export function CollisionCheck(shape1, shape2) {
  var position1 = EnumToVec2(_FindEnum("position", shape1.args, true));
  var size1 = EnumToVec2(_FindEnum("size", shape1.args, true));
  var position2 = EnumToVec2(_FindEnum("position", shape2.args, true));
  var size2 = EnumToVec2(_FindEnum("size", shape2.args, true));

  return position1.x <= position2.x + size2.x &&
    position2.x <= position1.x + size1.x &&
    position1.y <= position2.y + size2.y &&
    position2.y <= position1.y + size1.y;
}