const PI = 3.141592;
let raio = 10;//pode tambem iniciar com [const]
let areaCirc = PI * raio * raio;

console.log('O valor da área é ' + areaCirc + 'm2.');

areaCirc = Math.PI * raio * raio;//usando o objeto [MATH] para definir PI
console.log('O valor da área é ' + areaCirc + 'm2.');
console.log(typeof Math);