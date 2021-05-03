//const { v4: uuidv4 } = require('uuid');
//console.log(uuidv4());
const prompt = require('prompt-sync')();
 
const name = prompt('What is your command?');
console.log(`Hey there ${name}`);