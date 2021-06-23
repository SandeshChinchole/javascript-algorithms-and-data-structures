// Check For Mixed Grouping of Characters

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin D.?|Eleanor) Roosevelt/;
let result = myRegex.test(myString);