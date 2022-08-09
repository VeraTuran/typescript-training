import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(10, 15, 3);
let myRectangle = new Rectangle(0, 0, 3, 7);

// declare an array of shapes, that is empty initially
let theShapes: Shape[] = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes) {
  console.log(tempShape.getInfo());
  console.log(tempShape.calculateArea());
  console.log();
}
