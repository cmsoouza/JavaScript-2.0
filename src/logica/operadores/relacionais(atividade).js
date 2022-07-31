let a = 1;
let b = 2;

//encontre 5 expressoes que o resultado é TRUE
console.log(a < b);
console.log(a != b);
console.log(a <= b);
console.log(b > a);
console.log(b != a);
console.log(a + a === b);

//encontre 5 expressoes que o resultado é FALSE
console.log(a > b);
console.log(a == b);
console.log(a >= b);
console.log(a === b);
console.log(b == a);
console.log(a + a !== b);

/**
 * Explicando o Desafio:
 * 1. Para cada bloco de expressoes sao verificadas pelo compilador se as sintaxes sao
 *    'true' ou 'false', usando os operadores relacionais.
 * 2. Percebemos que tambem podemos usar operadores aritmeticos/relacionais em cada
 *    operação.
 */