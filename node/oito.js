const prompt = require("prompt-sync")();
let n1 = Number(prompt("Numero 1: "));
let n2 = Number(prompt("Numero 2: "));
if(n1> n2){
    console.log("O número "+ n1 + " é o maior")
}
else if(n1<n2){
    console.log("O número "+ n2 + " é o maior")
}
else{
    console.log("O número é igual")
}