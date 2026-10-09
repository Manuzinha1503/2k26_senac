// carrinho.js
// Lógica do carrinho de compras usando localStorage.
// Inclua este arquivo em TODAS as páginas do site (produtos, index, carrinho.html)

const CHAVE_CARRINHO = 'eimi_carrinho';

function getCarrinho() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_CARRINHO)) || [];
  } catch (error) {
    return [];
  }
}

function salvarCarrinho(carrinho) {
  localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinho));
  atualizarContadorCarrinho();
  if (typeof renderizarCarrinho === 'function') renderizarCarrinho();
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
}

function calcularTotalCarrinho() {
  return getCarrinho().reduce((total, item) => total + item.preco * item.quantidade, 0);
}

function contarItensCarrinho() {
  return getCarrinho().reduce((soma, item) => soma + item.quantidade, 0);
}

function atualizarContadorCarrinho() {
  let contador = document.getElementById('contador-carrinho');
  if (!contador) {
    const linkCarrinho = document.querySelector('.link-carrinho');
    if (!linkCarrinho) return;
    contador = document.createElement('span');
    contador.id = 'contador-carrinho';
    contador.className = 'contador-carrinho';
    contador.setAttribute('aria-live', 'polite');
    linkCarrinho.appendChild(contador);
  }

  const qtd = contarItensCarrinho();
  contador.textContent = qtd;
  contador.style.display = qtd > 0 ? 'inline-flex' : 'none';
}

function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function renderizarCarrinho() {
  const carrinho = getCarrinho();
  const container = document.getElementById('carrinho');
  const mensagemVazia = document.getElementById('mensagemVazia');
  const resumo = document.getElementById('resumoCarrinho');

  if (!container) return;

  if (!carrinho.length) {
    container.style.display = 'none';
    if (mensagemVazia) mensagemVazia.style.display = 'block';
    if (resumo) resumo.style.display = 'none';
    return;
  }

  if (mensagemVazia) mensagemVazia.style.display = 'none';
  container.style.display = 'block';
  if (resumo) resumo.style.display = 'block';

  container.innerHTML = carrinho.map(item => `
    <div class="item-carrinho">
      <img src="${item.imagem}" alt="${item.nome}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 8px; margin-right: 12px;">
      <div class="info-item">
        <h3>${item.nome}</h3>
        <p>Preço unitário: ${formatarPreco(item.preco)}</p>
      </div>
      <div class="quantidade">
        <button type="button" data-acao="diminuir" data-id="${item.id}" aria-label="Diminuir quantidade">-</button>
        <input type="number" min="1" value="${item.quantidade}" data-id="${item.id}" aria-label="Quantidade de ${item.nome}">
        <button type="button" data-acao="aumentar" data-id="${item.id}" aria-label="Aumentar quantidade">+</button>
      </div>
      <div class="preco-item">${formatarPreco(item.preco * item.quantidade)}</div>
      <button type="button" class="btn-remover" data-id="${item.id}">Remover</button>
    </div>
  `).join('');

  const subtotal = carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
  const frete = subtotal > 0 ? 35 : 0;
  const total = subtotal + frete;

  const subtotalEl = document.getElementById('subtotal');
  const freteEl = document.getElementById('frete');
  const totalEl = document.getElementById('total');
  if (subtotalEl) subtotalEl.textContent = formatarPreco(subtotal);
  if (freteEl) freteEl.textContent = formatarPreco(frete);
  if (totalEl) totalEl.textContent = formatarPreco(total);

  container.querySelectorAll('[data-acao]').forEach(botao => {
    botao.addEventListener('click', event => {
      const { id, acao } = event.currentTarget.dataset;
      alterarQuantidade(id, acao === 'aumentar' ? 1 : -1);
    });
  });

  container.querySelectorAll('input[data-id]').forEach(input => {
    input.addEventListener('change', event => {
      const id = event.target.dataset.id;
      const novaQuantidade = Number(event.target.value) || 1;
      const item = getCarrinho().find(produto => produto.id === id);
      if (!item) return;
      const diferenca = novaQuantidade - item.quantidade;
      alterarQuantidade(id, diferenca);
    });
  });

  container.querySelectorAll('.btn-remover').forEach(botao => {
    botao.addEventListener('click', event => {
      removerDoCarrinho(event.currentTarget.dataset.id);
    });
  });
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

function inicializarCarrinho() {
  atualizarContadorCarrinho();
  if (typeof renderizarCarrinho === 'function') renderizarCarrinho();
}

// Atualiza o contador assim que a página carrega
document.addEventListener('DOMContentLoaded', inicializarCarrinho);
