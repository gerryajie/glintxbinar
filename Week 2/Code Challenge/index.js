const data = require("./lib/array.js");
const test = require("./lib/test.js");

/*
 * Code Here!
 * */

// Optional
function clean(data) {
  return data.filter((x) => x);
}

// Should return array
function sortAscending(data) {
  // Code Here
  
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j] > data[j + 1]) {
        const gerry = data[j];
        data[j] = data[j + 1];
        data[j + 1] = gerry;
      }
    }
  }
  return data.filter((x) => x);
}

// Should return array
function sortDecending(data) {
  // Code Here
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j] < data[j + 1]) {
        const gerry = data[j];
        data[j] = data[j + 1];
        data[j + 1] = gerry;
      }
    }
  }

  return data.filter((x) => x);
}

// DON'T CHANGE
test(sortAscending, sortDecending, data);
