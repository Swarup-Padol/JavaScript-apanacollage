alert("Hello!");
/* Loop's */
// Loops are used to execute a piece of code again & again.

// For Loop
for (let i = 1; i <= 5; i++) {
  console.log("i = ", i);
}

let sum = 0;
let count = 1;
let user_number = prompt("Enter the number:");

for (let count = 1; count <= user_number; count++) {
  sum = sum + count;
}

console.log("sum = ", sum);
console.log("loop has ended!");

// While loop
let j = 1;
while (j <= 5) {
  console.log("j = ", j);
  j++;
}

// Do-While loop
let k = 20;
do {
  console.log("k = ", k);
  k++;
} while (k <= 10);

// For-of loop
let str = "Swarup";
let size = 0;

for (let val of str) {
  // iterator -> Characters
  console.log("val = ", val);
  size++;
}

console.log("size of string = ", size);

// For-in loop
let student = {
  fullName: "Rahul Kumar",
  age: 20,
  cgpa: 7.5,
  isPass: true,
};

for (const key in student) {
  console.log("key = ", key, "value = ", student[key]);
}
