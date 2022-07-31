var a = '20';
var b = a * 2;
var c = a / 2;
var d = a - 2;
var e = a + 2; // 202 ???
var f = Number(a);
var g = f + 2;
const somar = (a, b, c, d, e, g);
console.log(somar);

/**
 * anotações;
 * 1. Em operações que envolve (" * "", " - "", " / ") a linguagem converte essa
 *    "string" em "number". Porem quando ocorre uma (" + ") ele "concatena" a string
 *    Para resolver esse problema converte uma string em um number é preciso passar
 *    mos alguns metodos, como;
 *      # Number()
 *      # parsenInt()
 *      # parseDouble()
 * 
 * 2. "Assim o metodo" converte a "string" em um numero e executa a operaçao na
 *     adição.
 */