const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callBackFilter(valor) {
  return valor > 10;
}
/* const numerosFiltrados = numeros.filter(callBackFilter)
console.log(numerosFiltrados);
 */

//outro exemplo usando arrow function
const numerosFiltrados = numeros.filter((valor) => valor > 10);
console.log(numerosFiltrados);

//1) callback (retonar pessoas que tem o nome com 5 letras)
const pessoas = [
  {
    nome: "Luiz",
    idade: 62,
  },
  {
    nome: "Maria",
    idade: 23,
  },
  {
    nome: "Eduardo",
    idade: 55,
  },
  {
    nome: "Letícia",
    idade: 19,
  },
  {
    nome: "Rosana",
    idade: 32,
  },
  {
    nome: "Walace",
    idade: 55,
  },
];

const filtroDeIdade = pessoas.filter(function (obj) {
  return obj.nome.length >= 5;
});

console.log(filtroDeIdade);

//2) Arrow function (retorne pessoas com mais de 50 anos)
const pessoasCom50 = pessoas.filter((obj) => obj.idade > 50);
console.log(pessoasCom50);

//3) Retorne pessoas cujo nome termina com "a"
const nomeTerminaComA = pessoas.filter(function (obj) {
  return obj.nome.toLocaleLowerCase().endsWith("a");
});

console.log(nomeTerminaComA);

/**
 * anotações importantes;
 * 1.   toLocaleLowerCase() retorna o valor da string em minúsculas,
 *      de acordo com qualquer mapeamento de caixa de texto específico da localidade.
 *
 * 2.   endsWith() O método endsWith() indica se uma string termina com determinados caracteres,
 *      retornando true ou false.
 */
