const axios = require("axios");

let urlPosts = "http://universities.hipolabs.com/search?country=United+Kingdom";
let urlUsers = "https://fakestoreapi.com/products";
let urlAlbums = "https://fakestoreapi.com/products/category/jewelery";
let data = {};

const fetchApi = async () => {
  try {
    // let responsePosts = await axios.get(urlPosts); // Wait this for finish
    // let responseUsers = await axios.get(urlUsers);
    // let responseAlbums = await axios.get(urlAlbums);
    let response = await Promise.all([
      axios.get(urlPosts),
      axios.get(urlUsers),
      axios.get(urlAlbums),
    ]);

    // data = {
    //   posts: responsePosts.data.map((item) => {
    //     return { title: item.title, userId: item.userId };
    //   }),
    //   users: responseUsers.data,
    //   albums: responseAlbums.data,
    // };

    data = {
      posts: response[0].data,
      users: response[1].data,
      albums: response[2].data,
    };

    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};

fetchApi();
