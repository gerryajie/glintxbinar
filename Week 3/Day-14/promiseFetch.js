const fetch = require("node-fetch");

let urlState = "https://fakestoreapi.com/products";
let urlCity = "https://fakestoreapi.com/products/1";
let urlContinent = "https://fakestoreapi.com/products?limit=5";

fetch(urlState)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return fetch(urlCity);
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return fetch(urlContinent);
  })

  .catch((err) => {
    console.error(err.message);
  });
