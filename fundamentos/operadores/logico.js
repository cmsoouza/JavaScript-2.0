function compras(trabalho1, trabalho2) {
  const comprarSoverte = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  const comprarTv32 = trabalho1 != trabalho2;
  const manterSaudavel = !comprarSoverte;

  //condições de retorno (objeto)
  return { comprarSoverte, comprarTv50, comprarTv32, manterSaudavel };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));

/**
 * comentarios;
 *  => Existem quatros operados lógicos:
 *      => && - e (and)
 *      => || - ou (or)
 *      => ! - não (not)
 *  => Apesar de serem operadores logicos podem ser aplicados em qualquer tipo de dados
 *  => Nesta aplicação usando os operadores foi passados para função compras que retorna um objeto.
 *     assim quando foi atribuido os valores "true" eles irao retornar verdadeiro ou falso de acordo
 *     com a condição de cada operador.
 *
 * ****links para pesquisa;
 *  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressões_Lógicas
 *  https://javascript.info/logical-operators
 *
 *  */
