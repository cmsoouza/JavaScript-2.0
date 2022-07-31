/**
 * [1,1] [1,2] [1,3]
 * [2,1] [2,2] [2,3]
 * [3,1] [3,2] [3,3]
 */

for (let i = 1; i <= 3; i++) {
    let linha = '';
    for (let j = 1; j <= 3; j++) {
        linha += `[${i}, ${j}]`;
    }
    console.log(linha);
}

/**
 * Enquanto i for menor ou igual a 3(somando 1 à i apos cada iteração), faça;
 * 1. declare a linha como string vazia
 * Enquanto j for menor ou igual a 3(somando 1 à j apos cada iteração), faça;
 * 2. atribuir à linha o resultado da concatenação das strings: "[", i(em string),
 * "," j(em string) e"]".
 * Invoque a função 'console.log' passando, como primeiro argumento, 'linha'. 
 */