const bntScrollUpEl = document.querySelector('.btn-scroll-up');

window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    bntScrollUpEl.style.display = 'flex';
  } else {
    bntScrollUpEl.style.display = 'none';
  }
});

bntScrollUpEl.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});