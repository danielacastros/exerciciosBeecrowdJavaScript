var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let ent = parseInt(lines.shift());
let vetor = [];

for(let i=0; i<ent; i++){
    vetor.push(i);
}
let j=0;

while(j<1000){
    for(let i=0;i<vetor.length;i++){
        if(j<1000){
            console.log(`N[${j}] = ${i}`);
        }
        j++;
    }
}