const axios = require("axios");

let urlUniv = "http://universities.hipolabs.com/search?country=United+Kingdom";
let urlProduk = "https://fakestoreapi.com/products";
let urlJewel = "https://fakestoreapi.com/products/category/jewelery";
let data = {};

const fetchApi = async () => {
  try {
    // let responsePosts = await axios.get(urlPosts); // Wait this for finish
    // let responseUsers = await axios.get(urlUsers);
    // let responseAlbums = await axios.get(urlAlbums);
    let response = await Promise.all([
      axios.get(urlUniv),
      axios.get(urlProduk),
      axios.get(urlJewel),
    ]);

    // data = {
    //   posts: responsePosts.data.map((item) => {
    //     return { title: item.title, userId: item.userId };
    //   }),
    //   users: responseUsers.data,
    //   albums: responseAlbums.data,
    // };

    data = {
      univ: response[0].data,
      produk: response[1].data,
      jewel: response[2].data,
    };

    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};

fetchApi();
