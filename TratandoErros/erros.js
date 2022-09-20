function tratarErroELancar(erro) {
  // throw new Error('...')
  // throw 10
  // throw true
  // throw 'mensagem'
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date(),
  };
}

function imprimirNome(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log("Final");
  }
}

const obj = { nome: "Cristian Souza" };
imprimirNome(obj);

/**
 *
 *  anotações:
 *
 *  links para consultas: https://www.w3schools.com/js/js_errors.asp
 *
 *  1. Ao criarmos uma função com erro(), utilizamos duas instruções para tratamento do codigo.
 *     "tryCatch";
 *      => try: Define um bloco de codigo para ser executado (para tentar)
 *      => Catch: instrução define um bloco de código para lidar com qualquer erro.
 *      => throw: instrução define um erro personalizado.
 *      => finally: instrução define um bloco de código para ser executado
 *         independentemente do resultado.
 *
 *  2. l'6 a l11 mostra o comportamento do throw retornando informações do 'obj()'
 *
 *
 *
 */
