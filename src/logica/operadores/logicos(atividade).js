//Duas expressoes resultar em TRUE (Aritmeticos/Relacionais/logicos)
let verdadeiro1 = 4 + 3 == 7 && 7 < 10;
let verdadeiro2 = 10 > 2 + 3 || 4 == 8 - 4;
let verdadeiro3 = !(6 * 6) < 3; //usando negação logica

console.log(verdadeiro1);
console.log(verdadeiro2);
console.log(verdadeiro3);

//Duas expressoes resultar em FALSE (Aritmeticos/Relacionais/logicos)
let false1 = 10 == 9 + 10 -2 ;
let false2 = 2 + 3 < 5 && 2 == 3;
let false3 = 8 - 4 > 12 || false || 15 === '15';
let false4 = !(7 !== 6 + 1 || '3' !== 3); //usando negação & estritamente diferente


console.log(false1);
console.log(false2);
console.log(false3);
console.log(false4);

//usando operador(bit a bit/logica/artimetico/relacional) 
let teste = 1 + 2 == 3 ^ 4 > 2 - 1;

console.log(teste);

/**
 * Explicando o desafio:
 * 1. No primeiro bloco de codigos observamos operações para cada operando, o mesmo
 *    cenario ocorre nos demais blocos. 
 * 2. Operadores bit a bit sao operacionalizados para cada um dos operandos.
 */