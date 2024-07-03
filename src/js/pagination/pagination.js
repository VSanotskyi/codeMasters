import renderMovies from '../renderMovies/renderMovies.js';

const VISIBLE_PAGES = 5;

const createPagination = (fetchFn, keyword = '') => {
  let currentPage = 1;
  let totalPages = 1;
  const paginationContainerEl = document.getElementById('pagination-container');

  const renderPagination = (totalPage) => {
    paginationContainerEl.innerHTML = '';

    const ul = document.createElement('ul');
    ul.classList.add('pagination-list');

    const prevLi = document.createElement('li');
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '<svg class="icon icon-arrow-left" width="16" height="16"><use href="./img/svg/symbol-defs.svg#icon-arrow-left"></use></svg>';
    prevBtn.classList.add('pagination-btn');
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        void loadPage(currentPage - 1);
      }
    });
    prevLi.appendChild(prevBtn);
    ul.appendChild(prevLi);

    let startPage = Math.max(1, currentPage - Math.floor(VISIBLE_PAGES / 2));
    let endPage = Math.min(totalPage, currentPage + Math.floor(VISIBLE_PAGES / 2));

    if (currentPage - 1 < Math.floor(VISIBLE_PAGES / 2)) {
      endPage = Math.min(totalPages, VISIBLE_PAGES);
    }

    if (totalPages - currentPage < Math.floor(VISIBLE_PAGES / 2)) {
      startPage = Math.max(1, totalPages - VISIBLE_PAGES + 1);
    }

    for (let i = startPage; i <= endPage; i += 1) {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.classList.add('pagination-btn');
      btn.innerText = i.toString();
      btn.classList.toggle('pagination-current', i === currentPage);
      btn.addEventListener('click', () => {
        if (currentPage !== i) {
          void loadPage(i);
        }
      });

      li.appendChild(btn);
      ul.appendChild(li);
    }

    const nextLi = document.createElement('li');
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '<svg class="icon icon-arrow-left" width="16" height="16"><use href="./img/svg/symbol-defs.svg#icon-arrow-right"></use></svg>';
    nextBtn.classList.add('pagination-btn');
    nextBtn.disabled = currentPage === totalPage;
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPage) {
        void loadPage(currentPage + 1);
      }
    });
    nextLi.appendChild(nextBtn);
    ul.appendChild(nextLi);

    paginationContainerEl.appendChild(ul);
  };

  const loadPage = async (page) => {
    currentPage = page;

    const { total_pages, results } = await fetchFn(page, keyword);

    if (results) {
      renderMovies(results);
      totalPages = total_pages > 500 ? 500 : total_pages;
      renderPagination(totalPages);
    }
  };

  void loadPage(1);
};

export default createPagination;