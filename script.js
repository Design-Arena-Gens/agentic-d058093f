(function () {
  const root = document.documentElement;
  const btn = document.getElementById('toggle-theme');
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear().toString();

  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    root.classList.add('light');
  }

  function toggleTheme() {
    const isLight = root.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }

  btn?.addEventListener('click', toggleTheme);
})();
