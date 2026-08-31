/* ==================================================
   1. Dados dos projetos
   ================================================== */

const projects = [
  {
    id: 1,
    title: "TaskFlow API",
    category: "backend",
    icon: "TF",
    status: "Projeto em evolução",
    color: "#40e0c1",
    description:
      "API REST com autenticação, perfis e permissões, filtros, paginação, cache, filas, tratamento de erros e documentação OpenAPI.",
    tech: ["Laravel", "Sanctum", "PostgreSQL", "Redis", "Pest", "OpenAPI"],
    features: [
      "Autenticação com Sanctum",
      "Perfis e permissões",
      "Filtros e paginação",
      "Cache e filas",
      "Testes com Pest",
      "Swagger e pipeline de CI",
    ],
  },
  {
    id: 2,
    title: "Identity Service",
    category: "backend",
    icon: "IS",
    status: "Projeto em evolução",
    color: "#8aa5ff",
    description:
      "API de identidade com cadastro, login, autenticação e autorização por papéis, tokens, validação e tratamento de erros.",
    tech: ["Symfony", "Doctrine", "PostgreSQL", "PHPUnit"],
    features: [
      "Cadastro e login",
      "Autenticação por tokens",
      "Autorização por papéis",
      "Validação de dados",
      "Persistência com Doctrine ORM",
      "Tratamento de erros e testes automatizados",
    ],
  },
  {
    id: 3,
    title: "Mini Framework PHP",
    category: "backend",
    icon: "MF",
    status: "Projeto em evolução",
    color: "#ffae70",
    description:
      "Framework MVC próprio com front controller, roteamento, controllers, middlewares, container de dependências e camada de dados.",
    tech: ["PHP puro", "Composer", "PSR", "PDO"],
    features: [
      "Front controller e roteamento",
      "Controllers e middlewares",
      "Container de dependências",
      "Validação de dados",
      "Tratamento de exceções",
      "Camada de banco de dados com PDO",
    ],
  },
  {
    id: 4,
    title: "Sistema de Gestão em PHP",
    category: "backend",
    icon: "SG",
    status: "Projeto em evolução",
    color: "#d49cff",
    description:
      "Sistema administrativo orientado a objetos com autenticação, controle de acesso, módulos gerenciais, relatórios e consultas SQL avançadas.",
    tech: ["PHP puro", "Composer", "MVC", "PDO", "MySQL", "PHPUnit"],
    features: [
      "Arquitetura MVC",
      "Autenticação e controle de acesso",
      "Módulos gerenciais",
      "Relatórios administrativos",
      "Transações e SQL avançado",
      "Testes com PHPUnit",
    ],
  },
  {
    id: 5,
    title: "Game Store",
    category: "fullstack",
    icon: "GS",
    status: "Em aperfeiçoamento",
    color: "#7cb9ff",
    description:
      "E-commerce com front-end e back-end desacoplados por API REST, incluindo catálogo, busca, carrinho e checkout.",
    tech: ["Laravel REST API", "React", "TypeScript", "PostgreSQL"],
    features: [
      "Front-end e back-end desacoplados",
      "Autenticação e CORS",
      "Catálogo e busca",
      "Carrinho e checkout",
      "Validação de dados",
      "Consumo tipado de endpoints",
    ],
    url: "https://github.com/Danjoli/game-store",
  },
  {
    id: 6,
    title: "Lume",
    category: "fullstack",
    icon: "LU",
    status: "Em aperfeiçoamento",
    color: "#e59bff",
    description:
      "Livraria on-line com arquitetura em camadas, regras de negócio, catálogo, avaliações, lista de desejos, checkout e pagamentos.",
    tech: ["PHP", "Laravel", "Blade", "Tailwind", "MySQL"],
    features: [
      "Arquitetura em camadas",
      "Catálogo e avaliações",
      "Lista de desejos",
      "Carrinho e checkout",
      "Pagamentos",
      "Gestão de pedidos",
    ],
    url: "https://github.com/Danjoli/lume",
  },
  {
    id: 7,
    title: "Tech Store",
    category: "fullstack",
    icon: "TS",
    status: "Em aperfeiçoamento",
    color: "#70c7ff",
    description:
      "Aplicação SPA-like com front-end reativo, catálogo, marcas, categorias, variações, carrinho e área administrativa.",
    tech: ["Laravel", "Inertia.js", "Vue 3", "TypeScript", "PostgreSQL"],
    features: [
      "Experiência SPA-like",
      "Catálogo, marcas e categorias",
      "Variações de produtos",
      "Carrinho de compras",
      "Área administrativa",
      "Autorização e testes de integração",
    ],
    url: "https://github.com/Danjoli/tech-store",
  },
  {
    id: 8,
    title: "Malu Store",
    category: "fullstack",
    icon: "MS",
    status: "Em aperfeiçoamento",
    color: "#ff9f83",
    description:
      "E-commerce completo com catálogo, filtros, carrinho, checkout, autenticação, painel administrativo, pagamentos e frete.",
    tech: ["PHP", "Laravel", "Blade", "Tailwind", "MySQL"],
    features: [
      "Catálogo e filtros",
      "Carrinho e checkout",
      "Autenticação",
      "Painel administrativo",
      "Pagamentos, frete e webhooks",
      "Gestão de pedidos",
    ],
    url: "https://github.com/Danjoli/malu-store",
  },
];

