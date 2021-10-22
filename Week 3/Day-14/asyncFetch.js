const fetch = require("node-fetch");

let urlProduk =
  "http://universities.hipolabs.com/search?country=United+Kingdom";
let urlProduk1 = "https://fakestoreapi.com/products";
let urlLimit = "https://api.coinpaprika.com/v1/coins/btc-bitcoin";
let data = {};

const asyncFetch = async () => {
  try {
    let responseProduk = await fetch(urlProduk); // Wait this for finish
    let responseProduk1 = await fetch(urlProduk1);
    let responseLimit = await fetch(urlLimit);

    // Promise All
    let response = await Promise.all([
      responseProduk.json(),
      responseProduk1.json(),
      responseLimit.json(),
    ]);

    // data = {
    //   produk: await responseProduk.json(),
    //   produk1: await responseProduk1.json(),
    //   limit: await responseLimit.json(),
    // };

    data = {
      produk: response[0],
      produk1: response[1],
      limit: response[2],
    };

    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};

asyncFetch();
