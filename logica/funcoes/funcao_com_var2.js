function subtrair(a, b) {
    return a - b;
}
const subtracao = subtrair;
console.log(subtrair(6, 4));
console.log(subtracao(5, 2));

//erro de atribuição
subtracao = 3;
console.log(subtracao(1, 3));

/**
 * anotações;
 * 1. No primeiro exemplo chamando pelo nome da variavel (subtração) para acessar
 *    a função (subtrair).
 * 
 * 2. Acessando a função (subtrair) declarando os valores na chamada da função.
 * 
 * 3. Na linha 19' exibi um erro de atribuição de variavel ao qual a variavel nao 
 *    pode ser assinada se ja é uma função.
 */