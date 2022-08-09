let num1 = 1;
let num2 = 2;

num1++; // Incrementa 1
console.log(num1);
--num1; // Decrementa 1
console.log(num1);

console.log(++num1 === num2--); // Incrementa 1 e compara se é igual a 2
console.log(num1 === num2); // Compara se é igual a 2

/**
 * comentarios;
 * => Operadores unários: Trabalham com apenas um operando.
 * => tipos de operadores unários:
 *     ++: incrementa 1
 *    --: decrementa 1
 * => +1 (unary plus)
 * => -1 (unary minus)
 * => A precedência entre operandos ocorre quando o operador pre-fixado é utilizada
 *    antes do operador de comparação.
 */
