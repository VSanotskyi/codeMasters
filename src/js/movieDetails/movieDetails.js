import moviesServices from '../services/moviesServices.js';
import renderMovieDetails from '../renderMovieDetails/renderMovieDetails.js';
import storageKey from '../constants/storageKey.js';

const moviesListEl = document.querySelector('.movies-list');
const backdropEl = document.querySelector('.backdrop');
const modalBtnCloseEl = document.querySelector('.modal-btn-close');

let watchedIds = localStorage.getItem(storageKey.WATCHED_KEY)
  ? JSON.parse(localStorage.getItem(storageKey.WATCHED_KEY)) : [];
let queueIds = localStorage.getItem(storageKey.QUEUE_KEY)
  ? JSON.parse(localStorage.getItem(storageKey.QUEUE_KEY)) : [];

const handleOpenModal = async (e) => {
  if (e.target.classList.contains('movies-list') === true) {
    return;
  }

  const movieId = e.target.closest('li').dataset.id;

  try {
    const movieDetails = await moviesServices.getMovieDetails(movieId);

    backdropEl.classList.remove('is-hidden');

    renderMovieDetails(movieDetails);

    window.addEventListener('keydown', handleCloseModalEsc);
    modalBtnCloseEl.addEventListener('click', handleCloseModal);
    backdropEl.addEventListener('click', handleCloseModalClickBackdrop);
    handleClickWatchedQueue(movieDetails.id);
  } catch (err) {
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

const handleClickWatchedQueue = (movieId) => {
  const btnWatchedEl = document.querySelector('.modal-btn-watched');
  const btnQueueEl = document.querySelector('.modal-btn-queue');

  if (watchedIds.includes(movieId)) {
    btnWatchedEl.classList.add('active');
  } else {
    btnWatchedEl.classList.remove('active');
  }

  if (queueIds.includes(movieId)) {
    btnQueueEl.classList.add('active');
  } else {
    btnQueueEl.classList.remove('active');
  }

  btnWatchedEl.addEventListener('click', () => {
    if (watchedIds.includes(movieId)) {
      watchedIds = watchedIds.filter(id => id !== movieId);
      btnWatchedEl.classList.remove('active');
    } else {
      watchedIds.push(movieId);
      btnWatchedEl.classList.add('active');
    }

    localStorage.setItem(storageKey.WATCHED_KEY, JSON.stringify(watchedIds));
  });

  btnQueueEl.addEventListener('click', () => {
    if (queueIds.includes(movieId)) {
      queueIds = queueIds.filter(id => id !== movieId);
      btnQueueEl.classList.remove('active');
    } else {
      queueIds.push(movieId);
      btnQueueEl.classList.add('active');
    }

    localStorage.setItem(storageKey.QUEUE_KEY, JSON.stringify(queueIds));
  });
};

moviesListEl.addEventListener('click', handleOpenModal);