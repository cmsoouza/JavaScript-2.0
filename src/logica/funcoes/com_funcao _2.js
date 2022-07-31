const d1 = 6;
const m1 = 5;
const a1 = 2021;

const d2 = 29;
const m2 = 08;
const a2 = 1987;

/* function exibirData1() {
    console.log(`Dia: ${d1}`); (função obsoleta)
    console.log(`Dia: ${m1}`);
    console.log(`Dia: ${a1}`);
} */

/* function exibirData2() {
    console.log(`Dia: ${d2}`); (função absoleta)
    console.log(`Dia: ${m2}`);
    console.log(`Dia: ${a2}`);
} */

function exibirData(d, m, a) {
    console.log(`${d}/${m}/${a}`);
}

//chamada da função
exibirData(d1, m1, a1);
exibirData(d1, m1, a1);
exibirData(d1, m1, a1);

exibirData(d2, m2, a2);
exibirData(d2, m2, a2);
exibirData(d2, m2, a2);

/**
 * anotações;
 * 1. Nesta estrutura vamos reduzir essas duas funções para somente uma.
 * 
 * 2. Os valores, dados, argumentos e paramentros sao sinonimos. Dados para instrução
 *    do algoritmo. (Dados de entrada)
 */