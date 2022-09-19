let nome = 'Cristian';//operador [=] é de atribuição
let sobrenome = 'Souza';
const nacionalidade = 'Brasileiro';

console.log(nome);
console.log(sobrenome);
console.log(nacionalidade);

//com essa senteça pode ocasionar possiveis efeitos colaterais na aplicação
cpf = 96768088220;
console.log(cpf);

//outros exemplos de atribuinções e remoção de dados
const pessoa  = {
    nome: 'Daniel',
    idade: 30,
    filhos: false
}
console.log(pessoa);

//atribuindo novos valores a constantes
pessoa.nome = 'Daniel Rodrigues';
pessoa.idade = 31;
pessoa.filhos = true

console.log(pessoa);

/* //erro de atribuição a uma constante
pessoa = {
    nome: 'Cristian',
    idade: 33,
    filhos: 18,
    profissao: 'Desenvolvedor Backend'
}
console.log(pessoa); */



/**
 * anotações:
 * 1. Temos o emprego de constantes (const) e variaveis (let) em (objetos) e declara
 *    ções.
 * 
 * 2. Ao redeclarar ou atribuir um novo valor a uma const que ja foi definida
 *    retorna "erro de syntaxe".
 */