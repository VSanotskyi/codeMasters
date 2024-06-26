import { getMovieBySearch, getGenres } from './services/moviesServices';
import { markupMovies } from './moviesList/moviesList';

const headerInput = document.querySelector('.js__header-input');
headerInput.addEventListener('input', findMovieByName);

async function findMovieByName(e) {
  const movieName = e.currentTarget.value;

  try {
    const { results } = await getMovieBySearch(movieName);
    const { genres } = await getGenres();
    // console.log(genres);
    // console.log(results);
    markupMovies(results, genres);
  } catch (e) {
    console.log(e.message);
  }
}
