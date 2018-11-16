"use strict"
console.log("Hello from inline javascrip!");
alert("Welcome to my website!");

var fav_color = "blue";
var user_in = prompt("What is your favorite color?");
user_in.toLowerCase();
if(fav_color == user_in){
  alert("That's my favorite color as well.");
}else{
  alert("We don't share the same favorite color.");
}
