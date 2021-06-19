// Set Default Parameters for Your Functions

const increment = (number, value = 1) => number + value;

console.log(increment(2, 2));
console.log(increment(2));