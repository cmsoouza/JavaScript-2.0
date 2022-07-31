function Data(dia = 1, mes  = 1, ano = 2022) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.exibir = function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

//criando novos objetos
const d1 = new Data(); //funcao com paramentros (padrao)
d1.ano = 1970; //atribuindo novo valor para paramentro (padrao)

const d2 = new Data(24, 12, 2023); //novo objeto criado
const d3 = new Data(25, 12, 2024);

//exibindo os novos objetos
console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());

//exibindo valores padroes
console.log(d1);
console.log(d2);
console.log(d3);

/**
 * anotações;
 * 1. Nessa "função construtora" declaramos o (this) para cria novos atributos para
 *    receber os paramentros definidos na função (Data). Armazenando a funcao Data()
 *    numa (const) podemos exibir no terminal o "metodo" (exibir).
 * 
 * 2. criando novos (objetos) a parti da "função construtora";
 *    # linha 12 e 13
 *    # Cuidado ao nao referencia o (this) no "metodo", pois no momento da execução
 *      do codigo ele poderá acessar o "paramentro definido padrao" e nao o objeto
 *      criado.
 */