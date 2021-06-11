// Stand in Line

var numbers = [1, 2, 3];

function nextInLine(arr, item) {
    arr.push(item);
    var removed = arr.shift();
    return removed;
}

nextInLine(numbers, 4);

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));