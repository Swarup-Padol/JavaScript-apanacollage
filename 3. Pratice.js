// Question No. 1
for (let question1 = 0; question1 <= 100; question1++) {
  if (question1 % 2 === 0) {
    console.log("Even Number = ", question1);
  }
  if (question1 % 2 !== 0) {
    console.log("Odd Number = ", question1);
  }
}

// Question No. 2

let gameNum = 41;
let userNum = prompt("Guess the Number");

while (gameNum != userNum) {
  userNum = prompt("You entered incorrect number. Guess the number again.");
}

console.log("Congratulations! You won the game.");
