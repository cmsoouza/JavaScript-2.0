const interacaoFuncao = [10, 20, 30, 40]

/* interacaoFuncao.forEach(function() {
    console.log('Dentro do forEch')
}); */

/* function praCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array)
}; */

function praCadaElemento(_, i) {
    console.log(i);
};

interacaoFuncao.forEach(praCadaElemento);

/**
 * anotações;
 * 1. Nessa instrução estamos passando o processo de "paramentro de função" usando 
 *    array. Funcao sendo passada para o array "interaçãoFuncao", executando 6 x o
 *    valor dentro do console. usando o (forEach) para percorre todos os elementos
 *    do "array".
 * 
 * 2. Podemos tambem realiza de outra forma a interação da função complementando
 *    como paramentro usando o array. Aqui passando elementos mais dinamicos;
 *    2.1 primeiro paramentro sempre o elemento
 *    2.2 segundo paramentro sempre o indice
 *    2.3 terceiro paramentro sempre o array completo
 *    todas diretrizes passadas ocorre de acordo com a estrutura que interagem com
 *    array. (por isso sao paramentros fixos)
 * 
 * 3. No ultimo exemplo mostra que podemos manipular os paramentro de acordo com 
 *    a escolha que declaramos nos paramentros sugeridos, assim passando da mesma
 *    forma para o "console" da função. (usando qualquer nomeação do paramentro)
 */