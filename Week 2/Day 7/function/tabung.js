const index = require("../index");
// const readline = require("readline");
const phi = 3.14;
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

function volume(r, t) {
  return phi * r * r * t;
}

function tabung() {
  index.rl.question("Masukan Nilai Jari jari(m): ", function (r) {
    index.rl.question("Masukan Nilai tinggi(m): ", (t) => {
      if (r > 0 && t > 0) {
        console.log(`\nJumlah Volume: ${volume(r, t)} m3`);
        index.rl.close();
      } else {
        console.log(`Input Tinggi Yang di Inputkan Salah\n`);
        input();
      }
    });
  });
}

// console.log(`Rumus Geometry Cari Volume tabung`);
// console.log(`=================================`);
module.exports = { tabung };
// Tugas Gerry Ajie Pratama
// Vlome Bola Geometry2.js
