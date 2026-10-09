const STORAGE_KEY = "portfolio-theme";

export function initTheme() {
  const button = document.querySelector(".theme-toggle");
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (["dark", "light"].includes(savedTheme)) {
    document.documentElement.dataset.theme = savedTheme;
  }

  button.addEventListener("click", () => {
    const nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem(STORAGE_KEY, nextTheme);
  });
}
