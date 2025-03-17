const readlineSync = require('readline-sync');
let userString = readlineSync.question("Enter a word: ");
let index = readlineSync.question("Enter an index number: ");
console.log('index charcter '+ index +' in the String '+ userString +' is = '+ userString[index]);