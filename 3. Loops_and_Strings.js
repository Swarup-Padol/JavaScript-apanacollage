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

/*Strings*/
let firstName = "Swarup";
let lastName = "Padol";

console.log(firstName[4]); // u
console.log(firstName[2]); // d

// Template Literal
let sentence = `This a Templete Litereal. ${1 + 2 + 3}`;

console.log(sentence);
console.log(typeof sentence);

// Template Literal example
let obj = {
  item: "pen",
  price: 10,
};

console.log(`The cost of the ${obj.item} is ₹${obj.price}.`); // String Interpolation
console.log("The cost of", obj.item, "is ₹", obj.price, ".");

// Escape Characters

let esChar = console.log(
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iste officiis\n\tfugiat corrupti autem blanditiis totam\nsapiente repellat ipsa sunt, aspernatur vero aliquam earum impedit\n\ttemporibus qui, nihil modi nemo inventore culpa\naperiam? Debitis sit nostrum sunt commodi recusandae\n\tdeserunt sequi qui voluptas exercitationem quas. Ex eius\nvoluptatibus nostrum non`
);

//String Method's
let strMethod = "       Chandrashekhar    ";
let firstStrMethod = strMethod.toUpperCase();
let secondStrMethod = firstStrMethod.toLowerCase();
let thirdStrMethod = secondStrMethod.trim();
let fourthStrMethod = thirdStrMethod.slice(2);

let str_Method = "Hello!";
const username = prompt("Enter your Name:");

let concatFunc = str_Method.concat(username); // Hello!Swarup
let replaceFunc = str_Method.replace("lo", "p"); // Help!
let charAtFunc = str_Method.charAt(3); // l

console.log(firstStrMethod);
console.log(secondStrMethod);
console.log(thirdStrMethod);
console.log(fourthStrMethod);
console.log(concatFunc);
console.log(replaceFunc);
console.log(charAtFunc);
