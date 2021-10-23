const fetch = require("node-fetch");

let urlState = "http://universities.hipolabs.com/search?country=United+Kingdom";
let urlCity = "https://fakestoreapi.com/products";
let urlContinent = "https://fakestoreapi.com/products/category/jewelery";
let data = {};

fetch(urlState)
  .then((response) => response.json())
  .then((data) => {
    data = { response: data };
    return fetch(urlCity);
  })

  .then((urlState) => urlState.json())
  .then((stateJson) => {
    data = { ...data, state: stateJson };
    return fetch(urlContinent);
  })
  .then((urlContinent) => urlContinent.json())
  .then((continentJson) => {
    data = { ...data, continent: continentJson };
    console.log(data);
  })

  .catch((err) => {
    console.error(err.message);
  });
