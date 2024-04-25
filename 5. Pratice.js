alert("Hello!");

// Question 1 A

let string = prompt("Enter your first name:-");

function countVowel(String) {
  let count = 0;
  for (const char of String) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}

console.log(string);
countVowel(string);

// Question 1 B

let String = prompt("Enter your last name:-");

let countVowelSecond = (String) => {
  let count = 0;
  for (const char of String) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
};

console.log(String);
countVowelSecond(String);

// Question 2

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  let square = number * number;
  console.log(square);
});

// Question 3

const marks = [87, 93, 64, 99, 86];

const toppersMarks = marks.filter((val) => {
  return val > 90;
});

console.log(toppersMarks);

// Question 4

let n = prompt("Enter a number:");

const arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}

console.log(arr);

const sumOfArray = arr.reduce((result, current) => {
  return result + current;
});

const factorial = arr.reduce((result, current) => {
  return result * current;
});

console.log(`Sum = ${sumOfArray}`);
console.log(`Factorial = ${factorial}`);
