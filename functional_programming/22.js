// Use the every Method to Check that Every Element in an Array Meets a Criteria

// solution 1

function checkPositive(arr) {
    return arr.every(function(value) {
      return value > 0;
    })  
}

checkPositive([1, 2, 3, -4, 5]);

// solution 2

function checkPositive(arr) {
    return arr.every(value => value > 0);
}

checkPositive([1, 2, 3, -4, 5]);


