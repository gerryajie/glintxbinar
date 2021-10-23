const axios = require("axios");

let urlUniv = "hhttp://universities.hipolabs.com/search?country=United+Kingdom";
let urlTodos = "https://fakestoreapi.com/products";
let urlCoin = "https://fakestoreapi.com/products/category/jewelery";
let data = {};

axios
  .get(urlUniv)
  .then((response) => {
    data = {
      posts: response.data.map((item) => {
        return { name: item.name, country: item.country };
      }),
    };

    return axios.get(urlTodos);
  })
  .then((response) => {
    data = { ...data, title: response.data };

    return axios.get(urlCoin);
  })
  .then((response) => {
    data = { ...data, name: response.data };
    console.log(data);
  })
  .catch((err) => {
    console.error(err.message);
  });
