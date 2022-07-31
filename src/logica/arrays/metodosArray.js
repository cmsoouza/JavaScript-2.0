//array principal
const numero = [1, 2, 3, 4, 5, 4];

numero[0] = 100;
//atribuindo novos elementos
const numeros2 = numero.concat(7, 8, 9);
numero.push(6);

console.log(numero.indexOf(4));
console.log(numero.indexOf(4, 4));
console.log(numero);
console.log(numero.join(' - '));
console.log(numero.concat(7, 8, 9));
console.log(numero.includes(10));


/**
 * anotações;
 * 1. Os metodos sao interações que ocorre em "arrays";
 *    *concat() une dois arrays e retorna um novo arra
 *    *indexOf() busca no array retorando o indice na primeira ocorrencia   
 *    *join()une todos os elementos de um array dentro de um string
 *    *push()adiciona um ou mais elementos no fim de um array e retorna o comprimento
 *    *includes()determina se um array contem um determinado elementos retornando 
 *     "true" ou "false".
 * 
 * 2. "Elemento de pesquisa" elemento a ser pesquisado no array.
 * 
 * 3. "Ponto Inicial" indice para iniciar a procura. Isso quer dizer se o indice for
 *     for maior ou igual ao tamanho do array retorna (-1), significa que o intem 
 *     nao será procurado.
 */