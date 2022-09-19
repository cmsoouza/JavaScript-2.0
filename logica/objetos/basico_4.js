const user = {
    email: 'cmsouzaac@outlook.com'
}

//setando os membros do objeto
user.nome = 'Cristian Souza';
user.senha = 123;

console.log(user.email);
console.log(user.nome); //undefined
console.log(user);


/**
 * anotações:
 * 1. Outro fato importante na linguagem JS é que podemos alterar a definição
 *    dos atributos, setando os membros do (objeto)
 * 
 * 2. Quando nao existe um "atributo" no objeto a "execução do codigo" retornar
 *    "undefined".
 */