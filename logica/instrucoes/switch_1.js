let frutas = 'uva';
switch (frutas) {
    case 'Laranjas':
        console.log('Laranjas custam r$0,59 o kilo');
        break;
    case 'mangas':
    case 'mamao':
        console.log("mamoes e mangas estao a r$2,79 o kilo");
        break;
    default:
        console.log(`Desculpe, estamos sem ${frutas}`);
}

/**
 * A condicional 'switch' avalia uma expressao combinando um valor da expressao para
 * case, e executa a instrução associadas a case.
 * 
 * sintaxe da estrutura!!!
 *  1. se a expressao for avaliada como mangas, executa o valor correspondente a case
 *  associada a mangas, caso for laranjas segue a mesma execução de acordo com o
 *  valor declarado.
 *  2. 'defaut' é uma palavra reservada que direciona o programa no caso de ser digi
 *  tado um valor inválido.
 */