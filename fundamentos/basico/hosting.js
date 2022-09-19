//demostração simples de hosting
console.log('a = ', a)
var a = 2
console.log('a = ', a)


//realizando os teste de hosting de variaveis dentro de funções
function teste() {
    console.log('a = ', a)
    var a = 2
    console.log('a = ', a)
}
teste();
console.log('a = ', a);

/**
 * anotações;
 * 1.   O termo hosting é utilizado para definir o conceito em que variaveis durante a fase de compilação
 *      mas permanecem exatamente onde voçe as declarou.
 * 
 * 2.   Em js uma variavel pode ser declarada apos ou antes de sua utilização.
 * 
 * 3.   Usando let e const antes de ser declaradas resultará em erro. Variavel se encontra numa "zona morta'
 *      isso quer dizer que não pode ser acessada fora da do escopo da função.
 * 
 * 4.   O hosting funciona bem como outro tipos de dados e variaveis. Variaveis podem ser inicializadas e usadas
 *      antes de serem declaraadas. Para evitar bugs sempre declare as variaveis antes de serem usadas no inicio
 *      de cada escopo.   
 */