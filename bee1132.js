var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines.shift()); 
let y = parseInt(lines.shift());

let maior = y; 
let menor = x;

if(y<x){
    maior = x;
    menor = y;
}

let lista = [];

for(let i = menor; i<=maior;i++){
    lista.push(i);
}

let soma=0;

lista.forEach((elem) => {
    if(elem%13!=0){
        soma+=elem;
    }
})
console.log(soma);