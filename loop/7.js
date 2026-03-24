const prompt = require("prompt-sync")();
let i;
let numero;
for(i=0; i<=8; i++){
    numero = Number(prompt("Informe: "));
    if(i % 2 == 0){
        console.log("Par")
    }
    else {
       console.log("Impar")
    }
}