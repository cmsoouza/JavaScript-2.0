// 1#: função COM paramentro e COM Retorno
function somar(a, b) {
    return a + b;
}
let resultado = somar(30, 56);//armazenando numa variavel
console.log(`resultado final é: ${resultado}`);//interpolando
console.log(somar(30, 56));//chamando pela função

// 2#: Função COM paramentro e SEM retorno
function exibirMultiplicacao(a, b){
    console.log(a * b);
}
exibirMultiplicacao(10, 21);
exibirMultiplicacao(7, 9);

// 3#: Função SEM paramentro e COM retorno
function retornarDataAtual (){
    return new Date();
}
console.log(retornarDataAtual());

// 4#: Função SEM paramentro e SEM retorno
function exibirHoraAtual() {
    console.log(new Date().getHours());
}
exibirHoraAtual();
/**
 * anotações;
 * 1. Diversas formas de apresentação de funções com e sem retornos ou
 *    sem retornos e sem parametros.
 * 
 * 2. tudo que vem apos o (return) nao será executado no algoritmo da função.
 */