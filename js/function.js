"use strict";

const TYPE_ERROR = "Invalid type!"

function sayHello(name) {
  if(typeof(name) != "string"){
    console.error(TYPE_ERROR);
  } else {
    return ("Hello, " + name);
  }
}

{
  var user_name = prompt("Please enter your name.");
  var helloMessage = sayHello(user_name);
  alert(helloMessage);
}
/**
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
{
  var myName = "James";
  console.log(sayHello(myName));
}

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(input){
  if(typeof(input) != "number"){
    console.error(TYPE_ERROR);
  }
  else if(input == 2){
    return true;
  }
  else {
    return false;
  }
}

console.log("isTwo(" + random + "):\t" + isTwo(random));

/**
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
function calculateTip(percent, total){
  if(percent > 100 ){
    console.error("Percent is greater than 100");
  }
  else if(percent > 1){
    percent = percent / 100;
  }
  return total * percent;
}

{
  var tip = 0.20;
  var total = 20;
  console.log("Tip percent: " + tip + "\tTotal: $" + total + "\t" + calculateTip(tip, total));
  tip = 0.25;
  total = 25.50;
  console.log("Tip percent: " + tip + "\tTotal: $" + total + "\t" + calculateTip(tip, total));
  tip = 0.15;
  total = 33.42;
  console.log("Tip percent: " + tip + "\tTotal: $" + total + "\t" + calculateTip(tip, total));
  tip = 50;
  total = 32.16;
  console.log("Tip percent: " + tip + "\tTotal: $" + total + "\t" + calculateTip(tip, total));
}
/**
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
{
  var total = prompt("You're at a restaurant and you've received the bill.\nPlease enter the total");
  var tip = prompt("Enter the tip amout as a percent or decimal");
  tip = calculateTip(tip, total);
  alert("The tip amount is $" + tip.toFixed(2));
  console.log("Tip percent: " + tip.toFixed(2) + "\tTotal: $" + total.toFixed(2) + "\t" + calculateTip(tip, total));
}
/**
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount(price, discount){
  if(typeof(price) != "number" || typeof(discount) != "number"){
    console.error("Invalid argument types.");
    return;
  }
  if(discount < 0 || discount > 1){
    console.error("discount is not a decimal.");
    return;
  }
  return price - (price * discount);
}

console.log(applyDiscount(45.99, 0.12));
