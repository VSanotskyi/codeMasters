import apiService from '../services/apiServices.js';
import urls from '../constants/urls.js';
import storageKey from '../constants/storageKey.js';

const watchedBtn = document.querySelector('.js-watched');
const queuedBtn = document.querySelector('.js-queue');
const moviesList = document.querySelector('.movies-list');

watchedBtn.addEventListener('click', showWatchedMovie);

const watchedMoviesJson = localStorage.getItem('watched');
const watchedMoviesIdArr = JSON.parse(watchedMoviesJson);

showWatchedMovie();

async function showWatchedMovie() {
  const moviesArr = [];
  queuedBtn.classList.remove('active');
  watchedBtn.classList.add('active');
  try {
    for (let i = 0; i < watchedMoviesIdArr.length; i++) {
      const data = await getMoviesById(watchedMoviesIdArr[i]);
      moviesArr.push(data);
    }
    renderMovies(moviesArr);
    if (!moviesArr.length) {
      moviesList.innerHTML = `<p class="empty-list-text">There's nothing here yet. Please add movies to your list</p>`;
    }
  } catch (e) {
    console.log(e);
  }
}

async function getMoviesById(id) {
  const { data } = await apiService(`${urls.movieDetailsEndPoint}/${id}`);
  return data;
}

function renderMovies(movies) {
  const genresStore = JSON.parse(localStorage.getItem(storageKey.GENRES_KEY));

  moviesList.innerHTML = movies
    .map(({ title, poster_path, genres, release_date, id }) => {
      const imgPath =
        poster_path === null
          ? defaultImage
          : urls.defaultUrlImage + poster_path;
      const releaseYear = release_date.split('-')[0];
      const genresNameList = genresStore
        .filter(el => genres.includes(el.id))
        .map(el => el.name)
        .join(', ');

      return `
        <li class="movies-item" data-id="${id}">
          <img class="movies-img" src="${imgPath}" alt="${title}" loading="lazy"/>
          <p class="movies-title overflowWrap">${title}</p>
          <p class="movies-text overflowWrap">${genresNameList} | ${releaseYear}</p>
        </li>
      `;
    })
    .join('');
}
