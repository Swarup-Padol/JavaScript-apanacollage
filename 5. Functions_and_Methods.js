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
