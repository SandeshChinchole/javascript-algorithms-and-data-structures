// Compare Scopes of the var and let Keywords

function scope() {
    let i = "function scope";
    if(true) {
        let i = "block scope";
        console.log("block scope i is: ", i);
    }
    console.log("function scope i is: ", i);
    return i;
}