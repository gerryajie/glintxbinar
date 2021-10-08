// function Balok argumen

function balokArgumen(p, l, t) {
  console.log(p * l * t);
}

balokArgumen(10, 20, 2);
balokArgumen(3, 2, 4);

// function return

function balokReturn(w, l, h) {
  console.log("return: " + w * l * h);
  return w * l * h;
}

let balokOne = balokReturn(10, 11, 12);
let balokTwo = balokReturn(11, 12, 13);
console.log("Balok 1 + Balok 2 :" + (balokOne + balokTwo));

console.log(
  "------------------------------------------------------------------------------------"
);

// function argumen bola
const phi = 3.14;
function bolaArgumen(r) {
  console.log((4 / 3) * phi * r * r * r);
}
bolaArgumen(4);

// function return Bola
function bolaReturn(r) {
  console.log("return: " + (4 / 3) * r * r * r);
  return (4 / 3) * r * r * r;
}

let bolaOne = bolaReturn(10);
let bolaTwo = bolaReturn(11);
console.log("Bola 1 + Bola 2 :" + (bolaOne + bolaTwo));
