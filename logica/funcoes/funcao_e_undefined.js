function semRetorno() {
    console.log('Função foi chamada!');
}

let a = 3;
let b = a * 7 + 10 - semRetorno();//NaN
let c = semRetorno();
let d;
console.log(a, b, c, d);

/**
 * anotações;
 * 1. utilizando função como paramentro para sem retorno.
 * 
 * 2. atribuindo uma função (sem retorno) na variavel "b" retorna resul
 *    tado NaN.
 * 
 * 3. Mesmo que a função nao retorne nada em sua declaração a mesma
 *    pode retorna (undefined). 
 */