import { defaultUrlImage } from '../js/constants/urls.js';

const movieListEl = document.querySelector('.movies-list');

const moviesList = (movies, genres) => {
  const markup = movies.map(({
    title,
    poster_path,
    genre_ids,
    release_date,
  }) => {

    const genresNameList = genres
      .filter(el => genre_ids.includes(el.id))
      .map(el => el.name).join(', ')

    const releaseYear = release_date.split('-')[0]

    return `
    <li class="movies-item">
      <img class="movies-img" src="${ defaultUrlImage + poster_path }" alt=""/>
      <p class="movies-title">${ title }</p>
        <p class="movies-text">${ genresNameList } | ${ releaseYear }</p>
    </li>
    `;
  }).join('');

  movieListEl.insertAdjacentHTML('beforeend', markup);
};

export {
  moviesList,
};