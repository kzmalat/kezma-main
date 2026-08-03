document.addEventListener('DOMContentLoaded', () => {

  const btn = document.getElementById('loadMoreBtn');
  const extraImages = document.querySelectorAll('.gallery-extra');

  btn.addEventListener('click', () => {

    extraImages.forEach(img => img.classList.add('show'));
    btn.style.display = 'none'; // hide button once all are shown

  });

});