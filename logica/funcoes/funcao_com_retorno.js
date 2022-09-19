// 1#: função com 'return'
function sempreRetornaUm() {
    return 1;
    console.log('Esse codigo nao pode ser atingido!!!');//erro!
}
let valor = sempreRetornaUm() + 999;
console.log(valor);

// 2#: usando if/else
function textoOuNumero(retornaTexto) {
    if(retornaTexto) {
        return 'Sou um texto!';
    } else {
        return 123;
    }
}
//declarando explicitamente o 'true'
let texto = textoOuNumero(true);
console.log(texto);

//Passando uma função dentro do console
console.log(textoOuNumero(false))

/**
 * anotações;
 * 1. Para uma função exibir um retorno, precisamo declara  a palavra re
 *    servada "return" no corpo da funçao.
 * 
 * 2. Tambem é possivel atribuir uma a função a uma variavel.
 * 
 * 3. Na segunda função (textoOuNumero) passamos o controle if/else
 *    para retorna variados tipos de dados de acordo com a instrução
 * 
 * 4. Nao é executado nada depois do 'return' (Esse codigo nao pode ser
 *    atingido). Por isso sempre em a cada instrução somente pode ter
 *    um 'return', pois logo apos desse nada sera executado.
 */