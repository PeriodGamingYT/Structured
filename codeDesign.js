import * from 'Structured.js';

var rectangleColor;

Game(
  Rectangle(
    Position(0), // Same as Position(0, 0)
    Size(15), // Same as Size(15, 15)
    Color(Color.red, Access(rectangleColor))
  )
);

OnNewFrame(() => {
  rectangleColor.add(Assign(), By(1)); // Same as rectangleColor = rectangleColor.add(rectangleColor, Color(1, 1, 1))
});
