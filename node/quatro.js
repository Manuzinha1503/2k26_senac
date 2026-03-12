const prompt = require("prompt-sync")();

let n1 = Number(prompt("Altura: "));
let n2 = Number(prompt("Peso: "));
let imc = (n1 * n1)/n2
if(imc > 18.5){
    console.log("Abaixo do peso");
}
else if(imc >=18.5 && imc<=24.9){
    console.log("Peso normal");
}
else{
    console.log("Acima do peso");
}