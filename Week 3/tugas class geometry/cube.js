const ThreeDimention = require("./threeDimension");

class Cube extends ThreeDimention {
  constructor(Side) {
    super("Cube");

    this.Side = Side;
  }

  calculateArea() {
    super.calculateArea();
    return this.Side * this.Side;
  }

  calculateVolume() {
    super.calculateVolume();
    return this.Side * this.Side * this.Side;
  }
}

module.exports = Cube;
