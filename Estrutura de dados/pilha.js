var elementos = [];
var topo = -1;
const MAX = 10;

function push(num) {
  if (topo < MAX) {
    topo = topo + 1;
    elementos[topo] = num;
  }
  else {
    console.log("Pilha esta cheia")
  }
}

function estaVazia(){
  return topo == -1;
}

function pop() {
  if (topo != -1) {
    let num = elementos[topo];
    topo = topo -1;
    return num;
  }
  else {
    console.log("Pilha esta vazia")
  }
}

//Parte do codigo que usa pilha--//

var numDecimal = 10;
var resto;

console.log("Hora de empilhar")
while (numDecimal != 0){
  resto = parseInt(numDecimal % 2);
  push(resto);
  console.log(resto)
  numDecimal = parseInt(numDecimal / 2)
}

console.log("Desempilhando");
while(!estaVazia){
  console.log(pop());
}