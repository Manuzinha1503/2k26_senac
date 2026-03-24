const prompt = require("prompt-sync")();
let i = Number(prompt("Escreva um numero: "));
let x;
let r;
for(x=0; x<11; x++){
    r = i*x
    console.log(i + " x " +x+" = "+ r)
}
