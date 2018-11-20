/*
Break and Continue

    Create a file named break_and_continue.js in the js directory.
    Prompt the user for an odd number between 1 and 50. Use a loop and a break
    statement to continue prompting the user if they enter invalid input.
    Use a loop and the continue statement to output all the odd numbers between
    1 and 50, except for the number the user entered.
*/

{
  var odd_num;
  while(true){
    odd_num = prompt("Please enter an odd number between 1 and 50");
    if(isOdd(odd_num) && (odd_num < 50) && (odd_num >= 1)){
      break;
    }
  }

  console.log("Number to skip is " + odd_num + "\n");

  for(var i = 1; i < 50; i+=2){
    if(i == odd_num){
      console.log("Yikes! Skipping number " + odd_num);
      continue;
    }
    console.log("Here is an odd number:" + i);
  }
}
