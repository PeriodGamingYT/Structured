import { CanvasPath } from "./canvas.mjs";
import { DrawText } from './text.mjs';
import { DrawImage } from './image.mjs';
import { _ActionEnum, _FindEnum, Nothing } from './core.mjs';

export function CanvasDraw() { // Draws shapes, whatever.
  var canvas = _FindEnum("canvas", arguments, true);
  var objectsWithPath = [
    "rectangle", "oval"
  ];

  for(var i of objectsWithPath) {
    var object = _FindEnum(i, arguments, false, Nothing());
    if(!object.found) {
      continue;
    } else {
      CanvasPath(
        canvas,
        _FindEnum("path", object.args, true),
        _FindEnum("stroke", arguments, false, Nothing()),
        _FindEnum("path", arguments, false, Nothing())
      );

      return;
    }
  }

  var objectsWithMethod = [
    "image", DrawImage,
    "text", DrawText
  ];

  for(var i = 0; i < objectsWithMethod.length; i += 2) {
    var object = _FindEnum(objectsWithMethod[i], arguments, false, Nothing());
    if(!object.found) {
      continue;
    } else {
      objectsWithMethod[i+1](canvas, object);
      return;
    }
  }
}

export function Start(method=() => {}) {
  return _ActionEnum("start",
    method
  );
}

export function Update(method=() => {}) {
  return _ActionEnum("update",
    method
  );
}

export function Exit(method=() => {}) {
  return _ActionEnum("exit",
    method
  );
}

export function Object(canasObject) {
  return _ActionEnum(
    canvasObject,
    _FindEnum("position", arguments, false, Position(0, 0)),
    _FindEnum("start", arguments, false, Start()),
    _FindEnum("update", arguments, false, Update()),
    _FindEnum("exit", arguments, false, Exit()),
  );
}
