function hello(name) {
    //isto aqui é um escopo
}

function foo() {
    //Escopo de foo
    function bar() {
        //Escopo de bar
    }
}

//exemplo1
function getMessage() {
    let message = 'Oi!'
    message
}
//console.log(message);

//exemplo2
function myFunc() {
    let cat = 'Sheila'
    const age = 3
    var color = 'cinza'
    console.log(age)
}

function myFunc2() {
    let color = 'branco'
    const age = 5
    console.log(age)
}
myFunc();
myFunc2();

/* //declarando variavel com o mesmo nome
const greet = 'oi';
const greet = 'ola';

console.log(greet); */

//exemplo3
const bunny = 'Sheila'

function bunnyWatch() {
    const bunny = 'pingo'
    console.log(bunny)
}
bunnyWatch();
console.log(bunny);

/**
 * anotações:
 * 1. o termo "escopo" podemos comparar como a palavra "universo", isso quer dizer
 *    onde estamos escrevendo nossos codigos. Porem existem variveis (local) e 
 *    (global) e dependendo de onde estamos definindo essas variaveis é conhecido
 *    como "contexto lexico". 
 */