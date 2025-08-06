document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  var searchToggle = document.querySelector('.search-toggle');
  var searchInput = document.querySelector('.search-form input');

  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.classList.add('is-solid');
      } else {
        header.classList.remove('is-solid');
      }
    });
  }

  if (searchToggle && searchInput) {
    searchToggle.addEventListener('click', function () {
      header.classList.toggle('search-open');
      if (header.classList.contains('search-open')) {
        searchInput.focus();
      }
    });
  }
});
