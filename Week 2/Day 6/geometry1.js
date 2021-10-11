const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function volume(length, width, height) {
  return length * width * height;
}

function inputLength() {
  rl.question(`Masukan Nilai Panjang(m): `, (length) => {
    if (!isNaN(length)) {
      inputWidth(length);
    } else {
      console.log(`Input Panjang Yang di Inputkan Salah\n`);
      inputLength();
    }
  });
}

function inputWidth(length) {
  rl.question(`Masukan Nilai Lebar(m): `, (width) => {
    if (!isNaN(width)) {
      inputHeight(length, width);
    } else {
      console.log(`Input Lebar Yang di Inputkan Salah\n`);
      inputWidth(length);
    }
  });
}

function inputHeight(length, width) {
  rl.question(`Masukan Nilai Tinggi(m): `, (height) => {
    if (!isNaN(height)) {
      console.log(`\n Jumlah Volume: ${volume(length, width, height)} m3`);
      rl.close();
    } else {
      console.log(`Input Tinggi Yang di Inputkan Salah\n`);
      inputHeight(length, width);
    }
  });
}

console.log(`Rumus Geometry Cari Volume Balok`);
console.log(`================================`);
inputLength();
// Tugas Gerry Ajie Pratama
// Vlome Balok Geometry1.js
