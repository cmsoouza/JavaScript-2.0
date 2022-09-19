//percorrendo os elementos
const notas = [7, 8, 3, 5, 10, 9,8, 8]

//Percorrendo array (simples)
for (let nota of notas) {
    console.log(nota);
}

//Percorrendo os elementos
var valores = '';
for (let nota of notas) {
    valores += nota + ' ';
}
console.log(valores);

//percorrendo indices
var indices = '';
for (let indice in notas) {
    indices += indice + ' '; 
}
console.log(indices);
/**
 * anotações:
 * 1. "Forech" percorra todos os elementos do array, assim neste exemplo vamos criar
 *    duas estrutura com "for" sem depender da estrutura original do "for" que seria
 *    com as variaveis.
 * 
 * 2. Primeira estrutura é a forma mais simples para percorre um array sem anexo de
 *    variaveis.
 * 
 * 3. Nas duas estruturas do "for" iremos percorre "indices e elementos" ordenando
 *    eles na horizontal, na primeira sentença criamos a variavel (let = nota) perco
 *    rrendo o array "notas". Depois passamos a variavel (valores += notas + ' ')
 *    sendo que a variavel "valores" receberá uma "atribuição aditiva" no qual nota
 *    ira concatenar por causa das " " vazias.
 * 
 * 4. No segunda estrutura irá acessar os (elementos) e a 3° estrutura os "indices"
 * 
 * 
 */