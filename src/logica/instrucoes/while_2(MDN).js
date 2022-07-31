var n = 0;
var x = 0;

while (n < 7) {
  n++;
  x += n;
}

console.log('mostrarResultado: ' + x);

/**
 * Depois da primeira passagem: n = 1 e x = 1
   Depois da segunda passagem: n = 2 e x = 3
   Depois da terceira passagem: n = 3 e x = 6 (para entendermos para cada
   loop o x estar sendo atribuido com o valor de "n" Ja o "n" para cada loop
   está sendo incrementado).
 */