var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let O = lines.shift();

let mat = new Array();

for(let linha=0;linha<12;linha++){
    mat.push(new Array());
    for(let col=0;col<12;col++){
        mat[linha][col]=parseFloat(lines.shift());
    }
}
let c = 11;
let soma = 0
for(let linha=1;linha<12;linha++){
    for(col=c;col<12;col++){
        soma+=mat[linha][col];
    }
    c--;
}

if(O =='S'){
    console.log(soma.toFixed(1));
}else{
    console.log((soma/66).toFixed(1));
}