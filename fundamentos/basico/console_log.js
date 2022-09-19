console.log('Cristian "Souza"');
console.log("Desenvolvedor 'Web'");
console.log(`BackEnd`);

console.log(35, 15.80, 'Cristian Souza');

/* outros exemplos com o console */
let x = 1
let y = 2
let z = 3

console.log('x:', x, 'y:', y, 'z:', z);
console.log({
    x,
    y,
    z
});

/* usando console com objetos  */
let user = {
    name: 'Jesse',
    contact: {
        email: 'codestackr@gmail.com'
    }
}

console.log(user);
console.log({user});

/* Variaveis dentro do log */
console.log('%s is %d years old.', 'Cristian', 34);

/* variedades de logs */
console.log('Console Log')
console.info('Console Info')
console.debug('Console Debug')
console.warn('Console Warn')
console.error('Console Error')


/**
 * anotações;
 * 1.   (console) é um objeto que defini a exibição dos dados no terminal e registra
 *      como solucionar problemas.
 * 
 * 2.   Percebemos a diferença entre as linhas (12' e 13') formas como devemos execu
 *      tar o console.
 * 
 * 3.   Cada registro pode ser executado de acordo com a definição do argumento que
 *      colocamos dentro do (console), neste caso o primeiro (console) na estrutura
 *      de (objeto) podemos imprimir propriedades dentro do objeto. Ja o segundo
 *      indentificará o objeto como "usuario" e imprimirá as propriedades dentro dele
 * 
 * 4.   Poderemos usar partes de variaveis dentro do console, como exemplo da linha
 *      (31') veja os exemplos;
 *          4.1 onde possuimos (%s) referecer a string com o valor inicial "Cristian"
 *          4.2 (%d) refere-se opção de digito incluida apos o valor inicial "34".
 * 
 * 5.   Ha variações em logs como mostrados entre as linhas (33' e 39') dependendo do
 *      navegado cada um possui uma caracteristicas diferente, o mais usado é o 
 *      (console.log)
 */