document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const searchToggle = document.querySelector('.search-toggle');
  const searchInput = document.querySelector('.search-form input');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('is-solid');
      } else {
        header.classList.remove('is-solid');
      }
    });
  }

  if (searchToggle && searchInput) {
    searchToggle.addEventListener('click', () => {
      header.classList.toggle('search-open');
      if (header.classList.contains('search-open')) {
        searchInput.focus();
      }
    });
  }

  // Progressive Images
  document.querySelectorAll('img.progressive').forEach((img) => {
    img.classList.add('loading');
    if (img.complete) {
      img.classList.remove('loading');
    } else {
      img.addEventListener('load', () => img.classList.remove('loading'));
    }
  });

  // Reveal Animations
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    });
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('revealed'));
  }

  // Parallax Elements
  const parallaxElems = document.querySelectorAll('[data-parallax]');
  if (parallaxElems.length) {
    window.addEventListener('scroll', () => {
      const offset = window.pageYOffset;
      parallaxElems.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0.5;
        el.style.backgroundPositionY = -(offset * speed) + 'px';
      });
    });
  }

  // Scroll Progress
  const progressBar = document.querySelector('.progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / height) * 100;
      progressBar.style.width = progress + '%';
    });
  }
});

// Page Load
window.addEventListener('load', () => {
  document.body.classList.add('is-loaded');
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('hidden');
  }
});
