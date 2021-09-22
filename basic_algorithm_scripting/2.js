// Reverse a String

//solution 1

function reverseString(str) {
    let newStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    str = newStr;
    return str;
  }
  
reverseString("hello");

// solution 2

function reverseString(str){
    str = str.split("");
    str = str.reverse();
    str = str.join("");
    return str;
}
reverseString("hello");