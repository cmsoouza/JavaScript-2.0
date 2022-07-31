let a = 1;
let b = 2;

console.log(++a == b++);//a precedencia é nitida nessa declaração

//boa pratica
a++;
console.log(a === b);

/**
 * Dica de precedencia e boas praticas;
 * 1. operadores unario sao classificados como (prefixo= ++a/ posfixo= b++)
 * 2. Operador de comparação tem maior precedencia em declarações (linha 4)
 * 3. (Linha 4) primeiro e executado o elemento prefix para logo depois ser comparado
 *     entre os dois elementos. Assim por ultimo o compilador analisa o elemento posfix
 *     para finaliza operação.
 */