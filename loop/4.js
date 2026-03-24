const prompt = require("prompt-sync")();
let i;
let numero;
let soma = 0;
for(i = 0; i<3; i++){
    numero = Number(prompt("Digite um numero: "))
    soma = soma + numero ; 
}
console.log(soma);