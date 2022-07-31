function retornaUmaFuncao() {
    return function () {
        return function () {
            return 'Boa tarde!!!';
        }
    }
}
console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());
console.log(retornaUmaFuncao()());
console.log(retornaUmaFuncao()()()); //mostrando o resultado da uma função

/**
 * anotações;
 * 1. Nesta instrução conseguimos adicionar varias funções dentro da outra e retornar
 *    seu resultado.
 */
