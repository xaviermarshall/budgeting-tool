
let income = 0;
let essentials = 50;
let wants = 30;
let savings = 20;
let essentialsAmount = 0;
let wantsAmount = 0;
let savingsAmount = 0;
let answer = "";
const prompt = require("prompt-sync")({sigint:true});

console.log("Welcome to the simple budgeting tool.");
console.log("This is a simple tool to take your income and split it across 3 different categories.");
console.log("These categories are 'essentials', 'wants', and 'savings'.");
console.log("Essentials are things like housing costs, food, fuel; basically, all the things you can't live without.");
console.log("Wants are exactly what they sound like: things that you would like to have, but could live without.");
console.log("Savings includes savings, but also debt repayment.");
console.log("With those explanations out of the way, let's get started.");
console.log("First, let's get your income. Please enter it below (rounded to the nearest whole number) ");

while (answer != "y") {
    income = parseFloat(prompt());
    console.log("You entered " + income);
    answer = prompt("Is this correct? (y/n) ");
    console.log('\n');
}

console.log("Great, let's move on to the percentage of your income you'd like to dedicate to essentials.");
answer = "";

while (answer != "y") {
    answer = prompt();
    if (answer == "") {
    console.log("You entered " + essentials);
    answer = prompt("Is this correct? (y/n) ");
    }
    else {
        essentials = parseFloat(answer);
        console.log("You entered " + essentials);
        answer = prompt("Is this correct? (y/n) ");
        console.log('\n');
    }
}

console.log("Great, let's move on to the percentage of your income you'd like to dedicate to wants.");
answer = "";

while (answer != "y") {
    answer = prompt();
    if (answer == "") {
        console.log("You entered " + wants);
        answer = prompt("Is this correct? (y/n) ");
    }
    else {
        wants = parseFloat(answer);
        console.log("You entered " + wants);
        answer = prompt("Is this correct? (y/n) ");
        console.log('\n');
    }
}

console.log("Great, let's move on to the percentage of your income you'd like to dedicate to savings.");
answer = "";

while (answer != "y") {
    answer = prompt();
    if (answer == "") {
        console.log("You entered " + savings);
        answer = prompt("Is this correct? (y/n) ");
    }
    else {
        savings = parseFloat(answer);
        console.log("You entered " + savings);
        answer = prompt("Is this correct? (y/n) ");
        console.log('\n');
    }
}

//now for calculations
essentialsAmount = (essentials * income) / 100.;
wantsAmount = (wants * income) / 100.;
savingsAmount = (savings * income) / 100.;

console.log("Your income division has been calculated. Below are the amounts you'll dedicate to each category:");
console.log("Essentials: " + essentialsAmount);
console.log("Wants: " + wantsAmount);
console.log("Savings: " + savingsAmount);

prompt("Thanks for using this tool! Press 'enter' when you're ready to exit.");
