const index = require("../index");
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

function volume(length, width, height) {
  return length * width * height;
}

function input() {
  index.rl.question("Masukan Nilai Panjang(m): ", function (length) {
    index.rl.question("Masukan Nilai Lebar(m): ", (width) => {
      index.rl.question("Masukan Nilai Tinggi(m): ", (height) => {
        if (length > 0 && width > 0 && height > 0) {
          console.log(`\nJumlah Volume: ${volume(length, width, height)} m3`);
          index.rl.close();
        } else {
          console.log(`Input Tinggi Yang di Inputkan Salah\n`);
          input();
        }
      });
    });
  });
}

console.log(`Rumus Geometry Cari Volume Balok`);
console.log(`================================`);

// Tugas Gerry Ajie Pratama
// Vlome Balok Geometry1.js
module.exports = { input };
