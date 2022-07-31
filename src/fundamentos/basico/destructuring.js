//novo recurso do ES6
const pessoa = {
  nome: "Ana",
  idade: 5,
  endereco: {
    logradouro: "Rua ABC",
    numero: 1000,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);

//criando novas variaveis na estrutura do destruturing
const { nome: n, idade: i } = pessoa;
console.log(n, i);

//atributos que nao possuim valor
const { sobrenome, beleza = true } = pessoa;
console.log(sobrenome, beleza);

//acessando valores de um objeto dentro de outro
const {
  endereco: { logradouro, numero },
} = pessoa;
console.log(logradouro, numero);
