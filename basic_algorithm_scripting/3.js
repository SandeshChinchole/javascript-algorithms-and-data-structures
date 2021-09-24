// Factorialize a Number

// solition 1: iteration

function factorialize(num) {
    let result = 1;
    for(let i = num; i > 0; i--){
        result *= i;
    }
    return result;
}
  
factorialize(5);


// solution 2: recursion

function factorialize(num){
    if(num === 0){
        return 1;
    }else{
        return num * factorialize(num - 1);
    }
}

factorialize(5);


// solution 3: ternary operator

function factorialize(num){
    return (num === 0) ? 1 : num * factorialize(num - 1);
}

factorialize(5);


// solution 4

function factorialize(num){
    for(var product = 1; num > 0; num --){
        product *= num;
    }
    return product;
}

factorialize(5);