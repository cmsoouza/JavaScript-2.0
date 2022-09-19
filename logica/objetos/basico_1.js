const numeros = ['Ana', 'Cristian', 'Davi', 'Fatima'];

const produto = {
    nome: 'Cristian',
    idade: 34,
    peso: 94
};
console.log(typeof produto);
console.log(produto['nome']);
console.log(numeros[2]); //acessando pelo indice

//usando a "notação ponto"
console.log(produto.nome);
console.log(produto.idade);
console.log(produto.peso);

/**
 * anotações;
 * 1. Dentro do objetos as "propriedades" tambem sao conhecidas como "atributos" 
 *    (caracteristicas) de um determinado (objeto) e tambem as "funçoes" que sao 
 *    (metodos) tambem conceituados de "açoes" dentro de (objetos). Tanto os 
 *    "atributos/metodos = membros".
 * 
 * 2. Atraves da 'notação ponto' é possivel acessarmos "propriedades" de objetos
 *    dentro do (console).
 * 
 * 3. Objetos sao manipuladores de dados, e desde as suas familiaridades (objetos)
 *    podem ser (strings, arrays) e ate as (APIs).
 */