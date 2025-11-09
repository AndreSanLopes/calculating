var display = document.getElementById("display");
var entrada0 = ""
var entradaOp = ""

function anexoNum(value){
    //adiciona entradas do usuário na memória
    entrada0 += value
    display.textContent = entrada0
}