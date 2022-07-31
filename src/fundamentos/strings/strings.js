let aspaSimples = 'Olá'
let aspaDupla = "Como voçê"
let backticks = `está?`

console.log(aspaSimples, aspaDupla, backticks);

/* metodos em js */
const nome = 'Cristian'
console.log(nome.charAt(10))//retorna vazio
console.log(nome.charCodeAt(2))//table-unicode
console.log(nome.charAt(2));//retorna o elemento do indice indicado
console.log(nome.substring(2));//inclui o indice definido ate o final do elemento
console.log(nome.substring(0, 3));
console.log(nome.indexOf('i')); //retorna o indice
console.log('Meu nome é ' .concat(nome).concat("!"));
console.log(nome.replace('i', 'o'));/* atenção! */
console.log(nome.toUpperCase());/* atenção! */
console.log(nome);

console.log('Augusta, Maria, Kassia, Pedro, Cristian'.split(','));//array

//Tipos dinamicos
let message  = 'hello!';
message = 123

console.log(message);


/**
 * anotações:
 * 1.   conceitos sobre string;
 *          1.1 Existem tres tipos de citações ("", '', ``)
 *          1.2 Em js dados textuais sao armazenados em "strings"
 *          1.3 Em js as string sao imutaveis isso quer dizer que 
 *              nao sao modificadas mais substituidas.
 * 
 * 2.   l'14 podemos integrar metodos com strings usando concat()
 * 
 * 3.   Atenção! algumas observações importantes os metodos "replace()" e "toUppercase()"
 *      nao modificam as string originais chamadas, retornam somente novas strings.
 * 
 * 4.   l'23/26 Em um tipo de dado uma variavel pode em um momento ser uma string
 *      outro momento podendo ser um number.
 */