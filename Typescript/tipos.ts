// Bollean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = 'Vini Moura';

// Array
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [23, 28, 45];

// Tuple
let jogadores: [string, number, boolean];
jogadores = ['Vini', 5, true];

// Enum
enum StatusAprovacao {
  Aprovado = '001',
  Pendente = '002',
  Rejeitado = '003'
}
const StatusDaAprovado: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
const retornoDaApi: any[] = [123, 'Vitor', false];
const retornoDaApi2: any = {
  // .........
};

// Void
function printarNaTela(msg: string): void {
  console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function create(Objecto: object) {
  // ...
}
//create('Vini'); // Da error

// Never
function loopInfinity(): never {
  while (true) { };
}
function erro(msg: string): never {
  throw new Error(msg);
}
function falha(): never {
  return erro('Algo deu errado');
}

// Union Types
function exibirNota(nota: number | string | boolean) {
  console.log(`A nota ${nota}`);
}
exibirNota('10');
exibirNota(10);
exibirNota(true);


// Alias
type Funcionario = {
  nome: string;
  sobrenome: string;
  dataDeNascimento: Date;
}
// type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario [] = [{
  nome: 'Vini',
  sobrenome: 'Rebelo',
  dataDeNascimento: new Date ()
}, {
  nome: 'Rebelo',
  sobrenome: 'Vini',
  dataDeNascimento: new Date ()
}];

function tratarFuncionarios( funcionarios: Funcionario[] ) {
  for ( let funcionario of funcionarios) {
    console.log('Nome do funcionario', funcionario.nome);
  }
}

let altura: number | null = 1.6;
altura = null;

type Contato = {
  nome: string ;
  telefone1: string | number ;
  telefone? : string ;
}

const contato: Contato = {
  nome: 'Vini',
  telefone1: '46486468',
}


// Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();

const input = <HTMLInputElement> document.getElementById("numero1") ;
console.log(input.value)
