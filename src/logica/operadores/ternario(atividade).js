const a = 8;
const b = 4;
const operacao = '+';

const resultado = operacao === '+' ? a + b :
    operacao === '-' ? a - b :
    operacao === '*' ? a * b : a / b;
console.log(resultado);

/**
 * Explicando Desafio:
 * 1. Nesta operação verificamos 3 condições para que o resultado possa ser declarado
 *    usando as operações matematica.
 * 2. Para cada expressao ao qual a condição na for 'true', pulará para proxima condição
 *    a ser usada entre as operações.
 */