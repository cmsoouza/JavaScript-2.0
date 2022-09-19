//loop com var
const funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}
funcs[2]();
funcs[4]();

//loop com let
const loop = [];

for (let c = 0; c < 10; c++) {
  loop.push(function () {
    console.log(c);
  });
}
loop[4]();
loop[8]();


/**
 * anotações;
 * 
 * 1.   Tipo (var) respeita o escopo global, respeita o escopo de função mais proxima
 *      Ja (let) respeita o escopo global, respeita o escopo de bloco mais proxima.
 * 
 * 2.   Neste caso o tipo de dado (var) desrespeitou os blocos ficando acessivel fora
 *      deles. (let) respeitou os blocos ficando acessivel dentro deles.
 * 
 * 3.   O exemplo acima demostra que adicionamos uma função para cada posição do array "funcs"
 *     e dentro dessa função, simplismente imprimimos o valor de "i". Em var indepentemente da
 *      posição do array, o valor de "i" será o mesmo que é 10. Em let, o valor de "i" será o que
 *      foi definido na posição do array.
 */
