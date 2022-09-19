//explicando alguns conceitos
console.log(typeof console);
console.log(typeof console.log);

const numeros = [1, 2, 3];
console.log(typeof numeros);

//adicionando elementos no array
numeros.push(4);
numeros.push(5);
numeros.push(10.98);

console.log(numeros);
console.log(numeros.length); //comprimento do array

/**
 * anotações;
 *  1. Explicando alguns conceitos o (console) é um objeto, enquanto o (log) é função
 *    sendo adicionado quando usamos a "notação.ponto" tambem sendo conceituado como
 *    "methodo"
 * 
 *  2. Arrays sao um tipo de objetos em especial, sao dinamicos e nao sao tipados, 
 *     isso quer dizer elementos podem ser ate objetos dentro do mesmo array. Como
 *     tambem o seu tamanho pode variar.
 * 
 * 3. Arrays nao podem ser usados com string em (indices) devem ser usados com numeros
 *    inteiros.
 */