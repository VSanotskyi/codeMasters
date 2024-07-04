import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as I,d as T}from"./assets/vendor-cab2c1cb.js";const Y="https://api.themoviedb.org/3",D="82b205270d637f8e7c805273646956b7",G="https://image.tmdb.org/t/p/w500/",N="/discover/movie",H="/genre/movie/list",O="/search/movie",W="/movie",d={baseURL:Y,api_key:D,moviesEndPoint:N,defaultUrlImage:G,genreEndPoint:H,searchEndPoint:O,movieDetailsEndPoint:W},R={api_key:d.api_key},w=I.create({baseURL:d.baseURL,params:R}),J=async(e=1)=>{const{data:s}=await w(`${d.moviesEndPoint}?page=${e}`);return s},Q=async()=>{const{data:e}=await w(`${d.genreEndPoint}`);return e},j=async(e,s)=>{const{data:t}=await w(`${d.searchEndPoint}?page=${e}&query=${s}`);return t},z=async e=>{const{data:s}=await w(`${d.movieDetailsEndPoint}/${e}`);return s},M={getAllMovies:J,getGenres:Q,getMovieByKeyword:j,getMovieDetails:z},x=document.querySelector(".loader-backdrop"),V=async e=>{x.classList.toggle("is-hidden");try{return await M.getAllMovies(e)}catch(s){console.log(s.message)}finally{x.classList.toggle("is-hidden")}},q={getAllMovies:V},K=document.querySelector(".loader-backdrop"),F=async(e,s)=>{K.classList.toggle("loader-backdrop");try{return await M.getMovieByKeyword(e,s)}catch(t){console.log(t.message)}finally{K.classList.toggle("loader-backdrop")}},X={getMovieByKeyword:F},Z="page",ee="watched",te="queue",r={GENRES_KEY:Z,WATCHED_KEY:ee,QUEUE_KEY:te},se="/codeMasters/assets/default-image-112f438b.jpg",oe=document.querySelector(".movies-list"),ae=e=>{const s=JSON.parse(localStorage.getItem(r.GENRES_KEY));oe.innerHTML=e.map(({title:t,poster_path:o,genre_ids:m,release_date:E,id:c})=>{const i=o===null?se:d.defaultUrlImage+o,a=E.split("-")[0],l=s.filter(n=>m.includes(n.id)).map(n=>n.name).join(", ");return`
        <li class="movies-item" data-id="${c}">
          <img class="movies-img" src="${i}" alt="${t}" loading="lazy"/>
          <p class="movies-title overflowWrap">${t}</p>
          <p class="movies-text overflowWrap">${l} | ${a}</p>
        </li>
      `}).join("")},U=new URL("/codeMasters/assets/symbol-defs-77600034.svg",self.location),g=5,k=(e,s="")=>{let t=1,o=1;const m=document.getElementById("pagination-container"),E=i=>{m.innerHTML="";const a=document.createElement("ul");a.classList.add("pagination-list");const l=document.createElement("li"),n=document.createElement("button");n.innerHTML=`<svg class="icon icon-arrow-left" width="16" height="16"><use href="${U}#icon-arrow-left"></use></svg>`,n.classList.add("pagination-btn"),n.disabled=t===1,n.addEventListener("click",()=>{t>1&&c(t-1)}),l.appendChild(n),a.appendChild(l);let f=Math.max(1,t-Math.floor(g/2)),L=Math.min(i,t+Math.floor(g/2));t-1<Math.floor(g/2)&&(L=Math.min(o,g)),o-t<Math.floor(g/2)&&(f=Math.max(1,o-g+1));for(let p=f;p<=L;p+=1){const C=document.createElement("li"),y=document.createElement("button");y.classList.add("pagination-btn"),y.innerText=p.toString(),y.classList.toggle("pagination-current",p===t),y.addEventListener("click",()=>{t!==p&&c(p)}),C.appendChild(y),a.appendChild(C)}const _=document.createElement("li"),h=document.createElement("button");h.innerHTML=`<svg class="icon icon-arrow-left" width="16" height="16"><use href="${U}#icon-arrow-right"></use></svg>`,h.classList.add("pagination-btn"),h.disabled=t===i,h.addEventListener("click",()=>{t<i&&c(t+1)}),_.appendChild(h),a.appendChild(_),m.appendChild(a)},c=async i=>{t=i;const{total_pages:a,results:l}=await e(i,s);l&&(ae(l),o=a>500?500:a,E(o),window.scrollTo({top:0,behavior:"instant"}))};c(1)},ne=document.querySelector(".js__header-input"),ie=e=>{const s=e.target.value.trim();s.length===0?k(q.getAllMovies):k(X.getMovieByKeyword,s)};ne.addEventListener("input",T(ie,1e3));const le=async()=>{try{const{genres:e}=await M.getGenres();localStorage.setItem(r.GENRES_KEY,JSON.stringify(e))}catch(e){console.log(e.message)}};le();k(q.getAllMovies);const ce=document.querySelector(".modal-wrapper"),re=e=>{const{poster_path:s,original_title:t,genres:o,vote_average:m,vote_count:E,popularity:c,overview:i}=e,a=o.map(({name:L})=>L).join(" "),l=d.defaultUrlImage+s,n=t.toUpperCase(),f=Math.round(c);ce.innerHTML=`
    <img class="modal-img" src="${l}" alt="">
    <div class="modal-text-content-wrapper">
      <h3 class="modal-title">${n}</h3>
      <ul class="modal-info-list">
        <li class="modal-info-item">
          <p class="modal-info-text">Vote / Votes</p>
          <p class="modal-info-text">${m} / ${E}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Popularity</p>
          <p class="modal-info-text">${f}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Original Title</p>
          <p class="modal-info-text">${n}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Genre</p>
          <p class="modal-info-text">${a}</p>
        </li>
      </ul>
      <p class="modal-about">
        <span class="modal-about-title">About</span>
        ${i}
      </p>
      <div class="modal-btn-wrapper">
        <button type="button" class="modal-btn modal-btn-watched">Add to watched</button>
        <button type="button" class="modal-btn modal-btn-queue">Add to queue</button>
      </div>
    </div>
  `},de=document.querySelector(".movies-list"),b=document.querySelector(".backdrop"),P=document.querySelector(".modal-btn-close");let u=localStorage.getItem(r.WATCHED_KEY)?JSON.parse(localStorage.getItem(r.WATCHED_KEY)):[],v=localStorage.getItem(r.QUEUE_KEY)?JSON.parse(localStorage.getItem(r.QUEUE_KEY)):[];const me=async e=>{if(e.target.classList.contains("movies-list")===!0)return;const s=e.target.closest("li").dataset.id;try{const t=await M.getMovieDetails(s);b.classList.remove("is-hidden"),re(t),window.addEventListener("keydown",A),P.addEventListener("click",S),b.addEventListener("click",B),pe(t.id)}catch(t){console.log(t.message)}},S=()=>{b.classList.add("is-hidden"),window.removeEventListener("keydown",A),P.removeEventListener("click",S),b.removeEventListener("click",B)},A=e=>{e.code==="Escape"&&S()},B=e=>{e.target.classList.contains("backdrop")&&S()},pe=e=>{const s=document.querySelector(".modal-btn-watched"),t=document.querySelector(".modal-btn-queue");u.includes(e)?s.classList.add("active"):s.classList.remove("active"),v.includes(e)?t.classList.add("active"):t.classList.remove("active"),s.addEventListener("click",()=>{u.includes(e)?(u=u.filter(o=>o!==e),s.classList.remove("active")):(u.push(e),s.classList.add("active")),localStorage.setItem(r.WATCHED_KEY,JSON.stringify(u))}),t.addEventListener("click",()=>{v.includes(e)?(v=v.filter(o=>o!==e),t.classList.remove("active")):(v.push(e),t.classList.add("active")),localStorage.setItem(r.QUEUE_KEY,JSON.stringify(v))})};de.addEventListener("click",me);const $=document.querySelector(".btn-scroll-up");window.addEventListener("scroll",()=>{window.scrollY>250?$.style.display="flex":$.style.display="none"});$.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
