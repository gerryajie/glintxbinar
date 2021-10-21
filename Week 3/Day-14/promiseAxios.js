const axios = require("axios");

let urlState = "https://fakestoreapi.com/products";
let urlCity = "https://fakestoreapi.com/products/1";
let urlContinent = "https://fakestoreapi.com/products?limit=5";
let data = {};

axios
  .get(urlState)
  .then((response) => {
    data = {
      posts: response.data.map((item) => {
        return { title: item.title, userId: item.userId };
      }),
    };

    return axios.get(urlCity);
  })
  .then((response) => {
    data = { ...data, users: response.data };

    return axios.get(urlContinent);
  })
  .then((response) => {
    data = { ...data, albums: response.data };
    console.log(data);
  })
  .catch((err) => {
    console.error(err.message);
  });
