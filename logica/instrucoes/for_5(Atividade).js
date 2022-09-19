for (let i = 'a'; i!= 'aaaaaaa'; i += 'a') {
    console.log(i);
}
console.log('Fim!!!');

/**
 * Passando uma string como valor do inicializador de entrada necessita ser diferente
 * da quantidade maxima de "a" que foi colocado como meta no exercicio. Logo depois 
 * incrementamos essa variavel para cada laço passado dentro do for ate quando chegar
 * ela saltará para fora do laço e terminará o loop.
 * 
 * Nessa estrutura as 'string' estará controlando o laço.
 */