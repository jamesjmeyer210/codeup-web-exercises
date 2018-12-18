const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

/*
COMPLETE: Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
*/

/*
COMPLETE: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
*/
let atLeastThree = users.filter(user => {
  return user.languages.length > 2;
});
console.log(atLeastThree);
/*
COMPLETE: Use .map to create an array of strings where each element is a user's email address
*/
let emails = users.map(user => {return user.email});
console.log(emails);
/*
COMPLETE: Use reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
*/
let totalExp = users.reduce((total, user) => {
  return total + user.yearsOfExperience;
}, 0);
console.log(totalExp);
/*
COMPLETE: Use reduce to get the longest email from the list of users.
*/
let longestEmail = users.reduce((longest, user) => {

  if(longest.length < user.email.length){
    return user.email;
  }
  return longest;
}, "");
console.log(longestEmail);
/*
TODO: Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
*/
let instructors = users.reduce((names, user, index) => {
  if(index === 0){
    return user.name;
  }
  return names += `, ${user.name}`;
}, "");
console.log(instructors);
