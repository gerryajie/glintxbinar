const EventEmitter = require("events");
const readline = require("readline");
const { input } = require("../Day 9/number2");

const my = new EventEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Selamat Datang Di Traker Covid-19");
console.log("=================================");

my.on("login:failed", function (email) {
  console.log(`${email} Password Dan email salah!`);
  rl.close();
});

my.on("login:success", function (email) {
  console.log(`${email} Anda berhasil Login!`);
  console.log(input());
  rl.close();
});

function login(email, password) {
  const passwordStoredInDatabase = "123456";

  if (password !== passwordStoredInDatabase) {
    my.emit("login:failed", email);
  } else {
    my.emit("login:success", email);
  }
}

rl.question("Masukan email Anda: ", function (email) {
  rl.question("Password: ", function (password) {
    login(email, password);
  });
});
