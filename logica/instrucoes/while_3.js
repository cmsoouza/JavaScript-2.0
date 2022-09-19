const futuro = Date.now() + 2000;
let quantidade = 0;

while (Date.now() < futuro) {
    quantidade++;
}
console.log('Qtde: ' + quantidade);

/**
 * O método Date.now() retorna o número de milisegundos decorridos desde 1 de 
 * janeiro de 1970 00:00:00 UTC.
 * 
 * Nessa estrutura podemos ver mais uma execução do while e sua condição/rotina
 * criamos uma const que recebe metodo "Date.now" + os 2 minutos (que demora)
 * para o codigo ser executado.
 * 
 * Logo depois temos a variavel let (quantidade) que recebe o valor '0'.
 * enquanto a condição de "date" for menor que a operação da const (futuro)
 * incremente e execute o laço.
 * */