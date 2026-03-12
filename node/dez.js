const prompt = require("prompt-sync")();
let n1 = Number(prompt("Preço: "));
if(n1<=50){
    console.log("Tá no precinho");
}
else if(n1<=200){
    console.log("Tá de boa");
}
else{
    console.log("Premium puls");
}