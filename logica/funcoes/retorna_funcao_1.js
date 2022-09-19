function retornaUmaFuncao() {
    function bomDia() {
        return 'Bom dia!!!';
    }
    return bomDia;
}
console.log(retornaUmaFuncao); //retorna a primeira função (pai)
console.log(retornaUmaFuncao()); //retorna a segunda função (filho)
console.log(retornaUmaFuncao()()); //invoca o resultado da segunda função

//outra solução para invocar a funcao
const umaFuncao = retornaUmaFuncao();
console.log(umaFuncao());

/**
 * anotações;
 * 1. Neste conceito podemos entender como retorna uma função dentro da outra,
 *    sendo assim, conseguimos retorna de duas formas o resultado da segunda função
 * 
 * 2. Podemos tambem armazenar uma função para podermos invoca-la seu resultado.
 */