var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let jon = lines.shift();
let doctor = lines.shift();

if(jon.length>=doctor.length){
    console.log("go");
}else{
    console.log("no");
}