import { projects } from "../data/projects.js";

function createProjectCard(project, index) {
  const projectNumber = String(index + 1).padStart(2, "0");
  const totalProjects = String(projects.length).padStart(2, "0");
  const technologies = project.tech
    .map((technology) => `<span>${technology}</span>`)
    .join("");

  return `
    <article class="project-card reveal visible" data-id="${project.id}"
      tabindex="0" role="button" aria-label="Ver detalhes do projeto ${project.title}"
      style="--card-glow: ${project.color}">
      <span class="project-number">${projectNumber} / ${totalProjects}</span>
      <span class="project-status">● ${project.status}</span>
      <div class="project-icon">${project.icon}</div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tech">${technologies}</div>
      <span class="project-open" aria-hidden="true">↗</span>
    </article>`;
}

function createModalContent(project) {
  const technologies = project.tech
    .map((technology) => `<span>${technology}</span>`)
    .join("");
  const features = project.features
    .map((feature) => `<div>✓ ${feature}</div>`)
    .join("");

  return `
    <div class="modal-body">
      <p class="tag">${project.status.toUpperCase()}</p>
      <h2 id="modal-title">${project.title}</h2>
      <p>${project.description}</p>
      <div class="project-tech">${technologies}</div>
      <div class="modal-features">${features}</div>
      <div class="modal-links">
        <a class="button button-primary" href="${project.url}" target="_blank"
          rel="noopener noreferrer">Ver repositório ↗</a>
        <button class="button button-outline modal-dismiss" type="button">Fechar</button>
      </div>
    </div>`;
}

export function initProjects() {
  const grid = document.querySelector("#projects-grid");
  const modal = document.querySelector("#project-modal");
  const modalContent = document.querySelector("#modal-content");
  const filterButtons = document.querySelectorAll(".filter");

  const render = (filter = "all") => {
    const filtered = projects.filter(
      (project) => filter === "all" || project.category === filter,
    );
    grid.innerHTML = filtered.map(createProjectCard).join("");
  };

  const open = (projectId) => {
    const project = projects.find((item) => item.id === Number(projectId));
    if (!project) return;
    modalContent.innerHTML = createModalContent(project);
    modal.showModal();
  };

  const findCard = (target) =>
    target instanceof Element ? target.closest(".project-card") : null;

  grid.addEventListener("click", (event) => {
    const card = findCard(event.target);
    if (card) open(card.dataset.id);
  });

  grid.addEventListener("keydown", (event) => {
    const card = findCard(event.target);
    if (!card || !["Enter", " "].includes(event.key)) return;
    event.preventDefault();
    open(card.dataset.id);
  });

  modal.addEventListener("click", (event) => {
    const shouldClose =
      event.target === modal ||
      (event.target instanceof Element && event.target.closest(".modal-dismiss"));
    if (shouldClose) modal.close();
  });

  document.querySelector(".modal-close").addEventListener("click", () => modal.close());

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".filter.active")?.classList.remove("active");
      button.classList.add("active");
      render(button.dataset.filter);
    });
  });

  render();
}
