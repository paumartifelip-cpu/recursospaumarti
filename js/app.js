// Lógica de interactividad, búsqueda y copiado al portapapeles

document.addEventListener('DOMContentLoaded', () => {
  // Estado de la aplicación
  let currentCategory = 'all';
  let currentSearchQuery = '';
  
  // Elementos del DOM
  const videosList = document.getElementById('videosList');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const categoryPills = document.getElementById('categoryPills');
  const indexNavPills = document.getElementById('indexNavPills');
  const totalVideosCount = document.getElementById('totalVideosCount');
  const promptCountEl = document.getElementById('promptCount');
  const noResults = document.getElementById('noResults');
  const resetSearchBtn = document.getElementById('resetSearchBtn');
  const themeToggle = document.getElementById('themeToggle');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');

  // 1. Inicialización de Tema Claro / Oscuro
  initTheme();

  // 2. Render inicial de la navegación e índice
  initIndexNav();
  initCategoryFilters();

  // 3. Render inicial de la lista
  renderVideos();

  // ==========================================
  // GESTIÓN DE TEMA
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

  // ==========================================
  // ÍNDICE Y FILTROS
  // ==========================================
  function initIndexNav() {
    indexNavPills.innerHTML = '';
    VIDEOS_DATA.forEach((video, index) => {
      const pill = document.createElement('a');
      pill.className = 'nav-pill';
      pill.href = `#video-${video.id}`;
      pill.textContent = `${index + 1}. ${video.title.replace(/^Vídeo:\s*/i, '').replace(/^Prompts\s*—\s*Vídeo\s*/i, '')}`;
      indexNavPills.appendChild(pill);
    });
  }

  function initCategoryFilters() {
    // Extraer categorías únicas
    const categories = ['all', ...new Set(VIDEOS_DATA.map(v => v.category).filter(Boolean))];
    totalVideosCount.textContent = VIDEOS_DATA.length;

    categoryPills.innerHTML = '';
    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `pill ${cat === currentCategory ? 'active' : ''}`;
      btn.dataset.category = cat;
      if (cat === 'all') {
        btn.innerHTML = `Todos los vídeos (${VIDEOS_DATA.length})`;
      } else {
        const count = VIDEOS_DATA.filter(v => v.category === cat).length;
        btn.innerHTML = `${cat} (${count})`;
      }

      btn.addEventListener('click', () => {
        currentCategory = cat;
        document.querySelectorAll('.category-pills .pill').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        renderVideos();
      });

      categoryPills.appendChild(btn);
    });
  }

  // ==========================================
  // RENDERIZADO DE VÍDEOS Y PROMPTS
  // ==========================================
  function renderVideos() {
    videosList.innerHTML = '';
    let visiblePromptsTotal = 0;
    let visibleVideosTotal = 0;

    const query = currentSearchQuery.trim().toLowerCase();

    VIDEOS_DATA.forEach(video => {
      // Filtrar por categoría
      if (currentCategory !== 'all' && video.category !== currentCategory) {
        return;
      }

      // Filtrar por búsqueda en video o en sus prompts
      const videoMatchesQuery = !query || 
        video.title.toLowerCase().includes(query) ||
        (video.description && video.description.toLowerCase().includes(query)) ||
        (video.tags && video.tags.some(t => t.toLowerCase().includes(query)));

      // Procesar secciones y filtrar prompts que coincidan
      const matchingSections = [];

      video.sections.forEach(section => {
        const matchingItems = section.items.filter(item => {
          if (!query) return true;
          return videoMatchesQuery ||
            item.title.toLowerCase().includes(query) ||
            item.text.toLowerCase().includes(query) ||
            (item.badge && item.badge.toLowerCase().includes(query));
        });

        if (matchingItems.length > 0) {
          matchingSections.push({
            title: section.title,
            items: matchingItems
          });
          visiblePromptsTotal += matchingItems.length;
        }
      });

      // Si no hay secciones con coincidencia, saltamos este vídeo
      if (matchingSections.length === 0) {
        return;
      }

      visibleVideosTotal++;

      // Crear tarjeta del vídeo
      const card = createVideoCard(video, matchingSections);
      videosList.appendChild(card);
    });

    // Actualizar contadores y estado vacío
    promptCountEl.textContent = visiblePromptsTotal;

    if (visibleVideosTotal === 0) {
      noResults.style.display = 'flex';
      videosList.style.display = 'none';
    } else {
      noResults.style.display = 'none';
      videosList.style.display = 'flex';
    }
  }

  function createVideoCard(video, sections) {
    const card = document.createElement('article');
    card.className = 'video-card';
    card.id = `video-${video.id}`;

    // Header del vídeo
    const header = document.createElement('div');
    header.className = 'video-card-header';

    const metaTop = document.createElement('div');
    metaTop.className = 'video-meta-top';

    const categoryBadge = document.createElement('span');
    categoryBadge.className = 'category-badge';
    categoryBadge.textContent = video.category;
    metaTop.appendChild(categoryBadge);

    if (video.docUrl) {
      const docLink = document.createElement('a');
      docLink.className = 'doc-link';
      docLink.href = video.docUrl;
      docLink.target = '_blank';
      docLink.rel = 'noopener noreferrer';
      docLink.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        <span>Ver documento original</span>
      `;
      metaTop.appendChild(docLink);
    }
    header.appendChild(metaTop);

    const title = document.createElement('h2');
    title.className = 'video-title';
    title.textContent = video.title;
    header.appendChild(title);

    if (video.description) {
      const desc = document.createElement('p');
      desc.className = 'video-desc';
      desc.textContent = video.description;
      header.appendChild(desc);
    }

    // Reglas o trucos si existen
    if (video.rules && video.rules.length > 0) {
      const rulesBox = document.createElement('div');
      rulesBox.className = 'rules-box';
      rulesBox.innerHTML = `
        <div class="rules-title">💡 3 Reglas para que salgan mejor:</div>
        <ul class="rules-list">
          ${video.rules.map(r => `<li>${escapeHtml(r)}</li>`).join('')}
        </ul>
      `;
      header.appendChild(rulesBox);
    }

    card.appendChild(header);

    // Cuerpo con secciones y prompts en recuadros
    const body = document.createElement('div');
    body.className = 'video-card-body';

    sections.forEach(section => {
      const sectionGroup = document.createElement('div');
      sectionGroup.className = 'section-group';

      if (section.title && section.title !== 'Prompt Principal') {
        const sectionTitle = document.createElement('h3');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = section.title;
        sectionGroup.appendChild(sectionTitle);
      }

      const grid = document.createElement('div');
      grid.className = 'prompts-grid';

      section.items.forEach(item => {
        const promptBox = createPromptBox(item);
        grid.appendChild(promptBox);
      });

      sectionGroup.appendChild(grid);
      body.appendChild(sectionGroup);
    });

    card.appendChild(body);
    return card;
  }

  function createPromptBox(item) {
    const box = document.createElement('div');
    box.className = 'prompt-box';

    // Header del recuadro
    const header = document.createElement('div');
    header.className = 'prompt-box-header';

    const titleGroup = document.createElement('div');
    titleGroup.className = 'prompt-title-group';

    const title = document.createElement('h4');
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

    // Botón de Copiar
    const copyBtn = document.createElement('button');
    copyBtn.className = 'btn-copy';
    copyBtn.setAttribute('aria-label', `Copiar ${item.title}`);
    copyBtn.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
      <span>Copiar</span>
    `;

    copyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      copyToClipboard(item.text, copyBtn);
    });

    header.appendChild(copyBtn);
    box.appendChild(header);

    // Contenido del prompt con resaltado de variables [corchetes]
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
      showToast('Error al copiar. Por favor, selecciona y copia manualmente.');
    }
    document.body.removeChild(textArea);
  }

  function handleCopySuccess(btnElement) {
    if (!btnElement) return;
    const originalHTML = btnElement.innerHTML;
    btnElement.classList.add('copied');
    btnElement.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
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

  // ==========================================
  // FORMATEO DE TEXTO (CORCHETES)
  // ==========================================
  function formatPromptWithVariables(text) {
    const escaped = escapeHtml(text);
    // Detectar [cualquier texto entre corchetes] y envolverlo en tag especial
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
  // BÚSQUEDA EN VIVO
  // ==========================================
  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value;
    clearSearchBtn.style.display = currentSearchQuery ? 'block' : 'none';
    renderVideos();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    currentSearchQuery = '';
    clearSearchBtn.style.display = 'none';
    searchInput.focus();
    renderVideos();
  });

  resetSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    currentSearchQuery = '';
    currentCategory = 'all';
    clearSearchBtn.style.display = 'none';
    document.querySelectorAll('.category-pills .pill').forEach(p => p.classList.remove('active'));
    document.querySelector('.category-pills .pill[data-category="all"]').classList.add('active');
    renderVideos();
  });
});
