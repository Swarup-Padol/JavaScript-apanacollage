/* Arithmetic Operators */
// Syntax --> Rules
let a = 5;
let b = 2;

console.log("a =", a, "& b = ", b);
console.log("a - b =", a - b);
console.log("a + b =", a + b);
console.log("a × b =", a * b);
console.log("a ÷ b =", a / b);

/* Modulus */
console.log("Remainder of a ÷ b =", a % b);

/* Power */
console.log("Answer to the a power b =", a ** b);

// Unary Operator

a = a + 1;
a = a - 1;
a++; // Post Increment
a--; // Post Decrement
++a; // Pre Increment
--a; // Pre Decrement

console.log("a = ", a);

/* Assignment Operator */

a += 4; // a = a + 4
console.log("a = ", a); // 9

a -= 4; // a = a - 4
console.log("a = ", a); // 1

a *= 4; // a = a × 4
console.log("a = ", a); // 20

a /= 4; // a = a ÷ 4
console.log("a = ", a); // 1.25

a %= 4; // Remainder of a ÷ 4
console.log("a = ", a); // 1

a **= 4; // a⁴
console.log("a = ", a); // 625

/* Comparison Operators */

let c = 5;
let d = 5;
let e = 5;
let f = 5;
let g = 5;
let h = 5;
let i = 5;
let j = "5";
let k = 2;
let l = 5;
let m = 3;
let n = 5;
let o = 6;
let p = 5;

console.log("a = b", a == b); // false
console.log("c = d", c == d); // true
console.log("e != f", e != f); // false
console.log("g != h", g != h); // false
console.log("i = j", i === j); // false
console.log("i = j", i !== j); // true

console.log("a < b", a < b); // true
console.log("k > l", k > l); // false
console.log("m <= n", m <= n); // true
console.log("o >= p", o >= p); // true

/* Logical Operartors */

let cond1 = o > p; // true
let cond2 = o === 5; // false

console.log("cond1 and cond2 is", cond1 && cond2); // false
console.log("cond1 and cond2 is", cond1 || cond2); // true
console.log("cond1 and cond2 is", !(o === 6)); // true --> false

/* Conditional Statements */

let age = 25;
let mode = "dark";
let colour;
let Number = 7;

// Only if
if (mode === "dark") {
  console.log("Dark Mode is Activated!");
  color = "black";
}
if (mode === "light") {
  console.log("Light Mode is Activated");
  color = "white";
}

// With If and Else
if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You can't vote.");
}

if (Number % 2 === 0) {
  console.log(Number + " is even Number");
} else {
  console.log(Number + " is odd Number");
}

// With If, Else, else if
if (age < 18) {
  console.log("You are a Children! 🧒");
} else if (age >= 60) {
  console.log("You are a Senior Citizen. 👴");
} else {
  console.log("You are a Adult. 😎");
}

/* Ternary Operator */

let result = age >= 18 ? "You can Vote!" : "You CAN'T Vote!"; // Simpler and Compact If-else

console.log(result);
