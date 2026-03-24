const prompt = require("prompt-sync")();
let texto = "Informe o horário: ";
let n1 = Number(prompt(texto));
if((n1>=8) && (n1 <=18)){
    console.log("Horario comercial")
}
else{
    console.log("Fechado")
}