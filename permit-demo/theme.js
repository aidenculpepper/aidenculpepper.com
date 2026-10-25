(() => {
  const key = 'permit-studio-theme';
  let theme = 'dark';
  try { if (localStorage.getItem(key) === 'light') theme = 'light'; } catch {}
  function apply() {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#242c30' : '#f6f7f2');
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.textContent = theme === 'dark' ? '☀ Light' : '☾ Dark';
      button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  }
  apply();
  function mount() {
    if (document.getElementById('theme-toggle')) return;
    const target = document.querySelector('.public-links, .topbar > .row');
    if (!target) return;
    const button = document.createElement('button');
    button.id = 'theme-toggle'; button.className = 'btn secondary sm'; button.type = 'button';
    button.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(key, theme); } catch {}
      apply();
    });
    target.prepend(button); apply();
  }
  document.addEventListener('DOMContentLoaded', () => {
    mount(); new MutationObserver(mount).observe(document.getElementById('app'), {childList:true, subtree:true});
  });
})();
