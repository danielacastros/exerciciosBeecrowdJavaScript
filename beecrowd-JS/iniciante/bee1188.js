var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let O = lines.shift();
let mat = new Array();

for(let i=0;i<12;i++){
    mat.push(new Array());
    for(let j=0;j<12;j++){
        mat[i][j]=parseFloat(lines.shift());
    }
}

let c = 11;
let c2 = 1;
let soma=0;
for(let i=11;i>6;i--){
    for(let j=c2;j<c;j++){
        soma+=mat[i][j];
    }
    c--;
    c2++;
}

if(O == 'S'){
    console.log(soma.toFixed(1));
}else{
    console.log((soma/30).toFixed(1));
}