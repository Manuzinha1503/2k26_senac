

/*
function mult(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function soma(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
n1 = 2;
n2 = 3;
let op;
n1 = Number(prompt("Informe N1: "))
n2 = Number(prompt("Informe N2: "))
op = Number(prompt("Informe uma das opções: "))
if(op === 1){
    rr = soma(n1,n2);
}
else if(op === 2){
    rr = sub(n1,n2)
}
let rr = soma(n1,n2);
console.log(rr);*/

function soma(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mult(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
let n1;
let n2;
let calc;
let opcao;

n1 = Number(prompt("Informe N1: "))
n2 = Number(prompt("Informe N2: "))
opcao = Number(prompt("opcões: 1-soma 2-menos 3-multiplicação 4-divisão 5-; "))
if(opcao === 1){
    calc = soma(n1,n2);
}
else if(opcao === 2){
    calc = sub(n1,n2);
}
else if(opcao === 3){
    calc = mult(n1,n2);
}
else if(opcao === 4){
    calc = div(n1,n2)
}
else{
    console.log("invalido")
}
console.log(soma)