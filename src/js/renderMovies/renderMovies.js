import urls from '../constants/urls.js';
import storageKey from '../constants/storageKey.js';
import defaultImage from '../../img/default-image/default-image.jpg';

const movieListEl = document.querySelector('.movies-list');

const renderMovies = (movies) => {
  const genres = JSON.parse(localStorage.getItem(storageKey.GENRES_KEY));

  movieListEl.innerHTML = movies
    .map(({title, poster_path, genre_ids, release_date, id}) => {
      const imgPath = poster_path === null ? defaultImage : urls.defaultUrlImage + poster_path;
      const releaseYear = release_date.split('-')[0];
      const genresNameList = genres
        .filter(el => genre_ids.includes(el.id))
        .map(el => el.name)
        .join(', ');

      return `
        <li class="movies-item" data-id="${id}">
          <img class="movies-img" src="${imgPath}" alt="${title}" loading="lazy"/>
          <p class="movies-title overflowWrap">${title}</p>
          <p class="movies-text overflowWrap">${genresNameList} | ${releaseYear}</p>
        </li>
      `;
    }).join('');
};

export default renderMovies;
