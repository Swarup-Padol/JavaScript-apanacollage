// One time pop-up
alert("Hello!");

// Input pop-up/ Question No. 1
// let number = prompt("Enter your Number:");

// if (number % 5 === 0) {
//   console.log("Yes!", number, "is a multiple of 5.");
// } else {
//   console.log("No!", number, "is not a multiple of 5.");
// }

// console.log("Thank You!");

// Question No. 2
let score = prompt("Enter your Score:");

if (score > 100 || score < 0) {
  console.log("Invalid Score!");
} else if (score >= 90) {
  console.log("Congrats! You secured A grade.");
} else if (score >= 70) {
  console.log("Congrats! You secured B grade.");
} else if (score >= 60) {
  console.log("You secured C grade.");
} else if (score >= 50) {
  console.log("You secured D grade.");
} else {
  console.log("I'm sorry to tell you, you have Fail.");
}
