

// Q1 Positive Integer
var positiveNumber = +prompt("Enter a positive number");

document.write("<h3>Q1</h3>");

document.write("Number: " + positiveNumber + "<br>");

document.write("Round off value: " + Math.round(positiveNumber) + "<br>");

document.write("Floor value: " + Math.floor(positiveNumber) + "<br>");

document.write("Ceil value: " + Math.ceil(positiveNumber) + "<br><br>");



// Q2 Negative Floating Number
var negativeNumber = +prompt("Enter a negative floating number");

document.write("<h3>Q2</h3>");

document.write("Number: " + negativeNumber + "<br>");

document.write("Round off value: " + Math.round(negativeNumber) + "<br>");

document.write("Floor value: " + Math.floor(negativeNumber) + "<br>");

document.write("Ceil value: " + Math.ceil(negativeNumber) + "<br><br>");



// Q3 Absolute Value
var number = +prompt("Enter any number");

document.write("<h3>Q3</h3>");

document.write("Absolute value of " + number + " is " + Math.abs(number) + "<br><br>");



// Q4 Dice Simulation
var dice = Math.floor(Math.random() * 6) + 1;

document.write("<h3>Q4</h3>");

document.write("Random dice value: " + dice + "<br><br>");



// Q5 Coin Toss
var toss = Math.floor(Math.random() * 2) + 1;

document.write("<h3>Q5</h3>");

if (toss === 1) {

    document.write("Random coin value: Heads <br><br>");

} else {

    document.write("Random coin value: Tails <br><br>");

}



// Q6 Random Number 1 to 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

document.write("<h3>Q6</h3>");

document.write("Random number between 1 and 100: " + randomNumber + "<br><br>");



// Q7 Weight Parser
var weight = prompt("Enter your weight");

var parseWeight = parseFloat(weight);

document.write("<h3>Q7</h3>");

document.write("Your weight is " + parseWeight + " kilograms <br><br>");



// Q8 Secret Number Game
var secretNumber = Math.floor(Math.random() * 10) + 1;

var userNumber = +prompt("Guess the secret number between 1 to 10");

document.write("<h3>Q8</h3>");

if (userNumber >= 1 && userNumber <= 10) {

    if (userNumber === secretNumber) {

        document.write("Congratulations! You guessed the correct number 🎉");

    } else {

        document.write("Try Again ❌ <br>");
        document.write("Secret Number was: " + secretNumber);

    }

} else {

    document.write("Please enter number between 1 to 10");

}

