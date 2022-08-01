console.log("01)", "1" == 1); // igualdade
console.log("02)", "1" === 1); // estritamente igualdade
console.log("03)", "1" != 1); // diferente (Nao logico)
console.log("04)", "1" !== 1); // diferente (estritamente)

// Operadores de comparação
console.log("05)", 5 < 2); // menor que
console.log("06)", 5 > 2); // maior que
console.log("07)", 5 <= 2); // menor ou igual
console.log("08)", 5 >= 2); // maior ou igual

// Algumas operações de comparação

const d1 = new Date(0);
const d2 = new Date(0);
// Compara se as datas são iguais (endereços de memória)
console.log("09)", d1 === d2);
console.log("10)", d1 == d2);

// Compara se as datas são diferentes (endereços de memórias diferentes)
console.log("11)", d1.getTime() === d2.getTime());
console.log("12)", d1.getTime() == d2.getTime());

console.log("13)", undefined == null);
console.log("14)", undefined === null);
/**
 * comentarios:
 *  => Operadores relacionais: Compara seus operandos e retorna um valor booleano.
 *  => Ao comparar a referencia entre milisegundos retoran tanto true para
 *      igualdade e estritamente igualdade.
 *  => O mais aconselhado é usar o operador de igualdade estritamente, para nao haver conflitos de tipos.
 */
