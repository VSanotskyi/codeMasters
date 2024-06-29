import moviesServices from '../services/moviesServices.js';

const loaderBackdropEl = document.querySelector('.loader-backdrop');

const getMovieByKeyword = async (page, keyword) => {
  loaderBackdropEl.classList.toggle('loader-backdrop');

  try {
    return await moviesServices.getMovieByKeyword(page, keyword);
  } catch (e) {
    console.log(e.message);
  } finally {
    loaderBackdropEl.classList.toggle('loader-backdrop');
  }
};

export default { getMovieByKeyword };