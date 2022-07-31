//sem sintaxe estrutura de uma variavel
console.log(19.9 * 0.6);

//estrutura de variaveis
let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto); //precedencia entre ()
console.log(precoComDesconto);

//estruturas com concatenações
let nome = 'Caderno'; //String (texto)
let categoria = 'Papelaria';
console.log('Produto: ' + nome + ', Categoria: ' + categoria 
+ ', Preço: ' + preco 
+ ', Desconto: ' + desconto);
