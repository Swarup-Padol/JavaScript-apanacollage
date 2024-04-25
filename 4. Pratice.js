// Question 1

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let val of marks) {
  sum = sum + val;
}

let average = sum / marks.length;
console.log(sum);
console.log(`Average marks of class is ${average}`);

// Question 2

let prices = [250, 645, 300, 900, 50];
let items = [250, 645, 300, 900, 50];

// My Technique
prices[0] = prices[0] - prices[0] / 10;
prices[1] = prices[1] - prices[1] / 10;
prices[2] = prices[2] - prices[2] / 10;
prices[3] = prices[3] - prices[3] / 10;
prices[4] = prices[4] - prices[4] / 10;

// Didi's Technique
for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] -= offer;
}

console.log(prices);
console.log(items);
