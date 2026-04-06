// ============================================================
// app.js — Lógica da aplicação: Instruções Eleitorais 2026
// Vanilla JS, sem dependências externas
// ============================================================

'use strict';

// ── Constantes ────────────────────────────────────────────
const DATA_HOJE = new Date('2026-04-06');
const DIAS_PROXIMO = 30; // dias para considerar "próximo"

// ── Estado da aplicação ───────────────────────────────────
const state = {
  secaoAtiva: 'inicio',
  filtroCalendario: 'todos',
  propTabAtiva: 'permitido',
  searchQuery: '',
  installPrompt: null
};

// ── Inicialização ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  registrarServiceWorker();
  renderInicio();
  renderCalendario();
  renderCondutas();
  renderPropaganda();
  renderBusca();
  setupNavegacao();
  setupSearch();
  setupInstallBanner();
  verificarOffline();
  checkHash();
});

// ── Service Worker ────────────────────────────────────────
function registrarServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('[SW] Registrado:', reg.scope))
      .catch(err => console.warn('[SW] Falha:', err));
  }
}

// ── Verificar offline ─────────────────────────────────────
function verificarOffline() {
  const atualizar = () => {
    document.body.classList.toggle('offline', !navigator.onLine);
  };
  window.addEventListener('online', atualizar);
  window.addEventListener('offline', atualizar);
  atualizar();
}

// ── Navegação ─────────────────────────────────────────────
function setupNavegacao() {
  // Bottom nav (mobile)
  document.querySelectorAll('.bottom-nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const secao = btn.dataset.section;
      if (secao) navegarPara(secao);
    });
  });

  // Sidebar nav (desktop)
  document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const secao = link.dataset.section;
      if (secao) navegarPara(secao);
    });
  });
}

function navegarPara(secao) {
  state.secaoAtiva = secao;

  // Atualizar seções
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const alvo = document.getElementById('section-' + secao);
  if (alvo) alvo.classList.add('active');

  // Atualizar nav items
  document.querySelectorAll('.bottom-nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === secao);
  });
  document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.classList.toggle('active', link.dataset.section === secao);
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update hash
  history.replaceState(null, '', '#' + secao);
}

function checkHash() {
  const hash = window.location.hash.replace('#', '');
  const secoes = ['inicio', 'calendario', 'condutas', 'propaganda', 'busca'];
  if (hash && secoes.includes(hash)) {
    navegarPara(hash);
  } else {
    navegarPara('inicio');
  }
}

