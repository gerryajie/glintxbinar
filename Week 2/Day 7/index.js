const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const balok = require("./function/balok");
const bola = require("./function/bola");
const tabung = require("./function/tabung");

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

function menu() {
  console.log(`Selamat Datang di Menu kalkulator Volume Sederhana`);
  console.log(`==================================================`);
  console.log(`1. Balok `);
  console.log(`2. Bola`);
  console.log(`3. Tabung`);
  console.log(`4. Exit`);
  console.log(`==================================================`);
  rl.question(`Masukan Pilihan: `, (option) => {
    if (!isNaN(option)) {
      if (option == 1) {
        balok.input();
      } else if (option == 2) {
        bola.jari();
      } else if (option == 3) {
        tabung.tabung();
      } else if (option == 4) {
        rl.close();
      } else {
        console.log(`Masukan Pilihan  1 sampai 4!\n`);
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
