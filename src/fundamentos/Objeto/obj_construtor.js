//função define a estrutura do objeto gerado com o new
function Funcionario(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
}

//criando um objeto a partir do operador new
const funcionario1 = new Funcionario('João', 'Programador', 1000);
const funcionario2 = new Funcionario('Maria', 'Designer', 2000);
const funcionario3 = new Funcionario('Pedro', 'Gerente', 3000);

//acessando as informações do objeto criados
console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);

/**
 * anotações;
 * 1.   O operador new é utilizado para criar um objeto.
 * 
 * 2.   O operador new é uma forma de criar um objeto a partir de uma função construtora.
 *      Isso quer dizer quando chamamos o construtor significa chamar a função e criar um objeto.
 */