let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;

//primeira sentença logica
let resultadoE = '#1 (AND) - Vai pro shopping? ';
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

//segunda sentença logica
let resultadoOu = '#2 (OR) - Vai para shopping?';
resultadoOu += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOu);

/**
 * Dicas Importantes: OPERADORES LOGICOS
 * 1. Operadores logicos sao usados para determinar a logica entre variaveis ou valores
 * 2. Entre os tres nivels de comparação;
 *      2.1 '&&' se ambos operandos foram 'true' retornam 'verdadeiro', se um operando
 *      for 'false', retornará 'falso'.
 *      2.2 '||' OU operandos é verdadeiro se somente se forem ambos, um dos operandos
 *      for verdadeiro retornará 'true'.
 *      2.3 '!' (Negação Logica) retorna 'falso' caso um dos operando possa ser convertido
 *      para verdadeiro;senao, retorna verdadeiro.
 * 3. Os operadores relacionais possui maior precedencia, por isso os logicos necessitam
 *    se alocados entre ().
 * 4. Ao concatenar alguma declaração podemos usar a ','.
 */