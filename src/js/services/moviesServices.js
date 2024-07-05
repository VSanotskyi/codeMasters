import apiService from './apiServices.js';
import urls from '../constants/urls.js';

const getAllMovies = async (page = 1) => {
  const { data } = await apiService(`${urls.moviesEndPoint}?page=${page}`);

  return data;
};

const getGenres = async () => {
  const { data } = await apiService(`${urls.genreEndPoint}`);

  return data;
};

const getMovieByKeyword = async (page, keyword) => {
  const { data } = await apiService(
    `${urls.searchEndPoint}?page=${page}&query=${keyword}`
  );

  return data;
};

const getMovieDetails = async movieId => {
  const { data } = await apiService(`${urls.movieDetailsEndPoint}/${movieId}`);

  return data;
};

export default {
  getAllMovies,
  getGenres,
  getMovieByKeyword,
  getMovieDetails,
};
