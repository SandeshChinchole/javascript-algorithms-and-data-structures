// let score = 95;

// if (score >= 90) {
//     console.log("You got an A");
// } else if (score >= 80) {
//     console.log("You get a B");
// } else if (score >= 70) {
//     console.log("You get a C");
// } else if (score >= 60) {
//     console.log("You get a D");
// } else {
//     console.log("You get a F");
// }

// Coin toss example

// let randomNum = Math.random();
// if (randomNum < 0.5) {
//     console.log("Heads");
// } else {
//     console.log("Tails");
// }

// password length example (nested if-else)

// let password = "catdog";

// if (password.length >= 6) {
//     if(password.indexOf(" ") !== -1) {
//         console.log("You cannot have spaces in password");
//     } else {
//         console.log("Valid password");
//     }
// } else {
//     console.log("password is too short");
// }

// password example (and operator)

// let password = "tacotuesday";
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("valid pasword");
// } else {
//     console.log("invalid password");
// }

// OR example

// let age = 25;

// if (age < 10 || age >= 80) {
//     console.log("you get in free");
// } else {
//     console.log("you pay $20");
// }

// const friends = [{name: "harry", age: 30, userName: "chosenOne"}, {name: "ron", age: 73, userName: "bear"}];
// let average = (friends[0].age + friends[1].age)/2;
// console.log(average);

// perfect squares - for loop

// let i = 50;
// while (i >= 40){
//     console.log(i);
//     i--;
// }

// password example - while loop

// let password = "lol";
// let guess = prompt("enter the password");

// while (guess !== password){
//     console.log("Please try again");
//     guess = prompt("enter the correct password");
// }

// console.log("you got it");

// let purchases = [1.4,1.6,2.6,80.9,67.4];
// let total = 0;
// for (let i = 0; i < purchases.length; i++){
//     total += purchases[i];
// }
// console.log(`Total is: $${total}`);

// for ... of loop example

// let purchases = [1.4,1.6,2.6,80.9,67.4];
// let total = 0;
// for (let cost of purchases){
//     console.log(cost);
//     total += cost;
// }
// console.log(`Total is: $${total}`);

// functions

// function laugh(level = 1, name = "Anonymous"){
//     const laughter = "ha".repeat(level);
//     console.log(`${name} says ${laughter}`);
// }

// laugh(10, "connel");

// function squares(num) {
//     if(num > 0){
//         return num ** 2;
//     }
//     console.log("Not allowed");
// }

// const result = squares(10);
// console.log(result);

// function add(x, y){
//     return x + y;
// }

// squares(add(7, 5));

// guessing game - my logic

// let guess = parseInt(prompt("Enter a number"));
// const numbers = [0,1,2,3,4,5,6,7,8,9];

// if (guess === numbers[6]) {
//     alert("You win!");
// } else if (guess === numbers[0] || guess === numbers[1] || guess === numbers[2]|| guess === numbers[3] || guess === numbers[4] || guess === numbers[5]) {
//     alert("The numbers is too LOW");
// } else if (guess === numbers[7] || guess === numbers[8] || guess === numbers[9]){
//     alert("The numbers is too HIGH");
// } else {
//     alert("The numbers is not valid");
// }

// guessing game - Colt Steele

function startGame() {
    const targetNum = generateTarget();
    let guess = userInput();

    while(guess !== targetNum){
        
        if (guess > targetNum){
            alert("Too High");
        } else {
            alert("Too Low");
        }
        guess = userInput();
    }

    alert("You win!");
}

function generateTarget(){
    let targetNum = Math.floor(Math.random() * 10) + 1;
    return targetNum;
}

function userInput(){
    let guess = parseInt(prompt("Enter a number"));
    while(Number.isNaN(guess)){
        guess = parseInt(prompt("Enter a VALID number"));
    }
    return guess;
}

startGame();