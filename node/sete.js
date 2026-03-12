const prompt = require("prompt-sync")();
let n1 = prompt("Informe o seu login: ");
if(n1 == "administrador" || n1 == "Administrador" ){
    console.log("Acesso permitido!");
}
else{
    console.log("Negado :)");
}