const data = {
    dia: 25,
    mes: 07,
    ano: 2021,
    exibir: function () {
        return (`${this.dia}/${this.mes}/${this.ano}`)
    }
};

data.dia = 11;
console.log(data.exibir());

/**
 * anotações:
 * 1. criando um objeto com acesso a 'alteração do dia" e acessando os "atributos"
 *    com o palavra reservada "this" que "referenciar o atributo do objeto".
 */