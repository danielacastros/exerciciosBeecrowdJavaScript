var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let codigo = parseInt(lines.shift());
let horas = parseInt(lines.shift());
let valor = parseFloat(lines.shift());

let total = horas * valor;

console.log(`NUMBER = ${codigo}`);
console.log(`SALARY = U$ ${total.toFixed(2)}`);