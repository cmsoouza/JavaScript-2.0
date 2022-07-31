//              0    1    2   3    4    5       (indices)
const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8];
console.log(notas); //exibindo todo array no console
console.log(notas[3]); //indice
console.log(notas[5]); 
console.log(notas[10]); //indice que nao existe

//alterando elementos
notas[4] = 8.7; //atribuindo ao indice o (novo) elemento
console.log(notas);

/**
 * anotações:
 * 1. arrays sao listas de objetos que contem multiplos valores armazenados
 *    em uma lista, podemos ser tambem indicados por indices.
 * 
 * 2. Nesta estrutura analisamos como se comporta um arrays, podemos adicionar
 *    e deletar um elemento. (linha'9)
 * 
 * 3. Na (const = notas) nao pode se modificado (regra da const) porem dentro da estrutura
 *    do array pode ser modificado ou deletado (linha '8)
 */