const produto = {
    nome: 'notebook',
    preco: 2600,
    desconto: 0.10,
    precoComDesconto: function() {
        return this.preco * (1 - this.desconto);
    }
};

console.log(produto.nome);
console.log(produto.precoComDesconto());

/**
 * anotações;
 * 1. Palavra reservada (this) se refere ao objeto atual em que o codigo está escrito
 *    pois quando criamos "funçoes construtoras" será mais seguro que os valores seta
 *    dos estará corretamente.
 * 
 */
