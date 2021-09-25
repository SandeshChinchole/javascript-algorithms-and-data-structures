// Where do I Belong

// solution 1

function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= num){
            return i;
        }
    }
    return arr.length;
}
  
console.log(getIndexToIns([40, 60], 50));


// solution 2

function getIndexToIns(arr, num) {
    return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}
  
console.log(getIndexToIns([40, 60], 50));


// solution 3

function getIndexToIns(arr, num) {
    let index = arr
    .sort((prev, next) => prev - next)
    .findIndex((currentNum) => num <= currentNum);
    return index === -1 ? arr.length : index;
}
  
console.log(getIndexToIns([40, 60], 50));