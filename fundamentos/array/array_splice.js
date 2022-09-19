const nomes = ['Davi', 'Maria', 'Joao', 'Cristian', 'Ricardo']
//console.log(nomes.splice(1, 1));

//itens removidos (metodo => splice)
const removidos = nomes.splice(2, 1)// a parti do indice 1 removeu 1 elemento
console.log(nomes, removidos);
console.log(nomes.length); //usando metodo splice modificamos a quantidade de elementos dentro do array principal

//proximo exemplo vamos remover 3 elementos e os substitui por outros dois
let arr = ['Eu', 'estudo', 'JavaScript', 'right', 'now']
arr.splice(0, 3, 'Lets', 'dance')
console.log(arr);
let excluidos = arr.splice(0, 2)
console.log(excluidos);