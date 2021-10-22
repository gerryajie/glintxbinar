const ThreeDimention = require("./threeDimension");

class Limas extends ThreeDimention {
  constructor(pjg, lbr, tng, mrg) {
    super("Limas");

    this.pjg = pjg;
    this.lbr = lbr;
    this.tng = tng;
    this.mrg = mrg;
  }

  calculateArea() {
    super.calculateArea();
    return (
      this.pjg * this.lbr + this.pjg * this.mrg * 2 + this.lbr * this.mrg * 2
    );
  }

  calculateVolume() {
    super.calculateVolume();
    return (1 / 2) * this.length * this.width * this.height;
  }
}

module.exports = Limas;
