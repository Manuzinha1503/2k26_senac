const prompt = require("prompt-sync")();
let n1 = Number(prompt("Valor da compra: "));
let desconto = (n1*10)/100
if(n1>=100){
    console.log("Desconto de 10%")
    console.log("Valor desconto: " + desconto)
}
else{
    console.log("Não tem desconto.")
}