/* ==================================================
   2. Elementos da interface
   ================================================== */

const elements = {
  projectsGrid: document.querySelector("#projects-grid"),
  projectModal: document.querySelector("#project-modal"),
  modalContent: document.querySelector("#modal-content"),
  modalClose: document.querySelector(".modal-close"),
  filterButtons: document.querySelectorAll(".filter"),
  themeButton: document.querySelector(".theme-toggle"),
  menuButton: document.querySelector(".menu-toggle"),
  navLinks: document.querySelector(".nav-links"),
  header: document.querySelector(".site-header"),
  cursorGlow: document.querySelector(".cursor-glow"),
};

/* ==================================================
   3. Renderização dos projetos
   ================================================== */

/**
 * Cria o HTML de um card de projeto.
 *
 * @param {object} project Projeto que será exibido.
 * @param {number} index Posição do projeto na lista filtrada.
 * @returns {string} Estrutura HTML do card.
 */
function createProjectCard(project, index) {
  const projectNumber = String(index + 1).padStart(2, "0");
  const totalProjects = String(projects.length).padStart(2, "0");

  const technologies = project.tech
    .map((technology) => `<span>${technology}</span>`)
    .join("");

  return `
    <article
      class="project-card reveal visible"
      data-id="${project.id}"
      tabindex="0"
      role="button"
      aria-label="Ver detalhes do projeto ${project.title}"
      style="--card-glow: ${project.color}"
    >
      <span class="project-number">
        ${projectNumber} / ${totalProjects}
      </span>

      <span class="project-status">
        ● ${project.status}
      </span>

      <div class="project-icon">
        ${project.icon}
      </div>

      <h3>${project.title}</h3>

      <p>${project.description}</p>

      <div class="project-tech">
        ${technologies}
      </div>

      <span class="project-open" aria-hidden="true">
        ↗
      </span>
    </article>
  `;
}

/**
 * Renderiza os projetos de acordo com a categoria selecionada.
 *
 * @param {string} filter Categoria utilizada na filtragem.
 */
function renderProjects(filter = "all") {
  const filteredProjects = projects.filter((project) => {
    return filter === "all" || project.category === filter;
  });

  elements.projectsGrid.innerHTML = filteredProjects
    .map(createProjectCard)
    .join("");
}

/* ==================================================
   4. Modal de detalhes do projeto
   ================================================== */

/**
 * Cria o conteúdo interno do modal.
 *
 * @param {object} project Projeto selecionado.
 * @returns {string} Estrutura HTML do modal.
 */
function createProjectModalContent(project) {
  const technologies = project.tech
    .map((technology) => `<span>${technology}</span>`)
    .join("");

  const features = project.features
    .map((feature) => `<div>✓ ${feature}</div>`)
    .join("");

  const projectUrl = project.url ?? "https://github.com/danjoli";
  const projectLinkLabel = project.url ? "Ver repositório" : "Ver perfil no GitHub";

  return `
    <div class="modal-body">
      <p class="tag">
        ${project.status.toUpperCase()}
      </p>

      <h2 id="modal-title">
        ${project.title}
      </h2>

      <p>${project.description}</p>

      <div class="project-tech">
        ${technologies}
      </div>

      <div class="modal-features">
        ${features}
      </div>

      <div class="modal-links">
        <a
          class="button button-primary"
          href="${projectUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${projectLinkLabel} ↗
        </a>

        <button
          class="button button-outline modal-dismiss"
          type="button"
        >
          Fechar
        </button>
      </div>
    </div>
  `;
}

/**
 * Abre o modal correspondente ao projeto selecionado.
 *
 * @param {number|string} projectId Identificador do projeto.
 */
function openProject(projectId) {
  const project = projects.find((item) => item.id === Number(projectId));

  if (!project) {
    return;
  }

  elements.modalContent.innerHTML = createProjectModalContent(project);

  elements.projectModal.showModal();
}

/**
 * Fecha o modal de detalhes.
 */
function closeProjectModal() {
  elements.projectModal.close();
}

/* ==================================================
   5. Eventos dos cards de projetos
   ================================================== */

