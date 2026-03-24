const prompt = require("prompt-sync")();
let n1 = Number(prompt("Temperatura atual: "))
let f = (n1 * 9/5)+ 32
if( f <= 50){
    console.log("Frio.")
}
else if(f <86){
    console.log("Agradável")
}
else{
    console.log("Quente")
    }
    console.log(f)
