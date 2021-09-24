// Confirm the Ending

// solution 1

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
  
console.log(confirmEnding("Bastian", "n"));

// solution 2

function confirmEnding(str, target) {
    return str.slice(-target.length) === target;
}
  
console.log(confirmEnding("Bastian", "n"));

// solution 3: regular expression

function confirmEnding(str, target) {
    let regex = new RegExp(target + "$", "i");
    return regex.test(str);
}
  
console.log(confirmEnding("Bastian", "n"));