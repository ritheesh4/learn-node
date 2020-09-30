// const hello = "Hello world";
// console.log(hello);
const fs = require('fs');

//Blocking, synchronous ways
const textIn = fs.readFileSync('./input.txt','utf-8');
console.log(textIn);

const textOut = `This is the senetence I am wriging: ${textIn}.\n Create on  ${Date.now()}`;
fs.writeFileSync('./input.txt', textOut);

console.log('File Written');

