let people = [
  {
    name: "John",
    status: "Positive",
  },
  {
    name: "Mike",
    status: "Suspect",
  },
  {
    name: "Sule",
    status: "Positive",
  },
  {
    name: "Nana",
    status: "Negative",
  },
  {
    name: "Doni",
    status: "Positive",
  },
  {
    name: "Mika",
    status: "Suspect",
  },
  {
    name: "Rasti",
    status: "Negative",
  },
  {
    name: "Kamil",
    status: "Suspect",
  },
  {
    name: "Widodo",
    status: "Positive",
  },
  {
    name: "Septa",
    status: "Negative",
  },
];
let positivePeople = people
  .filter((person) => person.status === "Positive")
  .map((pos) => pos.name);
let suspectPeople = people
  .filter((person) => person.status === "Suspect")
  .map((sus) => sus.name);

let negativePeople = people
  .filter((person) => person.status === "Negative")
  .map((neg) => neg.name);

let pilihan = 2;
switch (pilihan) {
  case 1:
    console.log(positivePeople + " Is Positive");
    break;
  case 2:
    console.log(suspectPeople + " Is Suspect");
    break;
  default:
    console.log(negativePeople + " Is Negative");
}
