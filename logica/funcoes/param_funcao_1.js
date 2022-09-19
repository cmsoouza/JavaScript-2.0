function somar(a = 0, b = 0, c = 0, d = 0) {
    return a + b + c + d;
}
console.log(somar(1, 2, 3, 4, 5, 6));//interpretador ignora
console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3));//undefined
console.log(somar(1, 2));
console.log(somar(1));
console.log(somar());
console.log('Fim!!!');
/**
 * anotações;
 * 1. Quando definimos paramentros para função no qual suprimimos os paramentros passados
 *    na chamada da função (undefined), retornando (NaN)
 * 
 * 2. Para solucionar esse problema passamos explicitamente o "0" para cada paramentro
 *    definido na função.
 */