var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let ent = parseInt(lines.shift());

if(ent%2==0){
    let ent = ent-1;
}

for(let i=1;i<=ent;i+=2){
    console.log(i);
}