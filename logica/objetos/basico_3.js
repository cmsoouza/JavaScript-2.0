const data = {
    dia: 1,
    mes: 10,
    ano: 2021,
}

//alterando valores
data.dia = 24;
data.mes = 12;

console.log(data);
console.log(data.dia);
console.log(data.mes);
console.log(data.ano);

//template string
console.log(`${data.dia}/${data.mes}/${data.ano}`);

/**
 * anotações:
 * 1. Neste exemplo conseguimos alterar os valores dos "atributos".
 * 
 * 2. Conseguimos realizar "interpolações" em array declarando no (console)
 */