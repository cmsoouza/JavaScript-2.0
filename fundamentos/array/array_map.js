//1) Segundo exemplo (Valores da raiz quadrada)
let numbers = [1, 4, 9];
let root = numbers.map(Math.sqrt);

console.log(root);

//2) Retornando (Dobre os numeros)
const numeros = [5, 50, 80, 1, 2, 3, 5, 6];
const numerosEmDobro = numeros.map(function (valor, indice, array) {
  return valor * 2;
});

console.log(numerosEmDobro);

//3) Com este código você pode converter o dado original para um array com arrays dentro

const pessoas = [{
    nome: 'Luiz',
    idade: 62
  },
  {
    nome: 'Maria',
    idade: 23
  },
  {
    nome: 'Eduardo',
    idade: 55
  },
  {
    nome: 'Letícia',
    idade: 19
  },
  {
    nome: 'Rosana',
    idade: 32
  },
  {
    nome: 'Wallace',
    idade: 47
  },
];

let arr = pessoas.map(function (obj) {
  return Object.keys(obj).map(function (key) {
    //delete obj.idade; (deletando informações)
    return obj[key]
  });
});/* arrow function */

console.log(arr);

//4) Adicionando uma chave id em cada objeto (id)
const comIds = pessoas.map(function (obj, indice) {
  //usando operador new para nao alterar o array original
  const newObj = {...obj};
  newObj.id = indice;
  return newObj
  /* obj.id = indice;
  return obj; */
});

console.log(comIds);
console.log(pessoas);


/**
 * anotações;
 * 1. neste array mapeia numeros e cria um novo array contendo
 *    o valor da rais quadrada de cada numero do primeiro array.
 * 
 * 2. Na segunda aplicação usamos o algoritmo para dobrar os valores
 *    dos elementos do "array". 
 * 
 * 3. converter array de objetos para array de arrays Ou seja, alterar a 
 *    estrutura de dados interna de um array utilizamos a função map de 
 *    JavaScript para nos auxiliar a percorrer todos os itens do primeiro array
 *    e compor o array final.
 */