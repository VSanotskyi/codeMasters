import { getMovieBySearch, getGenres } from './services/moviesServices';
import { markupMovies, getMovies } from './moviesList/moviesList';
import throttle from 'lodash.throttle';

const headerInput = document.querySelector('.js__header-input');
headerInput.addEventListener('input', throttle(findMovieByName, 2000));

async function findMovieByName(e) {
  const movieName = e.target.value;

  try {
    const { results } = await getMovieBySearch(movieName);
    const { genres } = await getGenres();

    if (!results.length) {
      getMovies();
      return;
    }
    markupMovies(results, genres);
  } catch (e) {
    console.log(e.message);
  }
}
