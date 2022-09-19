const arraysMetodo = [1, 2, 3, 4, 5, 8]

arraysMetodo.splice(1, 2);
console.log(arraysMetodo);

console.log(arraysMetodo.pop());
console.log(arraysMetodo.pop());
console.log(arraysMetodo);



/**
 * anotações;
 * 1. " splice() " metodo que alterar o conteudo da "array" ou removendo. Por exemplo
 *    passando o primeiro valor (1 = elemento) e o segundo valor (2 = quantidade de 
 *    elementos) que serao excluidos.
 * 
 * 2. " pop() " metodo que remove um elemento.
 * 
 * 3. Quando passamos os valores excluidos dentro do "console" retorna os "elementos"
 *    que foram excluidos.
 * 
 * 4. Lembrando que esses metodos causam alterações no arrays e nao criam outro array
 *    como o metodo " concat() ".
 */
