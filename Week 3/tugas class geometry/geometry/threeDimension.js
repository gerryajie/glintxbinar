const Geometry = require("./geometry");

class ThreeDimention extends Geometry {
  constructor(name) {
    super(name, "Three Dimension");
    // new Geometry('Square', 'Two Dimention')

    // Make abstract
    if (this.constructor === ThreeDimention) {
      throw new Error("Cannot instantiate from Abstract Class"); // Because it's abstract
    }
  }

  // #calculateArea() { // private
  calculateArea() {
    console.log(`${this.name} is calculating area!`);
  }

  // Call the private funtion
  // calArea() {
  //   this.#calculateArea();
  // }

  calculateVolume() {
    console.log(`${this.name} is calculating Volume area!`);
  }
}

module.exports = ThreeDimention;
