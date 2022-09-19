const javascript = false; // explicito

console.log(javascript ? "verdadeiro" : "falso");

// 2° exemplo
const resultado = (nota) => (nota >= 7 ? "verdadeiro" : "falso");

console.log(resultado(7.1));
console.log(resultado(6.7));

// 3° exemplo - sem o uso de parenteses com multiplas ternarias
var firstCheck = false,
  secondCheck = false,
  access = firstCheck
    ? "Access denied"
    : secondCheck
    ? "Access denied"
    : "Access granted";

console.log(access); // logs "Access granted"
/**
 *  anotação:
 *
 *  links para futuras leituras:
 *  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 *
 *
 *  1. O operador ternário é um operador condicional que recebe três operandos.
 *
 *  2. "?" Faz parte da sintaxe do operador ternário, É assim que runtime do JS identifica que o operador
 *      ternário está sendo usado.
 *
 *  3.
 *
 */
