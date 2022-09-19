//Paramentro (nota) -> Retorno (Conceito)

function notaParaConceito(nota) {
    switch(Math.ceil(nota)) {//metodo para elevar a nota
        case 10: return 'A+';
        case 9: return 'A';
        case 8: return 'B+';
        case 7: return 'B';
        case 6: return 'C+';
        case 5: return 'C';
        case 4: return 'D+';
        case 3: return 'D';
        case 2: return 'E+';
        case 1: return 'E';
        case 0: return 'F';
        default: return null;
    }
}
console.log(`O conceito do Cristian é ${notaParaConceito(9.8)}`);
console.log(`O conceito do Cristian é ${notaParaConceito(5.6)}`);
console.log(`O conceito do Cristian é ${notaParaConceito(0.2)}`);
console.log(`O conceito do Cristian é ${notaParaConceito(-0.2366)}`);
console.log(`O conceito do Cristian é ${notaParaConceito('texto')}`);


/**
 * anotações;
 * 1. (Switch) é uma condição de comparação de forma mais organizada, evita repetições.
 *    ja o (default) é usado para que nenhum dos casos passados que se encontra na
 *    instrução cai nele. 'Se passarmos um valor diferente do que se encontra nas
 *    instruções da função ele será exibido.
 * 
 * 2. Conceito de função está ligado ao paradigma 'procedural'.
 * 
 * 3. Essa estrutura demostra a forma de reuso do algoritmo passado para
 *    instrução da função.
 * 
 * 4. Objetivo dessa função é passar o conceito pela nota passada.
 */