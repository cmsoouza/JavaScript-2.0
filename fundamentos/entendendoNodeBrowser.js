let a = 3;

global.b = 123;
this.c = 456;
this.d = false;
this.e = "teste";

console.log(a);
console.log(global.b); // referencia global
console.log(this.c);
console.log(module.exports.c); // referencia estrutura do node
console.log(module.exports === this); // estrita igualdade

/***
 *
 *  anotações:
 *
 *  1. node é um interpretador de javascript, tudo em node é criado em modulo.
 *
 *  2. O "this" é um objeto que pode ser acessado dependendo do contexto declarado em execução.
 *
 *
 */
