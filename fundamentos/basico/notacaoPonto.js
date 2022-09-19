console.log(Math.ceil(6.1));

const obj1 = {}
obj1.nome = 'colher'
obj1['nome'] = 'copo' // sobreescreve o valor anterior
console.log(obj1.nome);

// Função Factory
function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...');
    }
}

// Criando objeto através da função factory
const obj2 = new Obj('cadeira');
const obj3 = new Obj('mesa');

console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();

