// Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
    if(startNum - endNum === 0){
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
}