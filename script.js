document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio website loaded successfully!");
});

const toggle = document.querySelector('#theme-toggle');
toggle.addEventListener('click', () => {
  document.documentElement.dataset.theme =
    document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
});
