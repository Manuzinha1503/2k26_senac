const prompt = require("prompt-sync")();
let n1 = prompt("Informe a sua senha: ");
for(i=0; i<3; i++)
if(n1 == 1234 ){
    console.log("Acesso permitido!");
}
else{
    
    console.log("Tente novamente");
    n1 = prompt("Informe a sua senha: ");
    
}
