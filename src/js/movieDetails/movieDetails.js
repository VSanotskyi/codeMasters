import moviesServices from '../services/moviesServices.js';
import renderMovieDetails from '../renderMovieDetails/renderMovieDetails.js';

const moviesListEl = document.querySelector('.movies-list');
const backdropEl = document.querySelector('.backdrop');
const modalBtnCloseEl = document.querySelector('.modal-btn-close');

const handleOpenModal = async (e) => {
  // check where user click
  if (e.target.classList.contains('movies-list') === true) {
    return;
  }

  // get movies id
  const movieId = e.target.closest('li').dataset.id;

  try {
    // get movies details
    const movieDetails = await moviesServices.getMovieDetails(movieId);

    // remove class hidden
    backdropEl.classList.remove('is-hidden');

    // render movies details
    renderMovieDetails(movieDetails);

    // add event listener for esc
    window.addEventListener('keydown', handleCloseModalEsc);
    modalBtnCloseEl.addEventListener('click', handleCloseModal);
    backdropEl.addEventListener('click', handleCloseModalClickBackdrop);

  } catch (err) {
    // if error from server, show message and render other markup
    console.log(err.message);
  }
};

const handleCloseModal = () => {
  backdropEl.classList.add('is-hidden');

  window.removeEventListener('keydown', handleCloseModalEsc);
  modalBtnCloseEl.removeEventListener('click', handleCloseModal);
  backdropEl.removeEventListener('click', handleCloseModalClickBackdrop);
};

const handleCloseModalEsc = (e) => {
  if (e.code === 'Escape') {
    handleCloseModal();
  }
};

const handleCloseModalClickBackdrop = (e) => {
  if (e.target.classList.contains('backdrop')) {
    handleCloseModal();
  }
};

moviesListEl.addEventListener('click', handleOpenModal);