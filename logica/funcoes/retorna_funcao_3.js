//função com estrutura normal
function somar1(a, b) {
    return a + b;
}
console.log(somar1(5)); //NaN
console.log(somar1(5, 4));

//modelo Currying
function somar2(a) {
    return function (b) {
        return a + b;
    }
}
console.log(somar2(5)(4)); //aqui é direto referente os dois paramentros (a, b) da função

//quebra com duas chamadas dentro da variavel referente (a) e (b)
const somarMais10 = somar2(10)
console.log(somarMais10(5)); 
console.log(somarMais10(15));

/**
 * anotações;
 * 1. (linha '5) Na função "somar1" se encontra com resultado NaN pois foi passado
 *    menos paramentros para dois argumentos se tornando uma função "parcial".
 * 
 * 
 * 2. 'curryng é um processo de transformar uma função que espera varios argumentos
 *     em uma função que espera um unico argumento e retorna outra função curried.   
 */