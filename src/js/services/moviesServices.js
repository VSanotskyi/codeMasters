import {apiService} from "./apiServices.js";
import {movies} from "../constants/urls.js";

const getAllMovies = async (page = 1) => {
  const {data} = await apiService(`${movies}?page=${page}`);
  return data
}

export {
  getAllMovies,
}