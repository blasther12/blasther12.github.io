(function () {
  var root = document.documentElement;
  var themeButton = document.querySelector('.theme-toggle');
  var navButton = document.querySelector('.nav-toggle');
  var nav = document.querySelector('#primary-navigation');

  function currentTheme() {
    return root.getAttribute('data-theme') || 'dark';
  }

  function updateThemeLabel() {
    if (!themeButton) return;

    themeButton.setAttribute(
      'aria-label',
      currentTheme() === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'
    );
  }

  if (themeButton) {
    themeButton.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeLabel();
    });

    updateThemeLabel();
  }

  function closeNav() {
    if (!navButton || !nav) return;
    nav.classList.remove('is-open');
    navButton.setAttribute('aria-expanded', 'false');
  }

  if (navButton && nav) {
    navButton.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      navButton.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeNav();
    });
  }

  var filters = document.querySelectorAll('[data-tag-filter]');
  var postCards = document.querySelectorAll('[data-post-tags]');
  var articleGroups = document.querySelectorAll('[data-article-group]');

  function normalizeTag(tag) {
    return String(tag || '').trim().toLowerCase();
  }

  function updateArticleGroups() {
    articleGroups.forEach(function (group) {
      var cards = group.querySelectorAll('[data-post-tags]');
      var hasVisibleCard = Array.prototype.some.call(cards, function (card) {
        return !card.hidden;
      });

      group.hidden = !hasVisibleCard;
    });
  }

  function applyTagFilter(tag) {
    if (!filters.length || !postCards.length) return;

    var selected = normalizeTag(tag) || 'todos';

    filters.forEach(function (button) {
      button.setAttribute(
        'aria-pressed',
        String(normalizeTag(button.getAttribute('data-tag-filter')) === selected)
      );
    });

    postCards.forEach(function (card) {
      var tags = normalizeTag(card.getAttribute('data-post-tags')).split(' ').filter(Boolean);
      card.hidden = selected !== 'todos' && tags.indexOf(selected) === -1;
    });

    updateArticleGroups();
  }

  if (filters.length && postCards.length) {
    filters.forEach(function (button) {
      button.addEventListener('click', function () {
        var tag = normalizeTag(button.getAttribute('data-tag-filter'));
        applyTagFilter(tag);

        if (tag === 'todos') {
          history.replaceState(null, '', window.location.pathname + window.location.search);
        } else {
          history.replaceState(null, '', '#tag-' + encodeURIComponent(tag));
        }
      });
    });

    var hash = decodeURIComponent(window.location.hash || '');
    var initialTag = hash.indexOf('#tag-') === 0 ? hash.slice(5) : 'todos';
    applyTagFilter(initialTag);
  }
}());
