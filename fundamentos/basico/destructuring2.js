//ex1 Usando destructuring para obter o dados dos valores de um array
const [a] = [10];
console.log(a);

//ex2 ignorando valores de um array
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8, 3];
console.log(n1, n3, n5, n6);

//ex3
const [, [, nota]] = [
  [, 8, 8],
  [9, 6, 8],
];
console.log(nota);

//ex4 Analisando um array retornado de uma função
function f() {
  return [1, 2];
}
var c, d;
[c, d] = f();
console.log(c);
console.log(d);

//ex5 Usando destructuring para extrair dados randomicos na função
function rand({ min = 0, max = 1000 } = {}) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const obj = { max: 50, min: 40 };
console.log(rand(obj));
console.log(rand({ min: 955 }));
console.log(rand({})); //gera um numero aleatorio entre 0 e 1000
console.log(rand()); 
