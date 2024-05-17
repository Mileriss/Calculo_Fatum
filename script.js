var btn_0 = document.getElementById("btn-0")
var btn_1 = document.getElementById("btn-1")
var btn_2 = document.getElementById("btn-2")
var btn_3 = document.getElementById("btn-3")
var btn_4 = document.getElementById("btn-4")
var btn_5 = document.getElementById("btn-5")
var btn_6 = document.getElementById("btn-6")
var btn_7 = document.getElementById("btn-7")
var btn_8 = document.getElementById("btn-8")
var btn_9 = document.getElementById("btn-9")
var btn_porcentagem = document.getElementById("btn-porcentagem")
var btn_del = document.getElementById("btn-del")
var btn_backspace = document.getElementById("btn-backspace")
var btn_multiplicacao = document.getElementById("btn-multiplicacao")
var btn_subtracao = document.getElementById("btn-subtracao")
var btn_adicao = document.getElementById("btn-adicao")
var btn_resultado = document.getElementById("btn-resultado")

const botoes = document.getElementsByClassName("botoes")

function Add_Valor(value){
    document.getElementById("tela-resultado").value += value;
}

function Del_Valor(){
    document.getElementById("tela-resultado").value = ""
}

function Operacao(){
    var tela_resultado = document.getElementById("tela-resultado").value
    try{
        var resultado = eval(tela_resultado);
        document.getElementById('tela-resultado').value = resultado;
    }catch (error){
        document.getElementById('tela-resultado').value = 'Error'
    }
}