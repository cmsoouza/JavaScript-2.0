class Data {
    dia = 1
    mes = 1
    ano = 1970

    constructor(dia, mes, ano) { 
        this.dia = dia // referente ao param do (constructor)
        this.mes = mes
        this.ano = ano
    }

    exibir() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

const d1 = new Data();
d1.dia = 2
d1.mes = 2
d1.ano = 2021

const d2 = new Data(2, 2, 2023); //novos paramentros a parti do (constructor)

// ==============exibir objetos ==============
console.log(d1);
console.log(d2);

// ============= exibir a data formatada (interpolação) ================
console.log(d1.exibir());
console.log(d2.exibir());

// ============== exibir tipo dos estruturas (class) ====================
console.log(typeof d1);
console.log(typeof Data);

/**
 * anotações;
 * 1. Algumas diretrizes de class;
 *    # Heranças baseadas em prototipos moldes como uma "função construtora"
 *    # A parti de um (class) criamos novos (objetos)
 *    # Maneira mais simples na criação de (objetos)
 *    # Expressoes de (class) podem ser "anonimas" ou (explicitas)
 * 
 * 2. O corpo de uma (class) sao definidos os membros (constructores/Atributos)
 * 
 * 3. Para iniciar um objeto dentro criado pela class. precisamos;
 *    # declarar um (constructor);
 *    # so pode existir um metodo criado (constructor), mais de um volta "syntaxErro"
 *    # (this) todos os param relacionados ao (objeto) criado pelo (class)
 *    # "atributos" recebidos pelo (this) sao param definidos no (constructor)
 * 
 * 4. constructor;
 *    # Todos os atributos e objetos criados no constructor nao precisa estar definido
 *      no corpo da (class)
 *    # Como tambem passar um novo valor para o (objeto) criado irá executar tudo
 *      pelo param definidos no (constructor)
 */