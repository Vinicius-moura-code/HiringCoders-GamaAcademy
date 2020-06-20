interface Usuario{
  nome: string;
  email: string;
  adress? : string;
}

function getUser(): Usuario {
  return {
    nome: 'Vini',
    email: 'viniciusrebelo487@gmail.com'
  }
}

function setUser(usuario: Usuario) {
  // ...
}
