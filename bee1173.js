var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let ent = parseInt(lines.shift());
let vetor = [];
vetor.push(ent);
for(let i=1; i<10; i++){
    vetor.push(vetor[i-1]*2);
}

for(let i=0; i<10;i++){
    console.log(`N[${i}] = ${vetor[i]}`);
}