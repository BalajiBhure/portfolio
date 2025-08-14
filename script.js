document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio website loaded successfully!");
});


AOS.init({
  duration: 1000,
  once: true,
});



const toggle = document.querySelector('#theme-toggle');
toggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.dataset.theme;
  document.documentElement.dataset.theme = currentTheme === 'dark' ? 'light' : 'dark';
});
