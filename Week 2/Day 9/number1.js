// Nomor 1

const vegetables = ["tomato", "brocolli", "kale", "cabbage", "apple"];
vegetables.splice(vegetables.indexOf("appel"), 1);

let newVegetables = vegetables.map((vegetables) => {
  return vegetables + " is a healthy food, it's definitely worth to eat.";
});
console.log(newVegetables);
