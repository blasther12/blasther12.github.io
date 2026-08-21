(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');

  if (!button) return;

  function currentTheme() {
    return root.getAttribute('data-theme') || 'dark';
  }

  function updateLabel() {
    button.setAttribute(
      'aria-label',
      currentTheme() === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'
    );
  }

  button.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateLabel();
  });

  updateLabel();
}());
