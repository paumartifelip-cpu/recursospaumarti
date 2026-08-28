// Lógica de navegación multi-página (SPA Router), búsqueda y copiado

document.addEventListener('DOMContentLoaded', () => {
  // Estado global
  let currentCategory = 'all';
  let currentSearchQuery = '';

  // Elementos principales del DOM
  const homeView = document.getElementById('homeView');
  const detailView = document.getElementById('detailView');
  const videoGrid = document.getElementById('videoGrid');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const categoryPills = document.getElementById('categoryPills');
  const statsCounter = document.getElementById('statsCounter');
  const searchResultsSection = document.getElementById('searchResultsSection');
  const searchResultsList = document.getElementById('searchResultsList');
  const searchResultsTitle = document.getElementById('searchResultsTitle');
  const noResults = document.getElementById('noResults');
  const resetSearchBtn = document.getElementById('resetSearchBtn');

  // Elementos de la vista de detalle
  const detailBreadcrumb = document.getElementById('detailBreadcrumb');
  const detailHeader = document.getElementById('detailHeader');
  const detailSectionsNav = document.getElementById('detailSectionsNav');
  const detailSectionsChips = document.getElementById('detailSectionsChips');
  const detailContent = document.getElementById('detailContent');
  const detailPagination = document.getElementById('detailPagination');

  // Tema y Notificaciones
  const themeToggle = document.getElementById('themeToggle');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');

  // 1. Inicialización
  initTheme();
  initCategoryFilters();

  // 2. Router basado en hash (#/video/:id)
  window.addEventListener('hashchange', handleRouting);
  handleRouting();

  // ==========================================
  // ROUTER / NAVEGACIÓN
  // ==========================================
  function handleRouting() {
    const hash = window.location.hash || '#/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (hash.startsWith('#/video/')) {
      const videoId = hash.replace('#/video/', '').trim();
      const video = VIDEOS_DATA.find(v => v.id === videoId);
      if (video) {
        showDetailView(video);
      } else {
        window.location.hash = '#/';
      }
    } else {
      showHomeView();
    }
  }

  function showHomeView() {
    homeView.style.display = 'flex';
    detailView.style.display = 'none';
    document.title = 'Recursos de Vídeos — Pau Martí';
    renderHomeVideoCards();
  }

  function showDetailView(video) {
    homeView.style.display = 'none';
    detailView.style.display = 'flex';
    document.title = `${video.title} — Recursos Pau Martí`;
    renderVideoDetailPage(video);
  }

  // ==========================================
  // VISTA 1: HOME / CATÁLOGO DE VÍDEOS
  // ==========================================
  function initCategoryFilters() {
    const categories = ['all', ...new Set(VIDEOS_DATA.map(v => v.category).filter(Boolean))];
    categoryPills.innerHTML = '';

    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `pill ${cat === currentCategory ? 'active' : ''}`;
      btn.dataset.category = cat;
      
      if (cat === 'all') {
        btn.textContent = `Todos (${VIDEOS_DATA.length})`;
      } else {
        const count = VIDEOS_DATA.filter(v => v.category === cat).length;
        btn.textContent = `${cat} (${count})`;
      }

      btn.addEventListener('click', () => {
        currentCategory = cat;
        document.querySelectorAll('.category-pills .pill').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        renderHomeVideoCards();
      });

      categoryPills.appendChild(btn);
    });
  }

  function getCategoryTheme(cat) {
    if (!cat) return 'theme-blue';
    const c = cat.toLowerCase();
    if (c.includes('imagen') || c.includes('studio')) return 'theme-blue';
    if (c.includes('automatiz') || c.includes('negocio') || c.includes('servicio')) return 'theme-green';
    if (c.includes('contenido')) return 'theme-red';
    if (c.includes('modelo') || c.includes('flash')) return 'theme-yellow';
    return 'theme-blue';
  }

  function renderHomeVideoCards() {
    const query = currentSearchQuery.trim().toLowerCase();

    // Si hay búsqueda activa, mostramos resultados filtrados
    if (query) {
      renderSearchResults(query);
      return;
    }

    searchResultsSection.style.display = 'none';
    videoGrid.style.display = 'grid';
    noResults.style.display = 'none';

    // Filtrar vídeos por categoría seleccionada
    const filteredVideos = VIDEOS_DATA.filter(video => {
      return currentCategory === 'all' || video.category === currentCategory;
    });

    // Calcular estadísticas
    const totalPromptsInSelection = filteredVideos.reduce((sum, v) => {
      return sum + v.sections.reduce((sSum, s) => sSum + s.items.length, 0);
    }, 0);

    statsCounter.innerHTML = `Mostrando <strong>${filteredVideos.length} vídeos</strong> (${totalPromptsInSelection} prompts)`;

    videoGrid.innerHTML = '';
    filteredVideos.forEach((video, index) => {
      const totalPrompts = video.sections.reduce((sum, s) => sum + s.items.length, 0);
      const totalSections = video.sections.length;
      const themeClass = getCategoryTheme(video.category);

      const card = document.createElement('a');
      card.className = `video-grid-card ${themeClass}`;
      card.href = `#/video/${video.id}`;

      card.innerHTML = `
        ${video.thumbnail ? `
          <div class="card-thumbnail-container">
            <img src="${escapeHtml(video.thumbnail)}" alt="${escapeHtml(video.title)}" class="card-thumbnail-img" loading="lazy">
          </div>
        ` : ''}
        <div class="card-top-content">
          <div class="card-badge-row">
            <span class="card-cat-badge">${escapeHtml(video.category)}</span>
            <span class="card-prompts-badge">${totalSections > 1 ? `${totalSections} secciones • ` : ''}${totalPrompts} prompts</span>
          </div>
          <h3 class="card-video-title">${escapeHtml(video.title)}</h3>
          <p class="card-video-desc">${escapeHtml(video.description || 'Prompts y recursos completos asociados a este vídeo.')}</p>
        </div>
        <div class="card-bottom-row">
          <span class="card-action-btn">
            <span>Explorar recursos</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </span>
        </div>
      `;

      videoGrid.appendChild(card);
    });

    if (filteredVideos.length === 0) {
      videoGrid.style.display = 'none';
      noResults.style.display = 'flex';
    }
  }

  function renderSearchResults(query) {
    videoGrid.style.display = 'none';
    searchResultsSection.style.display = 'flex';
    searchResultsList.innerHTML = '';

    let totalMatchingPrompts = 0;

    VIDEOS_DATA.forEach(video => {
      const matchingSections = [];

      video.sections.forEach(section => {
        const matchingItems = section.items.filter(item => {
          return item.title.toLowerCase().includes(query) ||
            item.text.toLowerCase().includes(query) ||
            (item.badge && item.badge.toLowerCase().includes(query));
        });

        if (matchingItems.length > 0) {
          matchingSections.push({
            title: section.title,
            items: matchingItems
          });
          totalMatchingPrompts += matchingItems.length;
        }
      });

      if (matchingSections.length > 0) {
        const resultCard = document.createElement('div');
        resultCard.className = 'video-card';

        resultCard.innerHTML = `
          <div class="video-card-header">
            <div class="video-meta-top">
              <span class="category-badge">${escapeHtml(video.category)}</span>
              <a href="#/video/${video.id}" class="btn-back" style="font-size: 0.8rem; padding: 0.35rem 0.8rem;">
                <span>Ver página del vídeo →</span>
              </a>
            </div>
            <h3 class="video-title">${escapeHtml(video.title)}</h3>
          </div>
          <div class="video-card-body"></div>
        `;

        const body = resultCard.querySelector('.video-card-body');
        matchingSections.forEach(sec => {
          const secGroup = document.createElement('div');
          secGroup.className = 'section-group';
          if (sec.title && sec.title !== 'Prompt Principal') {
            const secTitle = document.createElement('h4');
            secTitle.className = 'section-title';
            secTitle.textContent = sec.title;
            secGroup.appendChild(secTitle);
          }

          const grid = document.createElement('div');
          grid.className = 'prompts-grid';
          sec.items.forEach(item => {
            grid.appendChild(createPromptBox(item));
          });

          secGroup.appendChild(grid);
          body.appendChild(secGroup);
        });

        searchResultsList.appendChild(resultCard);
      }
    });

    searchResultsTitle.textContent = `Resultados para "${query}" (${totalMatchingPrompts} prompts encontrados)`;
    statsCounter.innerHTML = `Encontrados <strong>${totalMatchingPrompts} prompts</strong>`;

    if (totalMatchingPrompts === 0) {
      searchResultsSection.style.display = 'none';
      noResults.style.display = 'flex';
    } else {
      noResults.style.display = 'none';
    }
  }

  // ==========================================
  // VISTA 2: DETALLE DEL VÍDEO (PÁGINA DEDICADA)
  // ==========================================
  function renderVideoDetailPage(video) {
    detailBreadcrumb.textContent = video.title;
    const themeClass = getCategoryTheme(video.category);
    detailHeader.className = `detail-header ${themeClass}`;

    // Header del vídeo
    detailHeader.innerHTML = `
      ${video.thumbnail ? `
        <div class="detail-thumbnail-container">
          <img src="${escapeHtml(video.thumbnail)}" alt="${escapeHtml(video.title)}" class="detail-thumbnail-img">
        </div>
      ` : ''}
      <div class="detail-header-meta">
        <span class="category-badge">${escapeHtml(video.category)}</span>
        ${video.docUrl ? `
          <a href="${video.docUrl}" target="_blank" rel="noopener noreferrer" class="detail-doc-link">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            <span>Documento original</span>
          </a>
        ` : ''}
      </div>
      <h1 class="detail-video-title">${escapeHtml(video.title)}</h1>
      <p class="detail-video-desc">${escapeHtml(video.description || '')}</p>
      ${video.rules && video.rules.length > 0 ? `
        <div class="detail-rules-box">
          <div class="detail-rules-title">💡 3 Reglas para que salgan mejor:</div>
          <ul class="detail-rules-list">
            ${video.rules.map(r => `<li>${escapeHtml(r)}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
    `;

    // Chips de navegación entre secciones (si hay más de 1 sección)
    if (video.sections && video.sections.length > 1) {
      detailSectionsNav.style.display = 'flex';
      detailSectionsChips.innerHTML = '';

      video.sections.forEach((sec, idx) => {
        const chip = document.createElement('a');
        chip.className = 'section-chip-link';
        chip.href = `#sec-${idx}`;
        chip.textContent = sec.title;
        chip.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.getElementById(`sec-${idx}`);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
        detailSectionsChips.appendChild(chip);
      });
    } else {
      detailSectionsNav.style.display = 'none';
    }

    // Contenido de Secciones y Prompts
    detailContent.innerHTML = '';
    video.sections.forEach((sec, idx) => {
      const secGroup = document.createElement('section');
      secGroup.className = 'detail-section-group';
      secGroup.id = `sec-${idx}`;

      const secTitle = document.createElement('h2');
      secTitle.className = 'detail-section-title';
      secTitle.textContent = sec.title;
      secGroup.appendChild(secTitle);

      const grid = document.createElement('div');
      grid.className = 'detail-prompts-grid';

      sec.items.forEach(item => {
        grid.appendChild(createPromptBox(item));
      });

      secGroup.appendChild(grid);
      detailContent.appendChild(secGroup);
    });

    // Paginación de vídeo anterior y siguiente
    renderPaginationFooter(video);
  }

  function renderPaginationFooter(currentVideo) {
    const currentIndex = VIDEOS_DATA.findIndex(v => v.id === currentVideo.id);
    const prevVideo = currentIndex > 0 ? VIDEOS_DATA[currentIndex - 1] : null;
    const nextVideo = currentIndex < VIDEOS_DATA.length - 1 ? VIDEOS_DATA[currentIndex + 1] : null;

    detailPagination.innerHTML = '';

    if (prevVideo) {
      const prevLink = document.createElement('a');
      prevLink.className = 'pagination-card prev';
      prevLink.href = `#/video/${prevVideo.id}`;
      prevLink.innerHTML = `
        <span class="pagination-direction">← Vídeo anterior</span>
        <span class="pagination-title">${escapeHtml(prevVideo.title)}</span>
      `;
      detailPagination.appendChild(prevLink);
    } else {
      detailPagination.appendChild(document.createElement('div'));
    }

    if (nextVideo) {
      const nextLink = document.createElement('a');
      nextLink.className = 'pagination-card next';
      nextLink.href = `#/video/${nextVideo.id}`;
      nextLink.innerHTML = `
        <span class="pagination-direction">Siguiente vídeo →</span>
        <span class="pagination-title">${escapeHtml(nextVideo.title)}</span>
      `;
      detailPagination.appendChild(nextLink);
    }
  }

  // ==========================================
  // COMPONENTE: RECUADRO DE PROMPT
  // ==========================================
  function createPromptBox(item) {
    const box = document.createElement('div');
    box.className = 'prompt-box';

    // Header del recuadro
    const header = document.createElement('div');
    header.className = 'prompt-box-header';

    const titleGroup = document.createElement('div');
    titleGroup.className = 'prompt-title-group';

    const title = document.createElement('h3');
    title.className = 'prompt-title';
    title.textContent = item.title;
    titleGroup.appendChild(title);

    if (item.badge) {
      const badge = document.createElement('span');
      badge.className = 'badge';
      if (item.badge.includes('⭐')) badge.classList.add('badge-star');
      if (item.badge.toLowerCase().includes('base')) badge.classList.add('badge-base');
      if (item.badge.toLowerCase().includes('truco')) badge.classList.add('badge-truco');
      badge.textContent = item.badge;
      titleGroup.appendChild(badge);
    }
    header.appendChild(titleGroup);

    // Acciones del recuadro
    const actionsGroup = document.createElement('div');
    actionsGroup.className = 'prompt-box-actions';

    if (item.linkUrl) {
      const linkBtn = document.createElement('a');
      linkBtn.className = 'btn-link-action';
      linkBtn.href = item.linkUrl;
      linkBtn.target = '_blank';
      linkBtn.rel = 'noopener noreferrer';
      linkBtn.innerHTML = `
        <span>Abrir enlace</span>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      `;
      actionsGroup.appendChild(linkBtn);
    }

    const copyBtn = document.createElement('button');
    copyBtn.className = 'btn-copy';
    copyBtn.setAttribute('aria-label', `Copiar ${item.title}`);
    copyBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
      <span>Copiar</span>
    `;

    copyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      copyToClipboard(item.text, copyBtn);
    });

    actionsGroup.appendChild(copyBtn);
    header.appendChild(actionsGroup);
    box.appendChild(header);

    // Contenido del prompt con resaltado de variables
    const content = document.createElement('div');
    content.className = 'prompt-content';
    content.innerHTML = formatPromptWithVariables(item.text);
    box.appendChild(content);

    return box;
  }

  // ==========================================
  // COPIAR AL PORTAPAPELES
  // ==========================================
  function copyToClipboard(text, btnElement) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        handleCopySuccess(btnElement);
      }).catch(() => {
        fallbackCopyText(text, btnElement);
      });
    } else {
      fallbackCopyText(text, btnElement);
    }
  }

  function fallbackCopyText(text, btnElement) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      handleCopySuccess(btnElement);
    } catch (err) {
      showToast('Error al copiar automáticamente. Selecciona y copia manualmente.');
    }
    document.body.removeChild(textArea);
  }

  function handleCopySuccess(btnElement) {
    if (!btnElement) return;
    const originalHTML = btnElement.innerHTML;
    btnElement.classList.add('copied');
    btnElement.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>¡Copiado!</span>
    `;

    showToast('¡Copiado al portapapeles!');

    setTimeout(() => {
      btnElement.classList.remove('copied');
      btnElement.innerHTML = originalHTML;
    }, 1800);
  }

  function showToast(msg) {
    toastMsg.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  }

  function formatPromptWithVariables(text) {
    const escaped = escapeHtml(text);
    return escaped.replace(/\[(.*?)\]/g, '<span class="variable-token">[$1]</span>');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ==========================================
  // EVENTOS DE BÚSQUEDA
  // ==========================================
  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value;
    clearSearchBtn.style.display = currentSearchQuery ? 'block' : 'none';
    renderHomeVideoCards();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    currentSearchQuery = '';
    clearSearchBtn.style.display = 'none';
    searchInput.focus();
    renderHomeVideoCards();
  });

  resetSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    currentSearchQuery = '';
    currentCategory = 'all';
    clearSearchBtn.style.display = 'none';
    document.querySelectorAll('.category-pills .pill').forEach(p => p.classList.remove('active'));
    if (document.querySelector('.category-pills .pill[data-category="all"]')) {
      document.querySelector('.category-pills .pill[data-category="all"]').classList.add('active');
    }
    renderHomeVideoCards();
  });

  // ==========================================
  // GESTIÓN DE TEMA CLARO / OSCURO
  // ==========================================
  function initTheme() {
    const savedTheme = localStorage.getItem('pm_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('pm_theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('pm_theme', 'dark');
      }
    });
  }
});
