(function(){
    "use strict";

    /**
     * COMPLETE:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["Alice","Bob","Charlie","Donald"];
    /**
     * COMPLETE:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
     console.log("There are " + names.length + " names in the \"names\" array.");
    /**
     * COMPLETE:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
     for(var i = 0; i < names.length; i++){
       console.log(names[i]);
     }

    /**
     * COMPLETE:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
     {
       var user_in = "";
       // generate the message
       var message = "Please add a name to the name list:"
       names.forEach(function(name){
         message+=("\n" + name);
       });

       var is_running = true;
       for(var i = 0; is_running == true; i++){
         user_in = prompt(message);

         if(typeof(user_in) == "undefined" || user_in == "" || user_in == null){
           is_running = false;
           continue;
         }

         names.push(user_in);
         message+=("\n" + user_in);
       }
     }

    /**
     * COMPLETE:
     * Refactor your above code to use a `forEach` loop
     */

    /**
     * COMPLETE:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
})();

function first(array){
  console.assert(array.length >= 1);
  return array[0];
}

function second(array){
  console.assert(array.length >= 2);
  return array[1];
}

function last(array){
  console.assert(array.length > 0);
  return array[array.length - 1];
}
