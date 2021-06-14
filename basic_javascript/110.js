// Use Recursion to Create a Countdown

function countdown(n){
    if(n < 1){
      return [];
    } else {
      var arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
}
