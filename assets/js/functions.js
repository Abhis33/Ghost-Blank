document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const searchToggle = document.querySelector('.search-toggle');
  const searchInput = document.querySelector('.search-form input');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

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

  if (hamburger && mobileMenu) {
    const links = mobileMenu.querySelectorAll('a');
    const toggleMenu = () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    };
    hamburger.addEventListener('click', toggleMenu);
    links.forEach((link) =>
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
      })
    );
  }

  const heroVideo = document.querySelector('.hero-video');
  const heroImage = document.querySelector('.hero-image');
  if (heroVideo && heroImage) {
    const mq = window.matchMedia('(max-width: 767px)');
    const swapHero = (e) => {
      if (e.matches) {
        heroVideo.style.display = 'none';
        heroImage.style.display = 'block';
      } else {
        heroVideo.style.display = '';
        heroImage.style.display = '';
      }
    };
    swapHero(mq);
    if (mq.addEventListener) {
      mq.addEventListener('change', swapHero);
    } else {
      mq.addListener(swapHero);
    }
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

  // Video Players
  document.querySelectorAll('.video-player').forEach((player) => {
    const video = player.querySelector('video');
    const playBtn = player.querySelector('.vp-play');
    const fsBtn = player.querySelector('.vp-fullscreen');
    const qualitySelect = player.querySelector('.vp-quality');

    if (video && !video.getAttribute('poster')) {
      video.addEventListener('loadeddata', function capture() {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        video.setAttribute('poster', canvas.toDataURL());
        video.removeEventListener('loadeddata', capture);
      });
    }

    playBtn && playBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playBtn.textContent = 'Pause';
      } else {
        video.pause();
        playBtn.textContent = 'Play';
      }
    });

    fsBtn && fsBtn.addEventListener('click', () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        player.requestFullscreen();
      }
    });

    qualitySelect && qualitySelect.addEventListener('change', () => {
      const currentTime = video.currentTime;
      const paused = video.paused;
      video.src = qualitySelect.value;
      video.load();
      video.currentTime = currentTime;
      if (!paused) video.play();
    });
  });

  // Image Galleries
  document.querySelectorAll('.gallery').forEach((gallery) => {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = '<span class="lb-close">×</span><span class="lb-prev">‹</span><span class="lb-next">›</span><img><div class="thumbs"></div>';
    document.body.appendChild(lightbox);

    const lbImage = lightbox.querySelector('img');
    const lbClose = lightbox.querySelector('.lb-close');
    const lbPrev = lightbox.querySelector('.lb-prev');
    const lbNext = lightbox.querySelector('.lb-next');
    const thumbs = lightbox.querySelector('.thumbs');

    const images = gallery.querySelectorAll('img');
    images.forEach((img, index) => {
      const thumb = img.cloneNode();
      thumb.addEventListener('click', () => showImage(index));
      thumbs.appendChild(thumb);
      img.addEventListener('click', () => {
        showImage(index);
        lightbox.classList.add('open');
      });
    });

    let current = 0;
    function showImage(i) {
      current = i;
      lbImage.src = images[i].src;
      thumbs.querySelectorAll('img').forEach((t, idx) => t.classList.toggle('active', idx === i));
    }

    function prev() {
      showImage((current - 1 + images.length) % images.length);
    }
    function next() {
      showImage((current + 1) % images.length);
    }

    lbPrev.addEventListener('click', prev);
    lbNext.addEventListener('click', next);
    lbClose.addEventListener('click', () => lightbox.classList.remove('open'));

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') lightbox.classList.remove('open');
    });

    lbImage.addEventListener('dblclick', () => {
      lbImage.classList.toggle('zoomed');
    });
  });
});

// Page Load
window.addEventListener('load', () => {
  document.body.classList.add('is-loaded');
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('hidden');
  }
});
