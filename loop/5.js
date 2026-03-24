const prompt = require("prompt-sync")();
let i = 0;
let soma = 0;
let media = 0;
let nota = 0;
let quant = 3
for(i=0; i< quant; i++){
    nota= Number(prompt("Nota: "))
    soma = soma+nota;
}
media = soma/quant
console.log("Soma: "+ soma)
console.log("Media: "+ media)
console.log("Quantidade: " + quant)