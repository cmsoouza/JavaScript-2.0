function executar(fn, n1 = 10, n2 = 10) {//atribuindo valores padroes
    if(typeof fn === 'function') {
        console.log(fn(n1, n2));//paramentros passados na definição
    }
}

function somar(a, b) {
    return a + b
}

function subtrair(a, b) {//funções sao passadas como paramentros
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}
executar(somar, 90, 50);//paramentros atribuidos
executar(subtrair, 90, 50);
executar(multiplicar, 90, 50);
executar(multiplicar, 900, 500);
executar(somar);//assumindo valor padrao da função "somar"

/**
 * anotações;
 * 1. Função (executar) passada como parametro para função (somar).
 */