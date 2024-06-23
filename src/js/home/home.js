import {getAllMovies} from "../services/moviesServices.js";

const getMovies = async () => {
  const result = await getAllMovies(2)
  console.log(result)
}

void getMovies()