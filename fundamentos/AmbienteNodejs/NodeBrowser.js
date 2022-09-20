/* let a = 3;

global.b = 123;
this.c = 456;
this.d = false;
this.e = "teste";

console.log(a);
console.log(global.b); // referencia global
console.log(this.c);
console.log(module.exports.c); // referencia estrutura do node
console.log(module.exports === this); // estrita igualdade
console.log(module.exports); */

/* 2° Apontando para o mesmo objeto */
this.a = 3;
console.log(this === module.exports);
console.log(this, module.exports); // o this e node (module) apontam para mesmo objeto.

/* 3° Alterando o module, mais nao this */
this.a = 3;
console.log(this === module.exports);

module.exports = {
  segredo: "Encontre o mapa e encontrará o tesouro",
};

console.log(this === module.exports);

console.log(this);
console.log(module.exports);

/***
 *
 *  anotações:
 *
 *  1. node é um ambiente de execução de javascript, tudo em node é criado em modulo.
 *
 *  2. O "this" é uma palavra reservada para fazer uma auto referencia do objeto. Porem
 *     pode variar de acordo com o contexto de execução.
 *
 *  3. Sempre fuja de declarações de variaveis globais.
 *
 *  4. No 3° exemplo conseguindo alterar o (module) com atribuição de uma nova variavel.
 *     porem o this nao. Por isso nao sao extritamente iguais.
 *
 *  5. Assim os dois processos apontam para o mesmo objeto ate o (module) ser alterado.
 *
 *  6. Cao alteramos a variavel a de let para var, o mesmo retornará com erro pois a variavel
 *     (a) nao pode ser redeclarada.
 *
 *
 */
