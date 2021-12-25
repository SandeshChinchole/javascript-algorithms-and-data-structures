// Pass Arguments to Avoid External Dependence in a Function

let fixedValue = 4;

function incrementer(arg) {
  return arg + 1;
}

console.log(incrementer(fixedValue));