function filterArray(numbers, value) {
  let filteredNumbers = [];

  for (const i = 0; i < numbers.length; i++) {
      if (numbers[i] > value) {
          filteredNumbers.push(numbers[i]);
      }
  }

  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

let randomArray = [];
for (const j = 0; j < 5; j++) {
  randomArray.push(Math.floor(Math.random() * 50));
}
let randomValue = Math.floor(Math.random() * 50);

console.log("Випадковий масив: " + randomArray);
console.log("Випадкове число: " + randomValue);
console.log("Результат: " + filterArray(randomArray, randomValue));