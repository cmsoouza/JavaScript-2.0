//1) undefined valor indefinido
let valor
console.log(valor);

//2) ausencia de valor
valor = null
console.log(valor); 
/* console.log(valor.toString()) erro! */ 

const produto = {}
console.log(produto.preco);

produto.preco = 3.50
console.log(produto);

produto.preco = undefined /* evite atriubir undefined */
console.log(!!produto.preco);