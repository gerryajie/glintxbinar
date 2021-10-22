const removeFirstAndLastCharacter = (input) => {
  // the process
  let potong = "";
  for (let i = 0; i < input.length; i++) {
    if (i == 0 || i == input.length - 1) continue;
    potong += input[i];
  }
  return potong;
};

const reversedString = (input) => {
  // the process
  let newString = "";
  for (let i = input.length - 1; i >= 0; i--) {
    newString += input[i];
  }
  return newString;
  // the result
};

console.log(removeFirstAndLastCharacter("malam")); // expected output : ala
console.log(reversedString("siang")); // expected output : gnais
