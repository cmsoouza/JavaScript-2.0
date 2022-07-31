let qualquer = 'Legal'
console.log(qualquer);
console.log(typeof qualquer);

qualquer = 3.1516
console.log(qualquer);
console.log(typeof qualquer);

/* Evitar nomes genericos em variaveis */

let valor = ''
let pqp = false //???
let numero = 1

/* atribuindo valores para mesma variavel */
let variavel = 'string'
variavel = 3
variavel = true
variavel = 0.44
variavel = {nome: 'Fulano, idade: 22'}
variavel = new Date()

/* exemplo de variaveis tipadas */
/* int idade = 22 */
idade = '22'

/**
 * anotações;
 * 1.   Evitar nomes amplo sem significado para o contexto daquela variavel
 * 
 * 2.   Js é fracamente tipado, mais nao significa que a variavel nao possui
 *      tipo, so nao é explicitamente definido, e conseguimos atribuir diversos
 *      tipos de valores para mesma variavel
 * 
 * 3.   Para os exemplo de atribuição de variaveis ha tipagem forte é que ao 
 *      definir o tipo do valor da variaveis nao é possivel alterar seu tipo
 *      do valor ao atribuir novamente.
 */