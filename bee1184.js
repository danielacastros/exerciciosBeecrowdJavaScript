var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let O = lines.shift();

let mat = new Array();

for(let i=0;i<12;i++){
    mat.push(new Array());
    for(let j=0;j<12;j++){
        mat[i][j]= parseFloat(lines.shift());
    }
}

let soma = 0;
for(let l=1;l<12;l++){
    for(let col=0;col<=(l-1);col++){
        soma += mat[l][col];
    }
}

if(O == 'S'){
    console.log(soma.toFixed(1));
}else{
    let media = soma/66;
    console.log(media.toFixed(1));
}