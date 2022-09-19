//usando let no escopo global e local
let numero = 1;
{
    let numero = 3;
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);

/**
 * anotações;
 * 1.   var possuem escopo global e função
 * 
 * 2.   let possuem escopo global e função e de bloco
 * 
 * 3.   Em observações let nao pode ser redeclarada, mais pode ser reatribuida
 *      var pode ser redeclarada e reatribuida
 */