// ── Helpers de data ───────────────────────────────────────
function parseDateLocal(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function statusData(dataStr) {
  const data = parseDateLocal(dataStr);
  const diffDias = Math.floor((data - DATA_HOJE) / (1000 * 60 * 60 * 24));

  if (diffDias < 0)     return 'passado';
  if (diffDias === 0)   return 'hoje';
  if (diffDias <= DIAS_PROXIMO) return 'proximo';
  return 'futuro';
}

function diffDias(dataStr) {
  const data = parseDateLocal(dataStr);
  return Math.floor((data - DATA_HOJE) / (1000 * 60 * 60 * 24));
}

function formatDiffDias(dias) {
  if (dias < 0)  return `${Math.abs(dias)}d atrás`;
  if (dias === 0) return 'Hoje';
  if (dias === 1) return 'Amanhã';
  return `em ${dias}d`;
}

function getMesAbrev(dataStr) {
  const meses = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  const [,m] = dataStr.split('-').map(Number);
  return meses[m - 1];
}

function getDia(dataStr) {
  return dataStr.split('-')[2];
}

// ── Seção: Início ─────────────────────────────────────────
function renderInicio() {
  renderContador();
  renderProximosPrazos();
}

function renderContador() {
  const eleicao = parseDateLocal('2026-10-04');
  const diff = eleicao - DATA_HOJE;

  const totalDias  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const meses      = Math.floor(totalDias / 30);
  const diasRest   = totalDias % 30;

  const el = document.getElementById('countdown-container');
  if (!el) return;

  el.innerHTML = `
    <div class="countdown-box">
      <div class="countdown-title">⏳ Dias para o 1º Turno — 04/10/2026</div>
      <div class="countdown-numbers">
        <div class="countdown-unit">
          <span class="countdown-num">${totalDias}</span>
          <span class="countdown-label">dias</span>
        </div>
        <div class="countdown-unit" style="opacity:0.5;font-size:1.5rem;padding-top:0.3rem;">≈</div>
        <div class="countdown-unit">
          <span class="countdown-num">${meses}</span>
          <span class="countdown-label">meses</span>
        </div>
        <div class="countdown-unit">
          <span class="countdown-num">${diasRest}</span>
          <span class="countdown-label">dias</span>
        </div>
      </div>
    </div>
  `;
}

function renderProximosPrazos() {
  const el = document.getElementById('proximos-prazos-list');
  if (!el) return;

  // Pega próximos 6 eventos (futuros ou hoje)
  const proximos = APP_DATA.calendario
    .filter(ev => diffDias(ev.data) >= -7) // inclui os últimos 7 dias também
    .sort((a, b) => parseDateLocal(a.data) - parseDateLocal(b.data))
    .slice(0, 7);

  el.innerHTML = proximos.map(ev => {
    const dias = diffDias(ev.data);
    let badgeClass = '';
    if (dias < 0)       badgeClass = 'passado';
    else if (dias === 0) badgeClass = 'hoje';
    else if (dias <= 7)  badgeClass = 'urgente';

    return `
      <div class="prazo-item-mini" onclick="navegarPara('calendario')">
        <div class="prazo-dias-badge ${badgeClass}">
          ${formatDiffDias(dias)}
        </div>
        <div class="prazo-mini-text">
          <div class="prazo-mini-titulo">${ev.titulo}</div>
          <div class="prazo-mini-data">${ev.dataFormatada}</div>
        </div>
        <span style="color: var(--color-text-muted); font-size:0.9rem;">›</span>
      </div>
    `;
  }).join('');
}

// ── Seção: Calendário ─────────────────────────────────────
function renderCalendario() {
  renderCalendarioLista();
  setupFiltrosCalendario();
}

function setupFiltrosCalendario() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filtroCalendario = btn.dataset.filtro;
      renderCalendarioLista();
    });
  });
}

