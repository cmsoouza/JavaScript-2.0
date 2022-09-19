//Operador new para criar um objeto
console.log(typeof Object);
console.log(typeof new Object);

//Padroes de instancias que podem ser utilizados para criar objetos
const Cliente = function() {}
console.log(typeof Cliente);
console.log(typeof new Cliente);

//criar instancias a partir de uma classe
class Produto {} //es6
console.log(typeof Produto);
console.log(typeof new Produto);

//criar instancias a partir de uma função
function CriarProduto() {}
console.log(typeof CriarProduto);
console.log(typeof new CriarProduto);
console.log(typeof Produto);
console.log(typeof new Produto());