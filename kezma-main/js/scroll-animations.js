document.addEventListener('DOMContentLoaded', () => {

  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // animate once, then stop watching
      }

    });

  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));

});