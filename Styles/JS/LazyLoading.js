  function lazyLoad() {
    const images = document.querySelectorAll('[loading="lazy"]');
    const options = {
      rootMargin: '0px',
      threshold: 0.1
    }
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          const src = image.getAttribute('data-src');
          image.setAttribute('src', src);
          image.removeAttribute('loading');
          observer.unobserve(image);
        }
      });
    }, options);
    images.forEach(image => {
      observer.observe(image);
    });
  }
  window.addEventListener('load', lazyLoad);

