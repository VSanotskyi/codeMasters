import debounce from 'lodash.debounce';

import movies from '../movies/movies.js';
import moviesByKeyword from '../moviesByKeyword/moviesByKeyword.js';
import pagination from '../pagination/pagination.js';

const headerInput = document.querySelector('.js__header-input');

const handleInput = e => {
  const keyword = e.target.value.trim();

  if (keyword.length === 0) {
    pagination(movies.getAllMovies);
  } else {
    pagination(moviesByKeyword.getMovieByKeyword, keyword);
  }
};

headerInput.addEventListener('input', debounce(handleInput, 1000));
