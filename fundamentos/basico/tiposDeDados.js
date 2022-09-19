var a = 3
let b = 4

console.log(a, b)

/* redeclaração de variaveis */
var a = 30
//let b = 40
console.log(a, b); //b se encontra declarado

/* atribuindo novo valor a let */
a = 300
b = 400
console.log(a, b);

/* constantes */
const c = 60
//d = 60 //('const nao pode ser reatribuida ou redeclarada.') 
console.log(c);

/* conversao de tipos */
const primeiroNumero = '5'
const segundoNumero = 10
console.log(primeiroNumero + segundoNumero);

/**
 * anotações;
 * 1.   var e lets;
 *          1.1 Em js nao é necessario definir o tipo da variaveis (var/let) em sua decla
 *          ração, pois ao atribuir o valor ja assumi o tipo da variavel.
 *          1.2 Variveis "bolleanas" sao definidas como (true/false).
 *          1.3 Nao definir um valor para variaveis retornará "undefined".
 *          1.4 (let) nao pode ser redeclarada
 *          1.5 devem ser declaradas antes do uso
 *          1.6 Possuem escopo de bloco
 * 
 * 2.   Conceitos importantes em declarações de constantes;
 *          2.1 nao posso redeclará ou retribui um valor para constante ja declarada
 *          2.2 constantes globais nao fazem parte do objeto "windows"
 *          2.3 Variaveis definidas com "const" possuem escopo de bloco.
 *          2.4 Quando usar constantes (novo array, objeto, função)
 * 
 * 3.   Quando ha interação entre operadores;
 *          3.1 operador (+) irá concatena envolvendo tipos "strings" e "numbers"
 *          3.2 Os demais operadores ocorre o processo normal.
 * 
 * 4.   conceitos gerais;
 *          4.1 tipos em js são (primitivos e de objetos)
 *          4.2 primitivos (strings, numbers, booleanos, null e undefined)
 *          4.3 qualquer valor que nao seja um primitivo é um objeto
 *          4.4 Objeto é uma propriedade em conjunto chave e valor
 */