/*
 * Complete the TODO items below
 */
"use strict";

const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// COMPLETE: fill in your name and email and add some programming languages you know
// to the languages array
// COMPLETE: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'James Meyer';
const email = 'jamesjmeyer210@gmai.com';
const languages = ["HTML","CSS","Javascript","Java","Bash","C","Assembly","Rust"];

/* DEBUG */console.log(name);
/* DEBUG */console.log(email);
/* DEBUG */console.log(languages.join(', '));

// COMPLETE: rewrite the object literal using object property shorthand
users.push({name, email, languages});

// COMPLETE: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// COMPLETE: rewrite the following using arrow functions
users.forEach(user => {
  emails.push(user.email);
});
users.forEach(user => {
  names.push(user.name);
});

// COMPLETE: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // COMPLETE: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  const {name, email, languages} = user;

  // COMPLETE: rewrite the assignment below to use template strings
  developers.push(`${name}'s email is ${email} ${name} knows {languages.join(', ')}'`);
});

// COMPLETE: Use `let` for the following variable
let list = '<ul>';

// COMPLETE: rewrite the following loop to use a for..of loop
for(let developer in developers) {
  // COMPLETE: rewrite the assignment below to use template strings
  list += `<li>${developer}</li>`;
}
list += '</ul>';
//
/* DEBUG */console.log(list);
