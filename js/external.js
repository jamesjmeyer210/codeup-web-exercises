// "use strict"
// console.log("Hello from inline javascrip!");
// alert("Welcome to my website!");
//
// var fav_color = "blue";
// var user_in = prompt("What is your favorite color?");
// user_in.toLowerCase();
// if(fav_color == user_in){
//   alert("That's my favorite color as well.");
// }else{
//   alert("We don't share the same favorite color.");
// }


// --------------------------------------------------
// ------------------- Exercise 3 -------------------
// --------------------------------------------------


// --------------------------------------------------
// ------------------- Part 1 -----------------------
// --------------------------------------------------
class MovieRental {
  constructor(title, days, rate){
    this.title = title;
    this.days = days;
    this.rate = rate;
  }
}

function calcMovieRentalFee(){
  const rate = 3.00;
  var m1 = new MovieRental("The Little Mermaid", 3, rate);
  var m2 = new MovieRental("Brother Bear", 5, rate);
  var m3 = new MovieRental("Hercules", 1, rate);
  return (m1.days + m2.days + m3.days) * rate;
}

console.log("Total rental fees: $" + calcMovieRentalFee());

// --------------------------------------------------
// ------------------- Part 2 -----------------------
// --------------------------------------------------
class Contract {
  constructor(rate, hours){
    this.rate = rate;
    this.hours = hours;
  }
  pay(){
    return this.rate * this.hours;
  }
}

function calculatePay(){
  var google = new Contract(400, 6);
  var amazon = new Contract(380, 4);
  var facebook = new Contract(350, 10);
  return google.pay() + amazon.pay() + facebook.pay();
}

console.log("The total pay is: $" + calculatePay());

// --------------------------------------------------
// ------------------- Part 3 -----------------------
// --------------------------------------------------
class Course{
  constructor(max_capacity, enrolled){
    this.max_capacity = max_capacity;
    this.enrolled = enrolled;
  }
  enrollStudent(){
    if(this.enrolled != this.max_capacity){
      this.enrolled++;
      return true;
    } else {
      return false;
    }
  }
}

function canEnroll(){
  var course = new Course(30, 29);
  var schedule_conflicts = false;
  if(!schedule_conflicts && course.enrollStudent){
    console.log("The student is enrolled!");
  }
}

canEnroll();


// --------------------------------------------------
// ------------------- Part 4 -----------------------
// --------------------------------------------------

var shopping_cart = {
  total: 0,
  is_premium: false,
  item_count: 1,
  item_list: [""]
};

function init_shopping_cart(self){
  self.item_count = 0;
  self.item_list.unshift();
}

function add_item(self, item, price){
  console.assert(typeof(item) == "string");
  self.item_list.push(item);
  self.item_count++;
  self.total+=price;
}

init_shopping_cart(shopping_cart);
add_item(shopping_cart, "Bacon", 3.50);
add_item(shopping_cart, "Eggs", 5.25);
add_item(shopping_cart, "Onions", 1.16);

function applyDiscount(cart){
  var end_date = new Date("2018-12-01");
  var cur_date = new Date();
  const discount = 0.15;

  if(cart.is_premium){
    return (cart.total - (cart.total * discount));
  }
  if(cart.item_count > 2 && (cur_date < end_date) ){
    return (cart.total - (cart.total * discount));
  } else {
    console.log("The user does not meet the parameters for the discount.");
    return cart.total;
  }
}

console.log("Shopping cart total: $" + shopping_cart.total);
console.log("After discount: $" + applyDiscount(shopping_cart));
