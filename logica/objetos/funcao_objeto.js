//funcao construtora (classe) ->
function Produto() {
    console.log(this);
}

const p1 = new Produto()
console.log(p1);
console.log(typeof p1);

/**
 * anotações;
 * 1. "funcao construtora" é quando usada junto a operador (new) a constru
 *     ção de um novo (objeto), para definir uma função construtora precisa;
 * 
 *     # Definir o tipo de objeto atraves da escrita de uma função
 *     # Criar uma instancia do objeto utilizando (new)
 * 
 * 2. Para função construtora é recomendado colocar a primeira letra MAIUSCULA
 */