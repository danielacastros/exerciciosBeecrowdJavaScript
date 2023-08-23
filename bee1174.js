var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let vetor = [];
for(let i =0;i<100;i++){
    vetor.push(parseFloat(lines.shift()));
}

for(let i = 0 ;i<100;i++){
    if(vetor[i]<=10){
        valor = vetor[i];
        console.log(`A[${i}] = ${valor.toFixed(1)}`)
    }
}