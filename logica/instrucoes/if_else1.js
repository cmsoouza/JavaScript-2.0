const hora = 16;
let saudacao; //valor undefined

if (hora < 12) {
    saudacao = 'Bom dia!';
} else {
    if (hora < 18) {
        saudacao = 'Boa tarde!!'
    } else {
        saudacao = 'Boa noite!!!'
    }
}
console.log(saudacao);

/**
 * anotações;
 * 1. Para cada bloco de if/else sera executado uma condição de acordo com que for
 *    declarado na variavel 'hora'.
 * 2. Caso a primeira condição for falsa, o compilador passará para proxima condição.
 */