import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as B,d as I}from"./assets/vendor-cab2c1cb.js";const T="https://api.themoviedb.org/3",Y="82b205270d637f8e7c805273646956b7",D="https://image.tmdb.org/t/p/w500/",G="/discover/movie",N="/genre/movie/list",H="/search/movie",O="/movie",d={baseURL:T,api_key:Y,moviesEndPoint:G,defaultUrlImage:D,genreEndPoint:N,searchEndPoint:H,movieDetailsEndPoint:O},W={api_key:d.api_key},L=B.create({baseURL:d.baseURL,params:W}),J=async(e=1)=>{const{data:s}=await L(`${d.moviesEndPoint}?page=${e}`);return s},Q=async()=>{const{data:e}=await L(`${d.genreEndPoint}`);return e},R=async(e,s)=>{const{data:t}=await L(`${d.searchEndPoint}?page=${e}&query=${s}`);return t},j=async e=>{const{data:s}=await L(`${d.movieDetailsEndPoint}/${e}`);return s},w={getAllMovies:J,getGenres:Q,getMovieByKeyword:R,getMovieDetails:j},K=document.querySelector(".loader-backdrop"),z=async e=>{K.classList.toggle("is-hidden");try{return await w.getAllMovies(e)}catch(s){console.log(s.message)}finally{K.classList.toggle("is-hidden")}},C={getAllMovies:z},q=document.querySelector(".loader-backdrop"),V=async(e,s)=>{q.classList.toggle("loader-backdrop");try{return await w.getMovieByKeyword(e,s)}catch(t){console.log(t.message)}finally{q.classList.toggle("loader-backdrop")}},F={getMovieByKeyword:V},X="page",Z="watched",ee="queue",r={GENRES_KEY:X,WATCHED_KEY:Z,QUEUE_KEY:ee},te="/codeMasters/assets/default-image-112f438b.jpg",se=document.querySelector(".movies-list"),oe=e=>{const s=JSON.parse(localStorage.getItem(r.GENRES_KEY));se.innerHTML=e.map(({title:t,poster_path:o,genre_ids:m,release_date:E,id:c})=>{const n=o===null?te:d.defaultUrlImage+o,a=E.split("-")[0],i=s.filter(l=>m.includes(l.id)).map(l=>l.name).join(", ");return`
        <li class="movies-item" data-id="${c}">
          <img class="movies-img" src="${n}" alt="${t}" loading="lazy"/>
          <p class="movies-title overflowWrap">${t}</p>
          <p class="movies-text overflowWrap">${i} | ${a}</p>
        </li>
      `}).join("")},p=5,k=(e,s="")=>{let t=1,o=1;const m=document.getElementById("pagination-container"),E=n=>{m.innerHTML="";const a=document.createElement("ul");a.classList.add("pagination-list");const i=document.createElement("li");i.innerHTML=`<button class="pagination-btn">
  <svg class="icon icon-arrow-left" width="16" height="16">
  <use href="./img/svg/symbol-defs.svg#icon-arrow-left"></use>
  </svg>
</button>`;const l=i.children[0];l.disabled=t===1,l.addEventListener("click",()=>{t>1&&c(t-1)}),a.appendChild(i);let y=Math.max(1,t-Math.floor(p/2)),f=Math.min(n,t+Math.floor(p/2));t-1<Math.floor(p/2)&&(f=Math.min(o,p)),o-t<Math.floor(p/2)&&(y=Math.max(1,o-p+1));for(let g=y;g<=f;g+=1){const x=document.createElement("li"),h=document.createElement("button");h.classList.add("pagination-btn"),h.innerText=g.toString(),h.classList.toggle("pagination-current",g===t),h.addEventListener("click",()=>{t!==g&&c(g)}),x.appendChild(h),a.appendChild(x)}const S=document.createElement("li");S.innerHTML=`<button class="pagination-btn">
  <svg class="icon icon-arrow-left" width="16" height="16">
  <use href="./img/svg/symbol-defs.svg#icon-arrow-right"></use>
  </svg>
</button>`;const _=S.children[0];_.disabled=t===n,_.addEventListener("click",()=>{t<n&&c(t+1)}),a.appendChild(S),m.appendChild(a)},c=async n=>{t=n;const{total_pages:a,results:i}=await e(n,s);i&&(oe(i),o=a>500?500:a,E(o))};c(1)},ae=document.querySelector(".js__header-input"),ne=e=>{const s=e.target.value.trim();s.length===0?k(C.getAllMovies):k(F.getMovieByKeyword,s)};ae.addEventListener("input",I(ne,1e3));const ie=async()=>{try{const{genres:e}=await w.getGenres();localStorage.setItem(r.GENRES_KEY,JSON.stringify(e))}catch(e){console.log(e.message)}};ie();k(C.getAllMovies);const le=document.querySelector(".modal-wrapper"),ce=e=>{const{poster_path:s,original_title:t,genres:o,vote_average:m,vote_count:E,popularity:c,overview:n}=e,a=o.map(({name:f})=>f).join(" "),i=d.defaultUrlImage+s,l=t.toUpperCase(),y=Math.round(c);le.innerHTML=`
    <img class="modal-img" src="${i}" alt="">
    <div class="modal-text-content-wrapper">
      <h3 class="modal-title">${l}</h3>
      <ul class="modal-info-list">
        <li class="modal-info-item">
          <p class="modal-info-text">Vote / Votes</p>
          <p class="modal-info-text">${m} / ${E}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Popularity</p>
          <p class="modal-info-text">${y}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Original Title</p>
          <p class="modal-info-text">${l}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Genre</p>
          <p class="modal-info-text">${a}</p>
        </li>
      </ul>
      <p class="modal-about">
        <span class="modal-about-title">About</span>
        ${n}
      </p>
      <div class="modal-btn-wrapper">
        <button type="button" class="modal-btn modal-btn-watched">Add to watched</button>
        <button type="button" class="modal-btn modal-btn-queue">Add to queue</button>
      </div>
    </div>
  `},re=document.querySelector(".movies-list"),b=document.querySelector(".backdrop"),P=document.querySelector(".modal-btn-close");let u=localStorage.getItem(r.WATCHED_KEY)?JSON.parse(localStorage.getItem(r.WATCHED_KEY)):[],v=localStorage.getItem(r.QUEUE_KEY)?JSON.parse(localStorage.getItem(r.QUEUE_KEY)):[];const de=async e=>{if(e.target.classList.contains("movies-list")===!0)return;const s=e.target.closest("li").dataset.id;try{const t=await w.getMovieDetails(s);b.classList.remove("is-hidden"),ce(t),window.addEventListener("keydown",U),P.addEventListener("click",M),b.addEventListener("click",A),me(t.id)}catch(t){console.log(t.message)}},M=()=>{b.classList.add("is-hidden"),window.removeEventListener("keydown",U),P.removeEventListener("click",M),b.removeEventListener("click",A)},U=e=>{e.code==="Escape"&&M()},A=e=>{e.target.classList.contains("backdrop")&&M()},me=e=>{const s=document.querySelector(".modal-btn-watched"),t=document.querySelector(".modal-btn-queue");u.includes(e)?s.classList.add("active"):s.classList.remove("active"),v.includes(e)?t.classList.add("active"):t.classList.remove("active"),s.addEventListener("click",()=>{u.includes(e)?(u=u.filter(o=>o!==e),s.classList.remove("active")):(u.push(e),s.classList.add("active")),localStorage.setItem(r.WATCHED_KEY,JSON.stringify(u))}),t.addEventListener("click",()=>{v.includes(e)?(v=v.filter(o=>o!==e),t.classList.remove("active")):(v.push(e),t.classList.add("active")),localStorage.setItem(r.QUEUE_KEY,JSON.stringify(v))})};re.addEventListener("click",de);const $=document.querySelector(".btn-scroll-up");window.addEventListener("scroll",()=>{window.scrollY>250?$.style.display="flex":$.style.display="none"});$.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
