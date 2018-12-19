"use strict";
const fetch = require("node-fetch");

const wait = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, time);
    });
}

wait(1000).then(() => console.log("You'll see this after 1 second"));
wait(3000).then(() => console.log("You'll see this after 3 seconds"));

const getLastCommit = (username, token) => {

  if(typeof(username) != "string"){
    return undefined;
  }

  const url = `https://api.github.com/users/${username}`;
  return fetch(url,
    {
      headers: {
        "Authorization": `token ${token}`
      }
    })
    .then(response => {
      if(response.status !== 200){
        return Promise.reject(response);
      }
      return Promise.resolve(response);
    })
    .then(response => {
      const jsonResponse = response.json();
      return jsonResponse;
    })
    .then(jsonResponse => {
      return jsonResponse.updated_at;
    })
    .catch(error => {
      console.err(error);
    });
}

//getLastCommit(username, token).then( lastUpdate => console.log(lastUpdate));

const encrypt = (input) => {
  if(typeof(input) != "string"){
    return undefined;
  }
  let shift = new TextEncoder("utf-8").encode(input);
  for(let i = 0; i < shift.length; i++){
    shift[i] += 1;
  }

  const result = new TextDecoder("utf-8").decode(shift);
  return result;
}

const decrypt = (input) => {
  if(typeof(input) != "string"){
    return undefined;
  }
  let shift = new TextEncoder("utf-8").encode(input);
  for(let i = 0; i < shift.length; i++){
    shift[i] -= 1;
  }

  const result = new TextDecoder("utf-8").decode(shift);
  return result;
}

const encryptedToken = "37beb3fc211c9:b9c82b815b74e83gb1bc3ffgb:";
const encryptedUsername = "kbnftknfzfs321";

getLastCommit(
  decrypt(encryptedUsername),
  decrypt(encryptedToken)
  ).then( lastUpdate => console.log(lastUpdate));
