function createArrayOfNumbers(min, max) {
    let numbers = [];

    for (var i = min; i <= max; i++) {
        numbers.push(i);
    }

    return numbers;
}

console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));


let randomMin = Math.floor(Math.random() * 10); // Випадкове число від 0 до 9
let randomMax = randomMin + Math.floor(Math.random() * 10); // Випадкове число від randomMin до randomMin + 9
console.log("Випадковий масив: " + createArrayOfNumbers(randomMin, randomMax));