function renderCalendarioLista() {
  const container = document.getElementById('calendar-list');
  if (!container) return;

  let eventos = APP_DATA.calendario;

  // Filtrar
  if (state.filtroCalendario !== 'todos') {
    if (state.filtroCalendario === 'proximos') {
      eventos = eventos.filter(ev => {
        const d = diffDias(ev.data);
        return d >= 0 && d <= 60;
      });
    } else if (state.filtroCalendario === 'passados') {
      eventos = eventos.filter(ev => diffDias(ev.data) < 0);
    } else {
      eventos = eventos.filter(ev => ev.tipo === state.filtroCalendario);
    }
  }

  if (eventos.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem; color: var(--color-text-muted);">
        <div style="font-size:2.5rem;">📭</div>
        <p style="margin-top:0.5rem;">Nenhum evento encontrado</p>
      </div>
    `;
    return;
  }

  // Agrupar por mês
  const grupos = {};
  eventos.forEach(ev => {
    const mes = ev.mes;
    if (!grupos[mes]) grupos[mes] = [];
    grupos[mes].push(ev);
  });

  container.innerHTML = Object.entries(grupos).map(([mes, evs]) => `
    <div class="month-group">
      <div class="month-header">${mes}</div>
      ${evs.map(ev => renderCalendarioItem(ev)).join('')}
    </div>
  `).join('');

  // Adicionar event listeners para expand
  container.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = btn.closest('.calendar-item');
      const isExpanded = item.classList.toggle('expanded');
      btn.textContent = isExpanded ? 'Ver menos ▲' : 'Ver mais ▼';
    });
  });
}

function renderCalendarioItem(ev) {
  const status = statusData(ev.data);
  const classesItem = ['calendar-item'];
  if (ev.destaque) classesItem.push('destaque');
  if (status === 'passado') classesItem.push('passado');
  if (status === 'hoje') classesItem.push('hoje');
  if (status === 'proximo') classesItem.push('proximo');

  return `
    <div class="${classesItem.join(' ')}">
      <div class="cal-date-box">
        <span class="cal-day">${getDia(ev.data)}</span>
        <span class="cal-month-abbr">${getMesAbrev(ev.data)}</span>
      </div>
      <div class="cal-content">
        <div class="cal-titulo">${ev.icone} ${ev.titulo}</div>
        <div class="cal-descricao">${ev.descricao}</div>
        <div class="cal-meta">
          <span class="cal-tipo-badge tipo-${ev.tipo}">${tipoLabel(ev.tipo)}</span>
          <span class="cal-resolucao">${ev.resolucao}</span>
        </div>
        ${ev.descricao.length > 80 ? '<button class="expand-btn">Ver mais ▼</button>' : ''}
      </div>
    </div>
  `;
}

function tipoLabel(tipo) {
  const map = {
    vedacao: 'Vedação',
    prazo: 'Prazo',
    campanha: 'Campanha',
    eleicao: 'Eleição'
  };
  return map[tipo] || tipo;
}

// ── Seção: Condutas ───────────────────────────────────────
function renderCondutas() {
  const container = document.getElementById('condutas-list');
  if (!container) return;

  container.innerHTML = APP_DATA.condutas.map(cat => `
    <div class="conduta-card" id="conduta-${cat.id}">
      <div class="conduta-header" onclick="toggleConduta('${cat.id}')">
        <span class="conduta-icon">${cat.icone}</span>
        <span class="conduta-title">${cat.categoria}</span>
        <span class="conduta-chevron">▼</span>
      </div>
      <div class="conduta-body">
        <ul>
          ${cat.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');

  // Abrir o primeiro por padrão
  toggleConduta(APP_DATA.condutas[0].id);
}

function toggleConduta(id) {
  const card = document.getElementById('conduta-' + id);
  if (card) card.classList.toggle('open');
}

// ── Seção: Propaganda ─────────────────────────────────────
function renderPropaganda() {
  renderPropTabs();
  renderPropConteudo();
}

function renderPropTabs() {
  document.querySelectorAll('.prop-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.prop-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.prop-tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById('prop-' + tab.dataset.tab);
      if (target) target.classList.add('active');
      state.propTabAtiva = tab.dataset.tab;
    });
  });
}

function renderPropConteudo() {
  const d = APP_DATA.propaganda;

  // Permitido
  const elPerm = document.getElementById('prop-permitido');
  if (elPerm) {
    elPerm.innerHTML = `
      <ul class="prop-list">
        ${d.permitido.map(item => `<li><span class="li-icon">✅</span><span>${item}</span></li>`).join('')}
      </ul>
    `;
  }

  // Vedado
  const elVed = document.getElementById('prop-vedado');
  if (elVed) {
    elVed.innerHTML = `
      <ul class="prop-list">
        ${d.vedado.map(item => `<li><span class="li-icon">🚫</span><span>${item}</span></li>`).join('')}
      </ul>
    `;
  }

  // Internet
  const elInt = document.getElementById('prop-internet');
  if (elInt) {
    elInt.innerHTML = `
      <ul class="prop-list">
        ${d.internet.map(item => `<li><span class="li-icon">🌐</span><span>${item}</span></li>`).join('')}
      </ul>
    `;
  }

  // Rádio & TV
  const elRt = document.getElementById('prop-radiotv');
  if (elRt) {
    elRt.innerHTML = `
      <p style="font-size:0.85rem;color:var(--color-text-muted);margin-bottom:0.75rem;">${d.radioTV.descricao}</p>
      <div class="radiotv-card">
        <h4>📺 Horário Eleitoral Gratuito</h4>
        <div class="radiotv-grid">
          <div class="radiotv-item">
            <div class="rt-label">Início 1º Turno</div>
            <div class="rt-value">${d.radioTV.inicio1turno}</div>
          </div>
          <div class="radiotv-item">
            <div class="rt-label">Fim 1º Turno</div>
            <div class="rt-value">${d.radioTV.fim1turno}</div>
          </div>
          <div class="radiotv-item">
            <div class="rt-label">Início 2º Turno</div>
            <div class="rt-value">${d.radioTV.inicio2turno}</div>
          </div>
          <div class="radiotv-item">
            <div class="rt-label">Fim 2º Turno</div>
            <div class="rt-value">${d.radioTV.fim2turno}</div>
          </div>
        </div>
      </div>
    `;
  }
}

