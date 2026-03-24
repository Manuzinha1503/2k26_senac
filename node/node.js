const prompt = require("prompt-sync")();
let nome = prompt("Nome do cliente: ")
let ate = prompt("Nome do atendente: ")
let total= 0;
console.log("Xis --- Hamburger --- Hotdog")
let l = prompt("Tipo de lanche: ")
console.log("P -- M -- G")
let t = prompt("Tamanho do lanche: ")
if(l == "Xis"){
    if(t == "P"){
        total = total  + 18
    }
    else if(t == "M"){
        total = total + 24
    }
    else if(t == "G"){
        total = total + 30
    }
}
else if (l == "Hamburger"){
    if(t == "P"){
        total = total + 12
    }
    else if(t == "M"){
        total = total + 21
    }
    else if(t == "G"){
        total = total + 27
    }
}
else if(l == "Hotdog"){
    if(t == "P"){
        total = total + 12
    }
    else if(t == "M"){
        total = total + 16
    }
    else if(t == "G"){
        total = total + 20
    }
}
console.log("Água -- Refri -- Suco")
let b = prompt("Tipo de bebida: ")
if(b == "Agua"){
    total = total + 5
}
else if (b == "Refri"){
    total = total+8
}
else if(b == "Suco"){
    total =total+10
}
console.log("Nenhuma -- Sorvete -- Pudim")
let s = prompt("Tipo de sobremesa: ")
if (s == "Sorvete"){
    total = total + 9
}
else if(s == "Pudim"){
    total = total + 11
}
console.log("Pix -- Cartão -- Dinheiro")
let fp = prompt("Forma de pagamento: ")
let c = prompt("Cupom: ")
console.log("Nome do cliente: " + nome)
console.log("Nome do Atendente: "+ate)
console.log("Lanche escolhido: "+ l +" " + t )
console.log("Bebida escolhida"+b)
console.log("Sobremesa: "+s)
console.log("Forma de pagamento: "+fp)
console.log("O valor total foi: "+total)