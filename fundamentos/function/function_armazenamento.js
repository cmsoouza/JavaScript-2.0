//Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3);

//Armazenando uma função arrow em uma variável 
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 4));

//retorno implícito
const subtracao = (a, b) => a - b   //se não tiver retorno, o retorno é undefined
console.log(subtracao(2, 5));

//retorno implícito com apenas um parâmetro
const imprimir2 = a => console.log(a);
imprimir2('Legal!!!'); //Passando uma string como paramentro!!!