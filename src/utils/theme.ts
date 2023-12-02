import { Theme } from "./types";

export function getTheme() {
  return localStorage.getItem("kanban-board-theme");
}

export function setTheme(className: string) {
  localStorage.setItem("kanban-board-theme", className);
}

export function toggleTheme(
  timeout: ReturnType<typeof setTimeout> | number | undefined,
  newTheme: Theme
) {
  switch (newTheme) {
    case Theme.DARK: {
      clearTimeout(timeout);
      document.body.className = "dark";
      break;
    }
    case Theme.LIGHT: {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        document.body.className = "light";
      }, 800);
      break;
    }
  }
}
