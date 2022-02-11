import { _ActionEnum, _FindEnum } from './core.mjs';
import { EnumToVec2, Vec2 } from './vector2.mjs';
import { FrameTime } from './time.mjs';

export function Velocity() {
  return _ActionEnum("velocity", Vec2(...arguments));
}

export function Move(object) {
  var position = EnumToVec2(_FindEnum("position", object.args, true));
  var velocity = EnumToVec2(_FindEnum("velocity", arguments, true));
  position = position.add(velocity.mul(new Vector2(FrameTime, FrameTime)))); // Will change in Structured in 2.0.
  object.args[_FindEnumIndex("position", object.args, true)] = position;
}
