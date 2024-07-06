import moviesServices from '../services/moviesServices.js';
import moviesService from "../services/moviesServices.js";
import storageKey from '../constants/storageKey.js';
import helpers from "../helpers/helpers.js";
import renderMovieDetails from '../renderMovieDetails/renderMovieDetails.js';
import renderMovies from "../renderMovies/renderMovies.js";

const moviesListEl = document.querySelector('.movies-list');
const backdropEl = document.querySelector('.backdrop');
const modalBtnCloseEl = document.querySelector('.modal-btn-close');

let watchedIds = localStorage.getItem(storageKey.WATCHED_KEY) ? JSON.parse(localStorage.getItem(storageKey.WATCHED_KEY)) : [];
let queueIds = localStorage.getItem(storageKey.QUEUE_KEY) ? JSON.parse(localStorage.getItem(storageKey.QUEUE_KEY)) : [];

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

  checkWatchedQueue(btnWatchedEl, watchedIds, movieId, 'watched')
  checkWatchedQueue(btnQueueEl, queueIds, movieId, 'queue')

  btnWatchedEl.addEventListener('click', async () => {
    if (watchedIds.includes(movieId)) {
      watchedIds = watchedIds.filter(id => id !== movieId);
      btnWatchedEl.classList.remove('active');
      btnWatchedEl.textContent = 'Add to watched';

    } else {
      watchedIds.push(movieId);
      btnWatchedEl.classList.add('active');
      btnWatchedEl.textContent = 'Remove from watched';
    }

    if (location.pathname === "/my-library.html") {
      const watchedBtn = document.querySelector('.js-watched');
      if (watchedBtn.classList.contains('active')) {
        const moviesArr = await helpers.MoviesList(watchedIds, moviesService.getMovieById);
        renderMovies(moviesArr);
      }
    }

    localStorage.setItem(storageKey.WATCHED_KEY, JSON.stringify(watchedIds));
  });

  btnQueueEl.addEventListener('click', async () => {
    if (queueIds.includes(movieId)) {
      queueIds = queueIds.filter(id => id !== movieId);
      btnQueueEl.classList.remove('active');
      btnQueueEl.textContent = 'Add to queue';
    } else {
      queueIds.push(movieId);
      btnQueueEl.classList.add('active');
      btnQueueEl.textContent = 'Remove from queue';
    }

    if (location.pathname === "/my-library.html") {
      const queuedBtn = document.querySelector('.js-queue');
      if (queuedBtn.classList.contains('active')) {
        const moviesArr = await helpers.MoviesList(queueIds, moviesService.getMovieById);
        renderMovies(moviesArr);
      }
    }

    localStorage.setItem(storageKey.QUEUE_KEY, JSON.stringify(queueIds));
  });
};

const checkWatchedQueue = (htmlEl, movieIds, movieId, message) => {
  if (movieIds.includes(movieId)) {
    htmlEl.classList.add('active');
    htmlEl.textContent = `Remove to ${message}`;
  } else {
    htmlEl.classList.remove('active')
    htmlEl.textContent = `Add from ${message}`;
  }
}

moviesListEl.addEventListener('click', handleOpenModal);