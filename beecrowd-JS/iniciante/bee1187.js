var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let ope = lines.shift();
var matriz = new Array();

for(let i=0;i<=11;i++){
    matriz.push(new Array());
    for(let j=0;j<=11;j++){
        matriz[i][j] = parseFloat(lines.shift());
    }
}
let soma=0;
let cont = 1;
let cont2=11;

for(linha=0;linha<5;linha++){
    for(col=cont;col<cont2;col++){
        soma+=matriz[linha][col];
    }
    cont++;
    cont2--;
}

switch(ope){
    case 'M': 
        let media = soma/30;
        console.log(media.toFixed(1));
        break;
    case 'S':
        console.log(soma.toFixed(1));
        break;
}