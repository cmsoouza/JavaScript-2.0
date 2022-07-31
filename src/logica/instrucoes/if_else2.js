const hora = 22;
let saudacao;

if (hora < 12) {
    saudacao = 'Bom dia!';
} else if (hora < 18) {
    saudacao = 'Boa tarde!';
} else if (hora < 22) {
    saudacao = 'Boa noite!';
} else {
    saudacao = 'Muito tarde!';
}

console.log(saudacao);

/**
 * anotaçoes:
 * 1. Nessa estrutura se o primeiro if for 'true', o compilador passará para proxima
 *    instrução que sera else/if (expressao c/ condição) caso a primeira instrução ou
 *    as demais instrução (posteriores) forem falsas.
 * 2. Para cada instrução dependerá da outra se os resultados da afirmação forem 'true'
 *    ou 'false'.
 * 3. Por ultimo se as condiçõea acima (todas) forem falsa o compilador executara o 
 *    'else' final.
 * 4. Uma observação que toda a estrutura, todos os blocos sao uma unica unidade. Isso 
 *    quer dizer todos estao conectados.
 */