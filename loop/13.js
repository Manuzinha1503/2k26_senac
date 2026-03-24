const prompt = require("prompt-sync")();
let i;
let n;
let soma = 0;
for(i = 0; i<360; i++){
    if(n!= 0 ){
        n = Number(prompt("Digite um numero: "))
        soma = soma + n ;
    }
    else{
        soma = soma + n ;
    }
     
}
console.log(soma);