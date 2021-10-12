const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const balok = require("./function/balok");
const bola = require("./function/bola");

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

function menu() {
  console.log(`Selamat Datang di Menu kalkulator Volume Sederhana`);
  console.log(`==================================================`);
  console.log(`1. Balok `);
  console.log(`2. Bola`);
  console.log(`3. Exit`);
  rl.question(`Masukan Pilihan: `, (option) => {
    if (!isNaN(option)) {
      if (option == 1) {
        balok.input();
      } else if (option == 2) {
        bola.jari();
      } else if (option == 3) {
        rl.close();
      } else {
        console.log(`Masukan Pilihan  1 sampai 3!\n`);
        menu();
      }
    } else {
      console.log(`Input dengan Angka!\n`);
      menu();
    }
  });
}

menu();

module.exports.rl = rl;
module.exports.isEmptyOrSpaces = isEmptyOrSpaces;
