var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let ent = parseInt(lines.shift());

for(let i=0;i<6;i++){
   if(ent%2==0){
       ent=ent+1
   }
   console.log(ent);
    ent+=2;
}