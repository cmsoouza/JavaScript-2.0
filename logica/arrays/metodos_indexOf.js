let arr = [-1, 0, 1, 2, 3]
console.log(arr.indexOf(-1)); 
console.log(arr.indexOf(-2));

let arr2 = [-1, 0, 1, 2, 3]
console.log(arr2.indexOf(3, 2));
console.log(arr2.indexOf(4, -2));
/**
 * anotações;
 * 1. Primeiro array retorna (0) pois (-1) é o primeiro indice do array.
 * 
 * 2. segundo paramentro array retorna (-1) pois NAO EXISTE (-2) dentro do array.
 * 
 * 3. No segundo array agora com dois paramentros inicia no "eleemento de pesquisa"
 *    retorna (-4).
 * 
 * 4. Na segunda passagem com dois paramentros o "ponto inicial" é negativo (-2)
 *    visto que procuramos o "elemento de pesquisa = 4" como nao se encontra dentro
 *    do array ele retorna (-1) pois os valores depois do (0) sao "negativos"
 */