const d1 = {
    dia: 25,
    mes: 07,
    ano: 2019,
    exibir: function () {
        return (`${this.dia}/${this.mes}/${this.ano}`)
    }
};

const d2 = {
    dia: 25,
    mes: 07,
    ano: 2020,
    exibir: function () {
        return (`${this.dia}/${this.mes}/${this.ano}`)
    }
};

const d3 = {
    dia: 25,
    mes: 07,
    ano: 2023,
    exibir: function () {
        return (`${this.dia}/${this.mes}/${this.ano}`)
    }
};

/**
 * anotaçoes:
 * 1. Percebemos que ao criar essa estruturas de "objetos" o (metodo = "exibir") se 
 *    encontra replicado varias vezes, impossiblitando o reuso de cada aplicação.
 */