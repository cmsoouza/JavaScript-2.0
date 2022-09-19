function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function () {
            return (`${this.dia}/${this.mes}/${this.ano}`)
        }
    };
}

const d1 = criarData(20, 01, 2019)
const d2 = criarData(20, 02, 2020)
const d3 = criarData(20, 03, 2021)

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());

/**
 * anotações;
 * 1. usando a função para interar junto ao (objeto) percebemos a facilidade
 *    de acessar varios (objetos) usando os paramentros da função retornando com
 *    seus "atributos". 
 * 
 * 2. A função (criarData()) nao é uma "funçao construtora" quando se encontra em
 *    um "objeto estrutura de dados" pois nao possui uma "instanciação". Aqui é
 *    uma funçao (factory function), uma fabrica de objetos. onde passamos paramentro
 *    e temos um retorno do (objeto) criado, de modo que podemos obter varias formas
 *    diferentes de um (objeto) com a mesma estrutura.
 * 
 * 3. Os "paramentros" definidos no inicio da "função" sao os mesmo "paramentros"
 *    declarados com o valor da chave dos "atributos" passado no (objeto). Tal
 *    paramentros tambem podem ser declarados na função sozinho sem precisar dos 
 *    "atributos".
 * 
 * 4. Para "metodos" podemos tira a palavra chave (function) e tambem tirar os " ; "
 *    mantendo somente o algortimo dentro de seu "escopo".
 */