//break
for(let i = 1; i <= 5; i++){
    if(i === 3){
        break;
    }
    console.log(i);
}

for(let i = 1; i <= 5; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
}

/**
 * A palavra 'continue' ela termina a atual iteração do laço que se encontra e conti
 * nua a execução deste laço com a proxima iteração.
 * 
 * Sintaxe da estrutura;
 *  1. Na primeira execução do loop ele sai do loop atual e passa para proximo decla
 *     rando o 'break' em sua condição.
 *  2. diferente do 'break' o 'continue' nao termina o laço completamente, em vez di
 *     sso ele:
 *        2.1 volta a condição, em um laço do tipo 'while'
 *        2.2 volta a expressao, atualizando-a, em um laço do tipo 'for'.
 */