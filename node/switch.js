const prompt = require("prompt-sync")();
let opcao;
console.log("Opções: 1 - oi 2- hello")
opcao = Number(prompt("Informe a sua opção: "))
switch(opcao){
    case 1: 
        console.log("Fala mulherrr"); 
        break;
    case 2:
        console.log("Hi grillllll!");
        break;
    default:
        console.log("Afff não tem essa opção ;(")

}