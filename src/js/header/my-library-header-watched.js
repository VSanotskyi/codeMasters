import moviesService from '../services/moviesServices.js';
import renderMovies from '../renderMovies/renderMovies.js'
import helpers from "../helpers/helpers.js";

const watchedBtn = document.querySelector('.js-watched');
const queuedBtn = document.querySelector('.js-queue');

const showWatchedMovie = async () => {
  const watchedMoviesJson = localStorage.getItem('watched');
  const watchedMoviesIdArr = JSON.parse(watchedMoviesJson);

  const moviesArr = await helpers.MoviesList(watchedMoviesIdArr, moviesService.getMovieById);
  renderMovies(moviesArr);

  queuedBtn.classList.remove('active');
  watchedBtn.classList.add('active');
}

watchedBtn.addEventListener('click', showWatchedMovie);

showWatchedMovie();