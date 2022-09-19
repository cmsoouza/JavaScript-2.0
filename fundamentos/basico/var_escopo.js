//declarando var em escopo local
{
  {
    {
      {
        var sera = "Será???";
      }
    }
  }
}
console.log(sera);

// Language: javascript, chamando variavel de escopo de função 
function teste() {
    var local = 4;
    console.log(local);
}
teste();

//declarando variaveis de escopo global
var myName = 'Carlos';

function showName() {
    var myLastName = 'Souza';
    console.log('Meu nome é ' + myName);
    //modificando variavel de global
    myName += ' ' + myLastName;
}
showName();
console.log('Meu nome é ' + myName);
