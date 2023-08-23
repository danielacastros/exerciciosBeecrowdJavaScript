var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let entrada = parseInt(lines.shift());

let n100 = parseInt(entrada/100);
let n50 = parseInt((entrada - n100*100)/50);
let n20 = parseInt((entrada - n100*100 - n50*50)/20);
let n10 = parseInt((entrada - n100*100 - n50*50 - n20*20)/10);
let n5 = parseInt((entrada - n100*100 - n50*50 - n20*20 - n10*10)/5);
let n2 = parseInt((entrada - n100*100 - n50*50 - n20*20 - n10*10 - n5*5)/2);
let n1 = parseInt((entrada - n100*100 - n50*50 - n20*20 - n10*10 - n5*5 - n2*2));

console.log(entrada);
console.log(`${n100} nota(s) de R$ 100,00`);
console.log(`${n50} nota(s) de R$ 50,00`);
console.log(`${n20} nota(s) de R$ 20,00`);
console.log(`${n10} nota(s) de R$ 10,00`);
console.log(`${n5} nota(s) de R$ 5,00`);
console.log(`${n2} nota(s) de R$ 2,00`);
console.log(`${n1} nota(s) de R$ 1,00`);