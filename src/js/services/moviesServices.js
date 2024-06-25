import { apiService } from './apiServices.js';
import { genre, movies } from '../constants/urls.js';

const getAllMovies = async (page = 1) => {
  const { data } = await apiService(`${movies}?page=${page}`);

  return data;
};

const getGenres = async () => {
  const { data } = await apiService(`${genre}`);

  return data;
};

export { getAllMovies, getGenres };
