var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let col = parseInt(lines.shift());
let O = lines.shift();
let mat = new Array();

for(let i=0;i<12;i++){
    mat.push(new Array());
    for(let j=0;j<12;j++){
        mat[i][j]=parseFloat(lines.shift());
    }
}
let soma=0;
for(let linha=0;linha<12;linha++){
    soma+= mat[linha][col];
}

if(O == 'S'){
    console.log(soma.toFixed(1));
}else{
    console.log((soma/12).toFixed(1));
}