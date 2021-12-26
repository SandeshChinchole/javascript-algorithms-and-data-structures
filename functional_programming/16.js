// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

/* 

The function should return a new array containing the squares of only the 
positive integers (decimal numbers are not integers) when an array of real numbers 
is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

*/

const squareList = arr => {
    return arr
    .filter(num => num > 0 && num % parseInt(num) === 0)
    .map(num => Math.pow(num, 2));
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
