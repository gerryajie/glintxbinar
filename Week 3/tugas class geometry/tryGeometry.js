const {
  Rectangle,
  Square,
  Triangle,
  Tube,
  Bola,
  Cube,
  Limas,
} = require("./geometry/index");

// Create Object
let rectangleOne = new Rectangle(10, 11);
let squareOne = new Square(12);
let triangleOne = new Triangle(13, 14);
let tube = new Tube(10, 12);
let bola = new Bola(10, 11);
let cube = new Cube(7);
let limas = new Limas(6, 4, 5, 2);

// Calculate Area
let a = rectangleOne.calculateArea();
let b = squareOne.calculateArea();
let c = triangleOne.calculateArea();
let d = a + b + c;
console.log(d);

// Calculate Circumference
let e = rectangleOne.calculateCircumference();
let f = squareOne.calculateCircumference();
let g = triangleOne.calculateCircumference();
let h = e + f + g;
console.log(h);

// calculate area
let z = tube.calculateArea();
let y = bola.calculateArea();
let w = cube.calculateArea();
let l = limas.calculateArea();
let r = z + y + w + l;

console.log(y);
console.log(w);
console.log(l);
console.log(r);

// volume Area
let tubeV = tube.calculateVolume();
let bolaV = bola.calculateVolume();
let cubeV = cube.calculateVolume();
let limasV = limas.calculateVolume();
let volume3 = tubeV + bolaV + cubeV + limasV;
console.log(tubeV);
console.log(bolaV);
console.log(cubeV);
console.log(limasV);
console.log(volume3);
