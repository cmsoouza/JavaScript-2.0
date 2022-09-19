function composicao(...funcoes) { //operador rest 
    //curryng (lazy eval.)
    return function (valor) {
        return funcoes.reduce((acc, fn) => { //recebendo acumulado e a função
            return fn(acc) //chamada da funçao no acumulador
        }, valor)
    }
}


function gritar(texto) {
    return texto.toUpperCase() //metodo que converte string em "MAISCULAS"
}

function enfatizar(texto) {
    return `${texto}!!!!` //realizando interpolação com caracteres "!!!!"
}

function tornarLento(texto) {
    return texto.split('').join(' ') // metodos de (string) manipulando letras
}

const exagerado = composicao(
    gritar,
    enfatizar,
    tornarLento
)

const quaseExagerado = composicao(
    gritar,
    enfatizar
)
console.log(exagerado('cuidado com o buraco'));
console.log(quaseExagerado('para'))

console.log(composicao(
    gritar,
    enfatizar
)('eita'))