// Create a while loop that uses console.log() to create the output shown below.
{
  const max = 16;
  var i = 0;
  while(i < max){
    console.log(2 << i);
    i++;
  }
}

/* An ice cream seller can't go home until she sells all of her cones.
Write a JS program that generates a random number between 50 and 100
representing the amount of cones to sell. Your code should generate numbers
between 1 and 5, simulating the amount of cones being bought by her clients.
Use a do-while loop to log to the console the amount of cones sold to each
person. This is how you get the random numbers. */
{
  console.log("\n");
  // generate a number within the proper parameters
  var cones_to_sell = 0;
  while(true){
    cones_to_sell = Math.floor(Math.random() * 100);
    if(cones_to_sell > 50 && cones_to_sell < 100){
      break;
    }
  }

  console.log("The seller has " + cones_to_sell + " cones.");
  var cones_to_purchase = 0;
  // the following loop handles the sales of cones
  do {
    cones_to_purchase = Math.floor(Math.random() * 5) + 1;
    if(cones_to_purchase <= cones_to_sell){
      cones_to_sell = cones_to_sell - cones_to_purchase;
      console.log("A customer purchased " + cones_to_purchase + " cones."
        + " " + cones_to_sell + " cones remain.");
    } else {
      console.log("A customer wants to purchase " + cones_to_purchase
        + " cones but only " + cones_to_sell + " remain.");
    }
  } while(cones_to_sell > 0 && i < 100);

  console.log("All of the cones have been sold.\n");
}
