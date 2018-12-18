"use strict";
const fetch = require("node-fetch");
// 
// const wait = (time) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve();
//         }, time);
//     });
// }
//
// wait(1000).then(() => console.log("You'll see this after 1 second"));
// wait(3000).then(() => console.log("You'll see this after 3 seconds"));

const githubUserStatus = (token) => {
  const url = "https://api.github.com/users/:jamesjmeyer210/events"
  return fetch(url, {headers: {'Authorization': `${token}`}})
    .then( (response) => {
      console.log(response.json());
    })
    .catch(error => {
      console.error(error);
    });
}

const token = "d303b10843bbbb7ed87d16900cd8ac7f73c98b84e";
githubUserStatus(token);

//fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
