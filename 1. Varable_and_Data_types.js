// First Log
console.log("Hello User!");

// Varables

firstName = "Swarup";
lastName = "Padol";
age = 12;
hieght = 5.6;
favorateColour = null;
phoneNo = undefined;
isVerified = true;

// Dynamic Typing
firstName = "Swaroop";

console.log(firstName);

// Equal to '=' is assingment oprator in JS

// Defining varable var, let, const

var age = 24;
var age = 42;
var age = 86;

let fullName = "Swarup Padol";

const PIE = 3.14;

// 'var' can be redefined and it's data can be updated.
// 'let' cann't be redefined and it's data can be updated.
// 'const' cann't be redefined and cann't update the data.

// Object's

const student = {
  fullName: "Swarup Chandrashekhar Padol",
  age: 12,
  percentage: 87.62,
  isPass: true,
};

student["age"] = student["age"] + 1;
student["fullName"] = "Rahul Sharma";

console.log(student);
console.log(student.age);
console.log(student.fullName);
