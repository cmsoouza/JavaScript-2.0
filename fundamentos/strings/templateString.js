const nome = 'Cristian'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Ola
    ${nome}`

console.log(concatenacao, template);

/* expressoes */
console.log(`1 + 1 = ${1 + 1}`);

/* usando funções arrow interando com templates */
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`);
/**
 * const up = function(texto){
 *      return texto.toUpperCase     
 * }
 *      
 */

/* Interpolação de expressoes */
let a = 5
let b = 10
console.log(`Quinze é ${a + b} e não ${2 * a + b}.`);

/**
 * anotações;
 * 1.   "Template string" alguns conceitos;
 *          1.1 Permitem expressoes embutidas
 *          1.2 conseguimos interpolar e definir em multi-linhas
 *          1.3 "Placeholders" sao cifraos seguidos de chaves ${}
 *
 * 2.   Usando (function arrow) o 'texto' é o argumento que a função arrow
 *      recebe, quando ela so recebe um arumento as () são opcionais.
 *      
 *
 */