// Truncate a String

// solution 1

function truncateString(str, num) {
    let truncated = "";
    if(str.length > num){
        truncated = str.slice(0, num);
        return truncated + "...";
    }else{
        return str;
    }
  }
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


// solution 2

function truncateString(str, num) {
    if(str.length > num){
        return str.slice(0, num) + "...";
    }else{
        return str;
    }
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


// solution 3: ternary operator

function truncateString(str, num){
    return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
