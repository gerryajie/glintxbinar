const ThreeDimention = require("./threeDimension");

class Tube extends ThreeDimention {
  constructor(circleRadius, height) {
    super("Tube");

    this.circleRadius = circleRadius;
    this.height = height;
  }

  calculateArea() {
    super.calculateArea();
    return 2 * 3.14 * this.circleRadius * (this.circleRadius + this.height);
  }

  calculateVolume() {
    super.calculateVolume();
    return 3.14 * this.circleRadius * this.circleRadius * this.height;
  }
}

module.exports = Tube;
