//interação com o for
const numeros = [1, 2, 356, 4, 5, 6, 11];

for (let i = 0; i < numeros.length; i++) { //condição para interação do algoritmo
    console.log(i, numeros[i]); //para nao mostra o indice (i) excluir da sentença
}


/**
 * anotações;
 * 1. Neste exercicio vamos ultilizar a estrutura de controle "for" que para arrays
 *    sao as mais usadas para percorre toda lista. Assim será exibido tanto os
 *    (elementos) quanto os (indices).
 * 
 * 2. No segundo cenario, criamos um array, depois criamos uma estrutura "for" passa
 *    ndo variavel (i = 0), que neste caso (0 = o primeiro "indice" do array), logo
 *    depois a variavel (i < 6), sendo (6 = ultimo elemento). Uma observação é que
 *    se eu adionar novos elementos a segunda estrutura ele nao aparecerá, somente 
 *    sendo possivel eu declarar a sentença (numeros.length) o comprimento do array
 *    deixando o mais flexivel.
 * 
 * 3. Passando no "console" a variavel criada e o array "numeros" para acessar a in
 *    teração do "i".
 *    
 */