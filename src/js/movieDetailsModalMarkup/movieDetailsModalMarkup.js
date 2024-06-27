import { defaultUrlImage } from '../constants/urls.js';

const modalWrapperEl = document.querySelector('.modal-wrapper');

const movieDetailsModalMarkup = (movieDetails) => {
  const {
    poster_path,
    original_title,
    genres,
    vote_average,
    vote_count,
    popularity,
    overview,
  } = movieDetails;

  const normalizeGenres = genres.map(({ name }) => name).join(' ');
  const normalizeImgUrl = defaultUrlImage + poster_path;
  const normalizeOriginalTitle = original_title.toUpperCase();
  const normalizePopularity = Math.round(popularity)

  modalWrapperEl.innerHTML = `
    <img class="modal-img" src="${ normalizeImgUrl }" alt="">
    <div class="modal-text-content-wrapper">
      <h3 class="modal-title">${ normalizeOriginalTitle }</h3>
      <ul class="modal-info-list">
        <li class="modal-info-item">
          <p class="modal-info-text">Vote / Votes</p>
          <p class="modal-info-text">${ vote_average } / ${ vote_count }</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Popularity</p>
          <p class="modal-info-text">${ normalizePopularity }</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Original Title</p>
          <p class="modal-info-text">${ normalizeOriginalTitle }</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Genre</p>
          <p class="modal-info-text">${ normalizeGenres }</p>
        </li>
      </ul>
      <p class="modal-about">
        <span class="modal-about-title">About</span>
        ${ overview }
      </p>
      <div class="modal-btn-wrapper">
        <button type="button" class="modal-btn">Add to watched</button>
        <button type="button" class="modal-btn">Add to queue</button>
      </div>
    </div>
  `;
};

export {
  movieDetailsModalMarkup,
};