const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1);

//2) estrutura principal declarativa
const prod2 = {
    nome: 'Cristian Souza',
    idade: 35
}

console.log(`Eu tenho ${prod2.idade} anos`);

//3) Declaraçao em Json
'{"nome": "Cristian Souza", "idade": 35}' //json