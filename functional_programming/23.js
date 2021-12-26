// Use the some Method to Check that Any Elements in an Array Meet a Criteria

// solution 1

function checkPositive(arr) {
    return arr.some(function(value) {
      return value > 0;
    });
}

checkPositive([1, 2, 3, -4, 5]);

// solution 2

function checkPositive(arr) {
    return arr.some(val => val > 0);
}

checkPositive([1, 2, 3, -4, 5]);


