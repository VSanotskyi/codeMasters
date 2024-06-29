import moviesServices from '../services/moviesServices.js';

const loaderBackdropEl = document.querySelector('.loader-backdrop');

const getAllMovies = async (page) => {
  loaderBackdropEl.classList.toggle('is-hidden');

  try {
    return await moviesServices.getAllMovies(page);
  } catch (err) {
    console.log(err.message);
  } finally {
    loaderBackdropEl.classList.toggle('is-hidden');
  }
};

export default { getAllMovies };
