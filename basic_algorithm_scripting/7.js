// Repeat a String

// solution 1

function repeatStringNumTimes(str, num) {
    let newStr = "";
    if(num <= 0){
      return str = "";
    }else{
      for(let i = 0; i < num; i++){
          newStr += str;
      }
    }
    return newStr;
  }
  
console.log(repeatStringNumTimes("*", -8));


// solution 2: using repeat()

function repeatStringNumTimes(str, num){
    if(num <= 0){
        return "";
    }else{
        return str.repeat(num);
    }
}

console.log(repeatStringNumTimes("abc", 3));


// solution 3: ternary operator + repeat()

function repeatStringNumTimes(str, num){
    return num <= 0 ? "" : str.repeat(num);
}

console.log(repeatStringNumTimes("abc", 3));


// solution 4: recursion

function repeatStringNumTimes(str, num) {
    if(num <= 0){
      return "";
    }else{
      return str + repeatStringNumTimes(str, num - 1);
    }
  }
  
console.log(repeatStringNumTimes("abc", 3));


// solution 5: recursion + ternary operator

function repeatStringNumTimes(str, num){
    return num < 1 ? "" : str + repeatStringNumTimes(str, num - 1);
}

console.log(repeatStringNumTimes("abc", 3));