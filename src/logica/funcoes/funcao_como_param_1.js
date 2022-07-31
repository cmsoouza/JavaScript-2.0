function executar(funcao) {
    if(typeof funcao === 'function') {
        console.log(funcao());
    }
}

function bomDia() {
    return 'Bom dia';
}
//executar(3);
executar(bomDia);// <--- passando uma função como paramentro para outra

/**
 * anotações;
 * 1. Na segunda instrução ou função (bomDia) é usada para passar como paramentro para 
 *    funçao (executar).
 * 
 * 2. Lembrando que para invocar uma função precisamos passar o () para sua execução.
 */