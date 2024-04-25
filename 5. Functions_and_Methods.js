alert("Hello!");

function myFuncation() {
  console.log("Welcome!");
  console.log("I am learning JavaScript :)");
}

function logAMessage(msg, emoji) {
  // Parameter  -->  Input
  console.log(msg, emoji);
}

function sum(a, b) {
  console.log(a + b);
}

function addition(x, y) {
  s = x + y;
  return s;
}

// Arrow Function

const multiplication = (a, b) => {
  return a * b;
};

myFuncation(); // Invoke of a function.
logAMessage("I love programming.", "💯"); // Argument
sum(45, 15);
let val = addition(5, 2);
console.log(val);
let product = multiplication(7, 2);
console.log(product);

// For-Each Loop

let array = [1, 2, 3, 4, 5];
let arr = [5, 6, 7, 8, 9];
let cities = ["Delhi", "Mumbai", "Pune", "Nagpur", "Sambhaji Nagar"];
let marks = [95, 79.5, 99.5, 84, 87];

array.forEach(function printVal(val) {
  console.log(val);
});

arr.forEach((val) => {
  val++;
  console.log(val);
});

cities.forEach((city) => {
  console.log(`I have travelled ${city}.`);
});

marks.forEach((subjectMarks, idx, marks) => {
  console.log(subjectMarks, idx, marks);
});

// Map Method

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.map((val) => {
  console.log(val);
});

let newArray = numbers.map((val) => {
  let square = val * val;
  return square;
});

console.log(newArray);

// Filter Method

let evenNumbers = numbers.filter((val) => {
  return val % 2 === 0;
});

let oddNumber = numbers.filter((val) => {
  return val % 2 !== 0;
});

console.log(numbers);
console.log(oddNumber);
console.log(evenNumbers);

// Reduce Method

const output = numbers.reduce((result, current) => {
  return result + current;
});

console.log(output); // 10

const largestNumber = numbers.reduce((result, current) => {
  return result > current ? result : current;
});

console.log(largestNumber);
