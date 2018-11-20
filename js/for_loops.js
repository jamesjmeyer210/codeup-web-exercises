/* Create a function named showMultiplicationTable that accepts a number and
console.logs the multiplication table for that number (just multiply by the
numbers 1 through 10)
*/

function showMultiplicationTable(number){
  console.assert(!isNaN(number));
  var mul_table = "Multiplication table for: " + number + "\n";
  for(var i = 1; i <= 10; i++){
    mul_table+=("\t" + number + " * " + i + " = " + (number * i) + "\n");
  }
  console.log(mul_table);
}

/* Use a for loop and the code from the previous lessons to generate 10 random
numbers between 20 and 200 and output to the console whether each number is odd
or even.
*/
function isOdd(n){
  return n - ((n >> 1) << 1);
}

function randInRange(lower, upper){
  console.assert(lower < upper);
  console.assert( !isNaN(lower) && !isNaN(upper) );
  var rand = 0;
  do {
    rand = Math.floor(Math.random() * upper) + lower;
  } while(rand > upper);
  return rand;
}

{
  var rand = 0;
  for(var i = 0; i < 10; i++){
    rand = randInRange(20, 200);
    if(isOdd(rand)){
      console.log("\t" + rand + " is odd.");
    } else {
      console.log("\t" + rand + " is even.")
    }
  }
}

// Create a for loop that uses console.log to create the output shown below.

{
  var output = "";
  for(var i = 0; i < 10; i++){

    for(var j = 0; j < i; j++){
      output+="" + i;
    }
    output+="\n";
  }
  console.log(output);
}

// Create a for loop that uses console.log to create the output shown below.

{
  var output = "\n";
  for(var i = 100; i > 0; i-=5){
    output+="" + i + "\n";
  }
  console.log(output);
}

/*
Break and Continue

    Create a file named break_and_continue.js in the js directory.
    Prompt the user for an odd number between 1 and 50. Use a loop and a break
    statement to continue prompting the user if they enter invalid input.
    Use a loop and the continue statement to output all the odd numbers between
    1 and 50, except for the number the user entered.
*/
