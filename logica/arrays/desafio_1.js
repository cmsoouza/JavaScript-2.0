const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = numeros.length - 2; i >=0; i -= 2){
    console.log(numeros[i]);
}
console.log('Fim!!!');

/**
 * anotações;
 * 1. Neste exercicio precisamos em ordem descrente pular de dois
 *    em dois os elementos desse array començando pelo penultimo
 *    elemento.
 * 
 * 2. Criamos uma variavel "i" para acessar o comprimento do array
 *    declarando (-2) pois e a quantidade dos ultimos elementos do
 *    array (ponto de partida).
 * 
 * 3. (i tem que ser maior ou igual "0") sendo que vai tentar pecorre
 *    ate o ultimo numero, podendo ser que nao encontre.
 * 
 * 4. Decremento sendo que ("i" vai receber um atribuição subtrativa
 *    de 2 em 2).
 * 
 * 5. No console acessamos o array numeros e o indice (i) ao qual
 *    queremos acessar.
 */