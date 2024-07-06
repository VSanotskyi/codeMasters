import moviesService from '../services/moviesServices.js';
import renderMovies from '../renderMovies/renderMovies.js'
import helpers from "../helpers/helpers.js";

const queuedBtn = document.querySelector('.js-queue');
const watchedBtn = document.querySelector('.js-watched');

const  showQueuedMovie = async () => {
  const queueMoviesJson = localStorage.getItem('queue');
  const queuedMoviesIdArr = JSON.parse(queueMoviesJson);

  const moviesArr = await helpers.MoviesList(queuedMoviesIdArr, moviesService.getMovieById);
  renderMovies(moviesArr);

  watchedBtn.classList.remove('active');
  queuedBtn.classList.add('active');
}

queuedBtn.addEventListener('click', showQueuedMovie);