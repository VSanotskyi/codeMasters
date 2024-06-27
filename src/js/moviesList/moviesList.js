import { defaultUrlImage } from '../constants/urls.js';
import { getAllMovies, getGenres } from '../services/moviesServices.js';
import { PAGE_KEY, TOTAL_PAGES_KEY } from '../constants/storageKey.js';

const movieListEl = document.querySelector('.movies-list');

const markupMovies = (movies, genres) => {
  movieListEl.innerHTML = movies
    .map(({ title, poster_path, genre_ids, release_date, id }) => {
      const genresNameList = genres
        .filter(el => genre_ids.includes(el.id))
        .map(el => el.name)
        .join(', ');

      const releaseYear = release_date.split('-')[0];

      return `
    <li class="movies-item" data-id="${id}">
      <img class="movies-img" src="${defaultUrlImage + poster_path}" alt=""/>
      <p class="movies-title overflowWrap">${title}</p>
      <p class="movies-text overflowWrap">${genresNameList} | ${releaseYear}</p>
    </li>
    `;
    })
    .join('');
};

const getMovies = async currentPage => {
  try {
    const { page, total_pages, results } = await getAllMovies(currentPage);
    const { genres } = await getGenres();

    if (results.length > 0) {
      markupMovies(results, genres);
    }

    if (total_pages > 1) {
      localStorage.setItem(PAGE_KEY, page);
      localStorage.setItem(TOTAL_PAGES_KEY, total_pages);
    }
  } catch (err) {
    console.log(err.message);
  }
};

export { getMovies, markupMovies };
