const nota1 = 2.8;
const nota2 = 4.8;
const nota3 = 1.2;

//menor nota entre as tres
function minimo(n1, n2) {
    return n1 <= n2 ? n1 : n2;
}
//calculando media entre tres notas
function mediaDasDuasMaiores(n1, n2, n3) {
    const menorNota = minimo(n1, minimo(n2, n3));
    if (menorNota === n1) {
        return (n2 + n3) / 2;
    } else if (menorNota === n2) {
        return (n1 + n3) / 2;
    } else {
        return (n1 + n2) / 2;
    }
}
//status do aluno
function mediaParaStatus(media){
    if(media >= 7){
        return 'Aprovado';
    } else if(media >= 4) {
        return 'Recuperação';
    } else {
        return 'Reprovado';
    }
}
const mediaFinal = mediaDasDuasMaiores(nota1, nota2, nota3);//armazenando função 'media'
const statusFinal = mediaParaStatus(mediaFinal);
console.log(`O resultado final do aluno é ${statusFinal}!`);


/**
 * anotações:
 * 1. Primeira função responsavel pela menor nota entre as notas
 * 
 * 2. Segunda função responsavel para saber a media entre as notas
 * 
 * 3. Terceira função responsavel para executar o status da 'media do aluno'
 * 
 * 4. Resumindo o conceito desse algoritmo usando 3 funções e distribuir a logica entre
 *    cada função, cada função possuindo sua resposanbilidade.
 */