import { getAllMovies, getGenres } from '../services/moviesServices.js';
import { moviesList } from '../../moviesList/moviesList.js';

const getMovies = async () => {
  try {
    const { page, total_page, results } = await getAllMovies(1);
    const { genres } = await getGenres();

    if (results.length > 0) {
      moviesList(results, genres);
    }
  } catch (err) {
    console.log(err.message);
  }
};

void getMovies();
