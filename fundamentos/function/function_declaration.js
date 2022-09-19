//Function Declaration
function imprimirSoma(a, b) {
    console.log(a + b);
}
imprimirSoma(2, 3);
imprimirSoma(2); // TypeError: imprimirSoma(2) is not a function
imprimirSoma(2, 3, 4, 5, 6); // TypeError: imprimirSoma(2, 3, 4, 5, 6) demais argumentos sao ignorados
imprimirSoma(); // TypeError: imprimirSoma() is not a function


//Funtion Com return
function soma(a = 1, b = 1) {
    return a + b;
}
console.log(soma(2, 3));
console.log(soma(2));
console.log(soma()); // Declarando um valor padrão para a e b