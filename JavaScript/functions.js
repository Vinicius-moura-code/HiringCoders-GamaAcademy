function soma(operadorA, operadorB) {
  var resultadoC = operadorA + operadorB;
  return resultadoC;
}
function olaMoura(nome) {
  console.log(`Olá vinicius, voce é o ${nome}`);
}

var resultadoSoma = soma(1,2);
console.log(resultadoSoma);
var resultadoNovoSoma = soma(10,20);
console.log(resultadoNovoSoma);
olaMoura('vinicius')