/**
 * Retorna o card relacionado ao elemento que iniciou o evento.
 *
 * @param {EventTarget} target Elemento que iniciou o evento.
 * @returns {HTMLElement|null} Card encontrado.
 */
function getProjectCard(target) {
  if (!(target instanceof Element)) {
    return null;
  }

  return target.closest(".project-card");
}

elements.projectsGrid.addEventListener("click", (event) => {
  const card = getProjectCard(event.target);

  if (card) {
    openProject(card.dataset.id);
  }
});

elements.projectsGrid.addEventListener("keydown", (event) => {
  const card = getProjectCard(event.target);
  const activationKeys = ["Enter", " "];

  if (!card || !activationKeys.includes(event.key)) {
    return;
  }

  event.preventDefault();
  openProject(card.dataset.id);
});

/* ==================================================
   6. Eventos do modal
   ================================================== */

elements.modalClose.addEventListener("click", closeProjectModal);

elements.projectModal.addEventListener("click", (event) => {
  const clickedBackdrop = event.target === elements.projectModal;

  const clickedDismissButton =
    event.target instanceof Element && event.target.closest(".modal-dismiss");

  if (clickedBackdrop || clickedDismissButton) {
    closeProjectModal();
  }
});

/* ==================================================
   7. Filtros dos projetos
   ================================================== */

elements.filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const activeFilter = document.querySelector(".filter.active");

    activeFilter?.classList.remove("active");
    button.classList.add("active");

    renderProjects(button.dataset.filter);
  });
});

/* ==================================================
   8. Controle de tema
   ================================================== */

const THEME_STORAGE_KEY = "portfolio-theme";

/**
 * Aplica o tema na raiz do documento.
 *
 * @param {"dark"|"light"} theme Tema selecionado.
 */
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

/**
 * Retorna o próximo tema com base no tema atual.
 *
 * @returns {"dark"|"light"} Próximo tema.
 */
function getNextTheme() {
  const currentTheme = document.documentElement.dataset.theme;

  return currentTheme === "dark" ? "light" : "dark";
}

const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

if (savedTheme === "dark" || savedTheme === "light") {
  applyTheme(savedTheme);
}

elements.themeButton.addEventListener("click", () => {
  const nextTheme = getNextTheme();

  applyTheme(nextTheme);
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
});

/* ==================================================
   9. Menu de navegação móvel
   ================================================== */

/**
 * Atualiza o estado visual e acessível do menu.
 *
 * @param {boolean} isOpen Informa se o menu está aberto.
 */
function updateMobileMenu(isOpen) {
  elements.navLinks.classList.toggle("open", isOpen);

  elements.menuButton.setAttribute("aria-expanded", String(isOpen));

  elements.menuButton.setAttribute(
    "aria-label",
    isOpen ? "Fechar menu" : "Abrir menu",
  );
}

elements.menuButton.addEventListener("click", () => {
  const isOpen = !elements.navLinks.classList.contains("open");

  updateMobileMenu(isOpen);
});

elements.navLinks.addEventListener("click", (event) => {
  const clickedLink =
    event.target instanceof Element && event.target.closest("a");

  if (clickedLink) {
    updateMobileMenu(false);
  }
});

/* ==================================================
   10. Animação de entrada dos elementos
   ================================================== */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        /*
         * O elemento deixa de ser observado após aparecer,
         * evitando verificações desnecessárias.
         */
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.13,
  },
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

/* ==================================================
   11. Navegação ativa e estado do cabeçalho
   ================================================== */

const sections = [...document.querySelectorAll("main section[id]")];

const navigationLinks = document.querySelectorAll(".nav-links a");

/**
 * Atualiza o link ativo de acordo com a seção visível.
 */
function updateActiveNavigation() {
  const currentSection = sections.findLast((section) => {
    return window.scrollY >= section.offsetTop - 160;
  });

  navigationLinks.forEach((link) => {
    const isActive =
      currentSection && link.getAttribute("href") === `#${currentSection.id}`;

    link.classList.toggle("active", Boolean(isActive));
  });
}

/**
 * Atualiza o cabeçalho e a navegação durante a rolagem.
 */
function handlePageScroll() {
  const pageWasScrolled = window.scrollY > 20;

  elements.header.classList.toggle("scrolled", pageWasScrolled);

  updateActiveNavigation();
}

window.addEventListener("scroll", handlePageScroll, {
  passive: true,
});

/* Define o estado correto antes da primeira rolagem. */
handlePageScroll();

/* ==================================================
   12. Efeito de iluminação do cursor
   ================================================== */

document.addEventListener("pointermove", (event) => {
  if (!elements.cursorGlow) {
    return;
  }

  elements.cursorGlow.style.left = `${event.clientX}px`;
  elements.cursorGlow.style.top = `${event.clientY}px`;
});

/* ==================================================
   13. Inicialização
   ================================================== */

renderProjects();











