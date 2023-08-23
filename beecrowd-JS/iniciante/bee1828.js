var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let ent = parseInt(lines.shift());

for(let i=0;i<ent;i++){
    let jogo = lines.shift().split(" ");
    let j1 = jogo.shift();
    let j2 =jogo.shift();

    switch(j1){
        case "pedra": 
            if(j2 == "tesoura" || j2=="lagarto"){
                console.log(`Caso #${i+1}: Bazinga!`);
            }else if(j2 == "pedra"){
                console.log(`Caso #${i+1}: De novo!`);
            }else{
                console.log(`Caso #${i+1}: Raj trapaceou!`);
            }
            break;
        case "papel": 
            if(j2 == "pedra" || j2=="Spock"){
                console.log(`Caso #${i+1}: Bazinga!`);
            }else if(j2 == "papel"){
                console.log(`Caso #${i+1}: De novo!`);
            }else{
                console.log(`Caso #${i+1}: Raj trapaceou!`);
            }
            break;
        case "tesoura": 
            if(j2 == "papel" || j2=="lagarto"){
                console.log(`Caso #${i+1}: Bazinga!`);
            }else if(j2 == "tesoura"){
                console.log(`Caso #${i+1}: De novo!`);
            }else{
                console.log(`Caso #${i+1}: Raj trapaceou!`);
            }
            break;
        case "lagarto": 
            if(j2 == "papel" || j2=="Spock"){
                console.log(`Caso #${i+1}: Bazinga!`);
            }else if(j2 == "lagarto"){
                console.log(`Caso #${i+1}: De novo!`);
            }else{
                console.log(`Caso #${i+1}: Raj trapaceou!`);
            }
            break;
        case "Spock": 
            if(j2 == "pedra" || j2=="tesoura"){
                console.log(`Caso #${i+1}: Bazinga!`);
            }else if(j2 == "Spock"){
                console.log(`Caso #${i+1}: De novo!`);
            }else{
                console.log(`Caso #${i+1}: Raj trapaceou!`);
            }
            break;
    }
        
}