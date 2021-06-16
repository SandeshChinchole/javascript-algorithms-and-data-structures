// Compare Scopes of the var and let Keywords

function checkScope() {
    let i = "function scope";
    if(true) {
        let i = "block scope";
        console.log("block scope i is: ", i);
    }
    console.log("function scope i is: ", i);
    return i;
}

checkScope();