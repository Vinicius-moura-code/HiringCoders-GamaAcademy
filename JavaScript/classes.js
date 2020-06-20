class Matematica {
  soma(valorA, valorB,){
    return valorA + valorB;
  }
  subtracao(valorA, valorB,){
    return valorA - valorB;
  }
  multiplicacao(valorA, valorB,){
    return valorA * valorB;
  }
  divisao(valorA, valorB,){
    return valorA / valorB;
  }
}

var instaciaMatematica = new Matematica;
var resultado = instaciaMatematica.soma(4,7);

console.log(resultado);