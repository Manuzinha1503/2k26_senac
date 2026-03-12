const prompt = require("prompt-sync")();
let n1 = Number(prompt("Temperatura: "));
let fr = (n1*9/5)+32
if(fr<50){
    console.log("Frio da peste");
}
else if(fr>=50 && fr<89){
    console.log("Suave");
}
else{
    console.log("Tá um calorrrr");
}