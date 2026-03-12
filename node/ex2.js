const prompt = require("prompt-sync")();
let n1 = Number(prompt("Numero 1: "));
let n2 = Number(prompt("Numero 2: "));
let n3 = Number(prompt("Numero 3: "));
if(n1 == n2 && n1 == n3){
    console.log("Triangulo equilatero")
}
else if((a == c) || (a == b) && (b == c)){
    console.log("Triângulo issoseles")
}
else if(n3 + n1 > n2 && n3 + n1 > n2 && n1 + n2 > n3 ){
    console.log("Triângulo escaleno")
}
else{
    console.log("Não é triângulo")
}