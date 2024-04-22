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
