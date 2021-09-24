// Return Largest Numbers in Arrays

function largestOfFour(arr) {
    let results = [];
    for(let i = 0; i < arr.length; i++){
        let largest = arr[i][0];
        for(let j = 1; j < arr[i].length; j++){
            if(arr[i][j] > largest){
                largest = arr[i][j];
            }
        }
        results.push(largest); // results[i] = largest;
    }
    return results;
}
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);