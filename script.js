// Variaveis para todos os botoes da calculadora
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

// Lista armazenando todos os botoes
const botoes = document.getElementsByClassName("botoes")

// Vai adicionar o valor clicado na tela da aplicação
function AdicionaValor(value){
    document.getElementById("tela-resultado").value += value;
}

// Deleta tudo que estiver escrito na tela da aplicação
function DeletaTudo(){
    document.getElementById("tela-resultado").value = ""
}

// Vai realizar a operação que estiver descrita no botão clicado (Soma, Subtração, Multiplicação e Divisão)
function Operacao(){
    var tela_resultado = document.getElementById("tela-resultado").value
    try{
        var resultado = eval(tela_resultado);
        document.getElementById('tela-resultado').value = resultado;
    }catch (error){
        document.getElementById('tela-resultado').value = 'Error'
    }
}

// Deleta o ultimo digito que estiver na tela da aplicação
function DeletarValor() {
    var tela_resultado = document.getElementById("tela-resultado");
    var currentValue = tela_resultado.value;
    
    if (currentValue.length > 0) {
        tela_resultado.value = currentValue.slice(0, -1);
    }
}