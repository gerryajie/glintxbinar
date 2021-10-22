const ThreeDimention = require("./threeDimension");

class Bola extends ThreeDimention {
  constructor(circleRadius) {
    super("Bola");

    this.circleRadius = circleRadius;
  }

  calculateArea() {
    super.calculateArea();
    return 2 * 3.14 * this.circleRadius * this.circleRadius * 4;
  }

  calculateVolume() {
    super.calculateVolume();
    return (
      (3.14 * this.circleRadius * this.circleRadius * this.circleRadius * 4) / 3
    );
  }
}

module.exports = Bola;
