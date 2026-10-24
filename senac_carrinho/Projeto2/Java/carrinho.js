// carrinho.js
// Lógica do carrinho de compras usando localStorage.
// Inclua este arquivo em TODAS as páginas do site (produtos, index, carrinho.html)

const CHAVE_CARRINHO = 'eimi_carrinho';

function getCarrinho() {
  return JSON.parse(localStorage.getItem(CHAVE_CARRINHO)) || [];
}

function salvarCarrinho(carrinho) {
  localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinho));
  atualizarContadorCarrinho();
}

function adicionarAoCarrinho(produto) {
  // produto = { id, nome, preco, imagem }
  const carrinho = getCarrinho();
  const existente = carrinho.find(item => item.id === produto.id);

  if (existente) {
    existente.quantidade += 1;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }

  salvarCarrinho(carrinho);
  mostrarAvisoAdicionado(produto.nome);
}

function removerDoCarrinho(id) {
  const carrinho = getCarrinho().filter(item => item.id !== id);
  salvarCarrinho(carrinho);
  if (typeof renderizarCarrinho === 'function') renderizarCarrinho();
}

function alterarQuantidade(id, delta) {
  const carrinho = getCarrinho();
  const item = carrinho.find(item => item.id === id);
  if (!item) return;

  item.quantidade += delta;
  if (item.quantidade <= 0) {
    return removerDoCarrinho(id);
  }

  salvarCarrinho(carrinho);
  if (typeof renderizarCarrinho === 'function') renderizarCarrinho();
}

function calcularTotalCarrinho() {
  return getCarrinho().reduce((total, item) => total + item.preco * item.quantidade, 0);
}

function contarItensCarrinho() {
  return getCarrinho().reduce((soma, item) => soma + item.quantidade, 0);
}

function atualizarContadorCarrinho() {
  const link = document.querySelector('.link-carrinho');
  if (!link) return;

  // cria a bolinha com o número se ainda não existir
  let contador = document.getElementById('contador-carrinho');
  if (!contador) {
    contador = document.createElement('span');
    contador.id = 'contador-carrinho';
    link.appendChild(contador);
  }

  const qtd = contarItensCarrinho();
  contador.textContent = qtd;
  contador.style.display = qtd > 0 ? 'block' : 'none';
}

function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Pequeno aviso visual ao adicionar um item
function mostrarAvisoAdicionado(nome) {
  const aviso = document.createElement('div');
  aviso.textContent = `${nome} adicionado ao carrinho!`;
  aviso.style.cssText = `
    position: fixed; bottom: 20px; right: 20px;
    background: #2f2f2f; color: #fff; padding: 12px 20px;
    border-radius: 6px; font-size: 14px; z-index: 9999;
    opacity: 0; transition: opacity 0.3s ease;
  `;
  document.body.appendChild(aviso);
  requestAnimationFrame(() => { aviso.style.opacity = '1'; });
  setTimeout(() => {
    aviso.style.opacity = '0';
    setTimeout(() => aviso.remove(), 300);
  }, 1800);
}

// Atualiza o contador assim que a página carrega
document.addEventListener('DOMContentLoaded', atualizarContadorCarrinho);
