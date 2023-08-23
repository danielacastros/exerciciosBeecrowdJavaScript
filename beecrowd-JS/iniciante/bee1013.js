var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let ent = lines.shift().split(" ");
let a = parseInt(ent.shift());
let b = parseInt(ent.shift());
let c = parseInt(ent.shift());

let maiorAB = (a+b+Math.abs(a-b))/2;

let maiorABC = (maiorAB+c+Math.abs(maiorAB-c))/2;

console.log(`${maiorABC} eh o maior`);