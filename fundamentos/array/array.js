//criando uma matriz vazia duas formas
let arr = new Array('Cristian')
let arr2 = ['Ana', 'Davi']
console.log(arr);
console.log(arr2);

//outro exemplo 
let frutas = ['Maça', 'Laranja', 'Pêra']
console.log(frutas);

//Seus indices
const nomes = ['Eduardo', 'Cristian', 'Maria', 'Kassia', 'Joana']
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
console.log(nomes[3]);
console.log(nomes[4]);

//Substituindo elementos pelo indices
nomes[2] = 'Carlos'
console.log(nomes);

//contagem total dos elementos do array
const timeFutebol = ['Leonardo', 'Fabiano', 'Ronaldo', 'Renato', 'Adriano']
console.log(timeFutebol.length);

//armazenar elementos de qualquer tipo
let tipos = ['Maça', {nome: 'Cristian'}, true, function() {console.log('hello')}];
console.log(tipos[1].nome);

tipos[3]();