// ── Seção: Busca ──────────────────────────────────────────
function setupSearch() {
  const input = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear');

  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.trim();
    state.searchQuery = q;
    clearBtn.classList.toggle('visible', q.length > 0);
    if (q.length >= 2) {
      realizarBusca(q);
    } else {
      mostrarDicaBusca();
    }
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    state.searchQuery = '';
    clearBtn.classList.remove('visible');
    mostrarDicaBusca();
    input.focus();
  });
}

function renderBusca() {
  mostrarDicaBusca();
}

function mostrarDicaBusca() {
  const results = document.getElementById('search-results');
  if (!results) return;
  results.innerHTML = `
    <div class="search-hint">
      <span class="hint-icon">🔍</span>
      <p>Digite para buscar entre calendário, condutas vedadas, propaganda eleitoral, registro de candidatura e ilícitos eleitorais.</p>
      <p style="margin-top:0.5rem;font-size:0.8rem;">Mínimo de 2 caracteres</p>
    </div>
  `;
}

function realizarBusca(query) {
  const results = document.getElementById('search-results');
  if (!results) return;

  const q = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const encontrados = [];

  function matchText(texto) {
    return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(q);
  }

  function highlight(texto) {
    const qNorm = query.toLowerCase();
    const re = new RegExp(`(${escapeRegex(qNorm)})`, 'gi');
    return texto.replace(re, '<mark>$1</mark>');
  }

  // Buscar no calendário
  APP_DATA.calendario.forEach(ev => {
    if (matchText(ev.titulo) || matchText(ev.descricao) || matchText(ev.mes)) {
      encontrados.push({
        categoria: '📅 Calendário — ' + ev.dataFormatada,
        titulo: ev.titulo,
        excerpt: ev.descricao.slice(0, 120) + (ev.descricao.length > 120 ? '...' : ''),
        secao: 'calendario',
        texto_titulo: ev.titulo,
        texto_excerpt: ev.descricao.slice(0, 120) + (ev.descricao.length > 120 ? '...' : '')
      });
    }
  });

  // Buscar nas condutas
  APP_DATA.condutas.forEach(cat => {
    if (matchText(cat.categoria)) {
      encontrados.push({
        categoria: '🚫 Condutas Vedadas',
        titulo: cat.categoria,
        excerpt: cat.items[0],
        secao: 'condutas',
        texto_titulo: cat.categoria,
        texto_excerpt: cat.items[0]
      });
    }
    cat.items.forEach(item => {
      if (matchText(item)) {
        encontrados.push({
          categoria: '🚫 Condutas — ' + cat.categoria,
          titulo: item.slice(0, 80) + (item.length > 80 ? '...' : ''),
          excerpt: item,
          secao: 'condutas',
          texto_titulo: item,
          texto_excerpt: item
        });
      }
    });
  });

  // Buscar na propaganda
  [...APP_DATA.propaganda.permitido, ...APP_DATA.propaganda.vedado, ...APP_DATA.propaganda.internet].forEach(item => {
    if (matchText(item)) {
      encontrados.push({
        categoria: '📢 Propaganda Eleitoral',
        titulo: item.slice(0, 90) + (item.length > 90 ? '...' : ''),
        excerpt: item,
        secao: 'propaganda',
        texto_titulo: item,
        texto_excerpt: item
      });
    }
  });

  // Buscar no registro
  [...APP_DATA.registro.requisitos, ...APP_DATA.registro.documentos].forEach(item => {
    if (matchText(item)) {
      encontrados.push({
        categoria: '📋 Registro de Candidatura',
        titulo: item.slice(0, 90) + (item.length > 90 ? '...' : ''),
        excerpt: item,
        secao: 'inicio',
        texto_titulo: item,
        texto_excerpt: item
      });
    }
  });
  APP_DATA.registro.cargos.forEach(c => {
    if (matchText(c.cargo)) {
      encontrados.push({
        categoria: '📋 Registro — Cargos',
        titulo: c.cargo,
        excerpt: c.obs,
        secao: 'inicio',
        texto_titulo: c.cargo,
        texto_excerpt: c.obs
      });
    }
  });

  // Buscar nos fundos
  [...APP_DATA.fundos.fontesPermitidas, ...APP_DATA.fundos.vedacoes, ...APP_DATA.fundos.prazos].forEach(item => {
    if (matchText(item)) {
      encontrados.push({
        categoria: '💰 Fundos de Campanha',
        titulo: item.slice(0, 90) + (item.length > 90 ? '...' : ''),
        excerpt: item,
        secao: 'inicio',
        texto_titulo: item,
        texto_excerpt: item
      });
    }
  });

  // Buscar nos ilícitos
  APP_DATA.ilicitos.crimes.forEach(crime => {
    if (matchText(crime.nome) || matchText(crime.desc) || matchText(crime.pena)) {
      encontrados.push({
        categoria: '⚖️ Ilícitos Eleitorais',
        titulo: crime.nome,
        excerpt: crime.desc.slice(0, 100) + '...',
        secao: 'inicio',
        texto_titulo: crime.nome,
        texto_excerpt: crime.desc
      });
    }
  });

  // Buscar nos documentos
  APP_DATA.documentos.forEach(doc => {
    if (matchText(doc.titulo) || matchText(doc.subtitulo)) {
      encontrados.push({
        categoria: '📄 Documentos',
        titulo: doc.titulo,
        excerpt: doc.subtitulo,
        secao: 'inicio',
        texto_titulo: doc.titulo,
        texto_excerpt: doc.subtitulo
      });
    }
  });

  // Remover duplicatas simples
  const unicos = encontrados.filter((item, index, self) =>
    index === self.findIndex(t => t.titulo === item.titulo && t.categoria === item.categoria)
  );

  if (unicos.length === 0) {
    results.innerHTML = `
      <div class="search-hint">
        <span class="hint-icon">🔎</span>
        <p>Nenhum resultado para "<strong>${escapeHtml(query)}</strong>"</p>
        <p style="margin-top:0.5rem;font-size:0.8rem;">Tente palavras diferentes ou mais curtas</p>
      </div>
    `;
    return;
  }

  results.innerHTML = `
    <div class="search-count">${unicos.length} resultado${unicos.length !== 1 ? 's' : ''} para "${escapeHtml(query)}"</div>
    ${unicos.map(item => `
      <div class="search-result-item" onclick="navegarPara('${item.secao}')">
        <div class="sr-category">${item.categoria}</div>
        <div class="sr-title">${highlight(item.texto_titulo)}</div>
        <div class="sr-excerpt">${highlight(item.texto_excerpt)}</div>
      </div>
    `).join('')}
  `;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ── Install Banner ────────────────────────────────────────
function setupInstallBanner() {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    state.installPrompt = e;
    const banner = document.getElementById('install-banner');
    if (banner) banner.classList.add('visible');
  });

  const btnInstall = document.getElementById('btn-install');
  if (btnInstall) {
    btnInstall.addEventListener('click', async () => {
      if (!state.installPrompt) return;
      state.installPrompt.prompt();
      const { outcome } = await state.installPrompt.userChoice;
      if (outcome === 'accepted') {
        showToast('App instalado com sucesso! 🎉');
      }
      state.installPrompt = null;
      const banner = document.getElementById('install-banner');
      if (banner) banner.classList.remove('visible');
    });
  }

  const btnDismiss = document.getElementById('btn-dismiss-install');
  if (btnDismiss) {
    btnDismiss.addEventListener('click', () => {
      const banner = document.getElementById('install-banner');
      if (banner) banner.classList.remove('visible');
    });
  }
}

// ── Toast ─────────────────────────────────────────────────
function showToast(msg, duration = 3000) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// ── Exposição global para onclick inline ──────────────────
window.navegarPara = navegarPara;
window.toggleConduta = toggleConduta;
window.showToast = showToast;
