// Slice and Splice

// solution 1

function frankenSplice(arr1, arr2, n) {
    newArr2 = arr2.slice(0, arr2.length);
    for(let i = 0; i < arr1.length; i++){
        newArr2.splice(n, 0, arr1[i]);
        n++;
    }
   return newArr2;
}
  
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// solution 2

function frankenSplice(arr1, arr2, n){
    let newArr = [...arr2];
    newArr.splice(n, 0, ...arr1);
    return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));