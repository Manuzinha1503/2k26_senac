const prompt = require("prompt-sync")();
let n = Number(prompt("Numero: "));
if(n % 2 == 0){
    console.log("Par")
}
else(
    console.log("Impar")
)