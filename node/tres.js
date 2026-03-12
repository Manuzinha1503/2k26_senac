const prompt = require("prompt-sync")();
let n1 = Number(prompt("Numero 1: "));
let n2 = Number(prompt("Numero 2: "));
let media = (n1+n2)/2;
console.log("A média é: "+ media)
if(media >=7){
    console.log("Aprovado!")
}
else if(media> 3 && media<=7){
    console.log("Recuperação")
}
else{
    console.log("Reprovado")
}