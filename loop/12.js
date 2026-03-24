const prompt = require("prompt-sync")();
let i = 0;
let soma = 0;
let media = 0;
let nota = 0;
let nome = 0;
for(i=0; i< 3; i++){
    nome = prompt("Digite o seu nome: ")
    nota= Number(prompt("Digite a sua idade: "))
    soma = soma+nota;
    if( nota < 18){
        console.log("Menor de idade " + nome)
    }
}
media = soma / 5
console.log("Soma: "+ soma)
console.log("Media de idade: "+ media)
