const readline = require("readline");
const phi = 3.14;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function volume(r) {
  return (4 / 3) * phi * r * r * r;
}

function jari(r) {
  rl.question(`Masukan Nilai jari -jari(m): `, (r) => {
    if (!isNaN(r)) {
      console.log(`\n Jumlah Volume: ${volume(r)} m3`);
      rl.close();
    } else {
      console.log(`Input Jari -jari Yang di Inputkan Salah\n`);
      inputHeight(r);
    }
  });
}

console.log(`Rumus Geometry Cari Volume Bola`);
console.log(`===============================`);
jari();
// Tugas Gerry Ajie Pratama
// Vlome Bola Geometry2.js
