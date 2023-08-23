var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let entrada = lines.shift().split(" ");
let horaIn = parseInt(entrada.shift());
let minIn = parseInt(entrada.shift());
let horaFi = parseInt(entrada.shift());
let minFi = parseInt(entrada.shift());

let horaRes = horaFi - horaIn;
let minRes = minFi - minIn;

if(minRes<0){
    minRes = 60+minRes;
    horaRes--;
}
if(horaRes<0){
    horaRes = 24+horaRes;
}

if(horaRes == 0 && minRes ==0){
    horaRes = 24;
}

console.log(`O JOGO DUROU ${horaRes} HORA(S) E ${minRes} MINUTO(S)`)