const prompt = require("prompt-sync")();
let n1 = Number(prompt("Numero 1: "));
let n2 = Number(prompt("Numero 2: "));
let n3 = Number(prompt("Numero 3: "));
if(n3 + n1 > n2 && n3 + n1 > n2 && n1 + n2 > n3){
    console.log("Triangulo")
}
else{
    console.log("Não é triângulo")
}