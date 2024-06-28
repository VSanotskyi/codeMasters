import { PAGE_KEY, TOTAL_PAGES_KEY } from '../constants/storageKey.js';
import { getMovies } from '../moviesList/moviesList.js';

const paginationContainerEl = document.querySelector('.pagination-container');
const pageButtons = document.querySelectorAll('.page');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentPage = Number(localStorage.getItem(PAGE_KEY))
  ? Number(localStorage.getItem(PAGE_KEY))
  : 1;
const totalPages =
  Number(localStorage.getItem(TOTAL_PAGES_KEY)) > 500
    ? 500
    : Number(localStorage.getItem(TOTAL_PAGES_KEY));
const visiblePage = 5;

const updatePagination = () => {
  let halfVisible = Math.floor(visiblePage / 2);
  let startPage = Math.max(currentPage - halfVisible, 1);
  let endPage = Math.min(currentPage + halfVisible, totalPages);

  if (endPage - startPage + 1 < visiblePage) {
    if (startPage === 1) {
      endPage = Math.min(startPage + visiblePage - 1, totalPages);
    } else if (endPage === totalPages) {
      startPage = Math.max(endPage - visiblePage + 1, 1);
    }
  }

  pageButtons.forEach((btn, i) => {
    const pageNumber = startPage + i;

    btn.textContent = String(pageNumber);

    if (pageNumber === currentPage) {
      btn.classList.add('pagination-current');
    } else {
      btn.classList.remove('pagination-current');
    }
  });

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
};

const handleClickPaginationBtn = async e => {
  if (e.target.classList.contains('page')) {
    currentPage = Number(e.target.textContent);
  }

  if (e.target.classList.contains('prev')) {
    currentPage -= 1;
  }

  if (e.target.classList.contains('next')) {
    currentPage += 1;
  }

  void getMovies(currentPage);

  updatePagination();
};

updatePagination();

paginationContainerEl.addEventListener('click', handleClickPaginationBtn);
