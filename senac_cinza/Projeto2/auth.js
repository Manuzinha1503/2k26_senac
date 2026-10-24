// auth.js - login simples, só front-end (usa o localStorage do navegador)

// Cria a conta e já deixa a pessoa logada
function criarConta(nome, email, senha) {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  if (usuarios.find(u => u.email === email)) {
    return 'Este e-mail já está cadastrado.';
  }
  usuarios.push({ nome, email, senha });
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  localStorage.setItem('logado', JSON.stringify({ nome, email }));
  return '';
}

// Confere e-mail e senha; devolve texto de erro (vazio = deu certo)
function entrar(email, senha) {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);
  if (!usuario) return 'E-mail ou senha incorretos.';
  localStorage.setItem('logado', JSON.stringify({ nome: usuario.nome, email }));
  return '';
}

function sair() {
  localStorage.removeItem('logado');
  location.href = 'index.html';
}

function usuarioLogado() {
  return JSON.parse(localStorage.getItem('logado'));
}

// Troca "Entrar" por "Olá, Nome" no botão do topo
document.addEventListener('DOMContentLoaded', () => {
  const texto = document.querySelector('.texto-login');
  const user = usuarioLogado();
  if (texto && user) texto.textContent = 'Olá, ' + user.nome.split(' ')[0];
});
