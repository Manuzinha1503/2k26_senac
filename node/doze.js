const prompt = require("prompt-sync")();
let n1 = prompt("Informe a sua senha: ");
if(n1 == 1234 ){
    console.log("Acesso permitido!");
}
else{
    console.log("Negado :)");
}