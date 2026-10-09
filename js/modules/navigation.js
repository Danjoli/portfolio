export function initNavigation() {
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const navLinksContainer = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = [...document.querySelectorAll("main section[id]")];

  const updateMenu = (isOpen) => {
    navLinksContainer.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  };

  menuButton.addEventListener("click", () => {
    updateMenu(!navLinksContainer.classList.contains("open"));
  });

  navLinksContainer.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      updateMenu(false);
    }
  });

  const updateOnScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
    const currentSection = sections.findLast(
      (section) => window.scrollY >= section.offsetTop - 160,
    );
    navLinks.forEach((link) => {
      const active = currentSection && link.hash === `#${currentSection.id}`;
      link.classList.toggle("active", Boolean(active));
    });
  };

  window.addEventListener("scroll", updateOnScroll, { passive: true });
  updateOnScroll();
}
