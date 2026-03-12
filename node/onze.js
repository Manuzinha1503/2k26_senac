const prompt = require("prompt-sync")();
let n1 = Number(prompt("Velocidade: "));
if(n1<=60){
    console.log("Tá dentro do limite");
}
else if(n1<=80){
    console.log("Tá se passando");
}
else{
    console.log("Se passou");
}