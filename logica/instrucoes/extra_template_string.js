const i = 2;
const j = 4;

console.log('i = ' + i + ', j = ' + j);
console.log("i = " + i + ", j = " + j);

console.log(`i = ${i}, j = ${j}`); //uso do backchik
console.log(`1 + 2 = ${1 + 2}`); //reconhecer uma string fora e uma operação
console.log(`Valor gerado foi: ${Math.random()}`);

console.log('i =  ${i}, j = ${j}');
console.log("i =  ${i}, j = ${j}");

//interpolação entre expressoes
let a = 5;
let b = 10;
console.log('Quinze é ' + (a + b) + ' e\nnão ' + (2 * a + b) + '.');

//agora template string
let c = 5;
let d = 10;
console.log(`Quinze é ${a + b} e não ${2 * a + b}.`);

/**
 * Template string sao strings que permitem a interpolação e expressoes embutida
 * 
 * Tambem podem possuir 'placeholders = sa elementos predefinidos' que precisam
 * ser exibidos e configurados para usuarios web.
 * 
 * No exemplo de interpolações (linha 14 a 22) percebemos a diferença usando
 * a interpolação e o template string (tornando o codigo mais legivel).
 * 
 */