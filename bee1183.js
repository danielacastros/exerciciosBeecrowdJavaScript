var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let O = lines.shift();
let mat = new Array();

for(let l=0;l<12;l++){
    mat.push(new Array());
    for(let col=0;col<12;col++){
        mat[l][col]=parseFloat(lines.shift());
    }
}

let c=1;
let soma=0;
for(let l=0;l<12;l++){
    for(let col=c;col<12;col++){
        soma+=mat[l][col];
    }
    c++;
}

if(O == "S"){
    console.log(soma.toFixed(1));
}else{
    console.log((soma/66).toFixed(1));
}