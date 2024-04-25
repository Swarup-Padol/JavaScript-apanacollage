alert("Hello!");

let marks = [97, 82, 75, 86, 67];

console.log(marks);
console.log(marks.length); // property

let heroes = [
  "Iron Man",
  "Thor",
  "Hulk",
  "Shaktiman",
  "Spider Man",
  "Caption America",
];

// By For Loop
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

// By For Of Loop
for (let hero of heroes) {
  console.log(hero);
}

let cities = ["Delhi", "Mumbai", "Kolkata", "Pune", "Hyderabad"];

for (let city of cities) {
  console.log(city.toUpperCase());
}
