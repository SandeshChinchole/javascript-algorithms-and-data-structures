// Finders Keepers

// solution 1

function findElement(arr, func) {
    let num = 0;
    for(let i = 0; i < arr.length; i++){
        num = arr[i];
        if(func(num)){
            return num;
        }
    }
    return undefined;
}
  
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


// solution 2: recusion

function findElement(arr, func) {
    return arr.length && !func(arr[0]) 
      ? findElement(arr.slice(1), func)
      : arr[0];
}
  
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


// solution 3: .find()

function findElement(arr, func) {
    return arr.find(func);
}
  
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));