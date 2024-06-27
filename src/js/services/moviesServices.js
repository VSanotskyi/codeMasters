import { apiService } from './apiServices.js';
import { genre, movies, paramsForSearch, movieDetails } from '../constants/urls.js';

const getAllMovies = async (page = 1) => {
  const { data } = await apiService(`${ movies }?page=${ page }`);

  return data;
};

const getGenres = async () => {
  const { data } = await apiService(`${ genre }`);

  return data;
};

const getMovieBySearch = async (movieName) => {
  const { data } = await apiService(`${ paramsForSearch }?query=${ movieName }`);

  return data;
};

const getMovieDetails = async (movieId) => {
  const { data } = await apiService(`${ movieDetails }/${ movieId }`);

  return data;
};

export {
  getAllMovies,
  getGenres,
  getMovieBySearch,
  getMovieDetails,
};
