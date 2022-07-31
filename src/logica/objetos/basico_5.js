const cliente = {
    codigo: 0001,
    nome: 'Cristian',
    status: 'Ativo',
    endereço: {
        logradouro: 'Rua ABC',
        numero: 36,
        complemento: 'Apto 101 Bloco b',
        pontosRef: [
            {nome: 'Hospital x', muitoProximo: true},
            {nome: 'Shopping x', muitoProximo: false},
        ]
    },
    nomeFilhos: ['Ana', 'Carlos', 'Pedro']
};

console.log(cliente['endereço'] ['logradouro']);
console.log(cliente.endereço.numero);
console.log(cliente.endereço.pontosRef[0]); //acessando array
console.log(cliente.endereço.pontosRef[0].muitoProximo);
console.log(cliente.endereço.pontosRef[1].muitoProximo);

/**
 * anotações;
 * 1. Em estruturas mais 'dinamicas sobre "objetos" conseguimos criar e acessar infor
 *    mações com mais precisao dentro de cada (atributo).
 * 
 * 2. Outra forma de acessar os dados dos "atributos" tambem é por ([]) alem da nota-
 *    ção ponto. Em vez de usar numero de "indices" usamos nome associados ao valor
 *    "objetos" podem ser chamados de "arrays associativos".
 */