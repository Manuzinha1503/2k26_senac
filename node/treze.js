const prompt = require("prompt-sync")();
let sla = Number(prompt("Digite o seu salário: "));
let bonus 
let novo
if(sla<= 2000){
    bonus = sla * 0.15;
}
else if(sla<= 5000){
    bonus = sla * 0.10;
}
else{
    bonus = sla * 0.05;
}
novo = sla + bonus
console.log("O extra foi: "+ bonus);
console.log("Seu novo salario: " + novo)