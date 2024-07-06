import{a as A}from"./vendor-cab2c1cb.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const O="https://api.themoviedb.org/3",T="82b205270d637f8e7c805273646956b7",K="https://image.tmdb.org/t/p/w500/",Y="/discover/movie",N="/genre/movie/list",D="/search/movie",W="/movie",H="/movie",m={baseURL:O,api_key:T,moviesEndPoint:Y,defaultUrlImage:K,genreEndPoint:N,searchEndPoint:D,movieDetailsEndPoint:W,movieByIdEndPoint:H},R={api_key:m.api_key},y=A.create({baseURL:m.baseURL,params:R}),Q=async(e=1)=>{const{data:o}=await y(`${m.moviesEndPoint}?page=${e}`);return o},j=async()=>{const{data:e}=await y(`${m.genreEndPoint}`);return e},G=async(e,o)=>{const{data:t}=await y(`${m.searchEndPoint}?page=${e}&query=${o}`);return t},z=async e=>{const{data:o}=await y(`${m.movieDetailsEndPoint}/${e}`);return o},J=async e=>{const{data:o}=await y(`${m.movieByIdEndPoint}/${e}`);return o},S={getAllMovies:Q,getGenres:j,getMovieByKeyword:G,getMovieDetails:z,getMovieById:J},V="page",F="watched",X="queue",g={GENRES_KEY:V,WATCHED_KEY:F,QUEUE_KEY:X},Z="/codeMasters/assets/default-image-112f438b.jpg",ee=document.querySelector(".movies-list"),$=e=>{const o=JSON.parse(localStorage.getItem(g.GENRES_KEY));ee.innerHTML=e.map(({title:t,poster_path:n,genre_ids:s,release_date:a,id:i})=>{const r=n===null?Z:m.defaultUrlImage+n,c=a.split("-")[0],d=o.filter(l=>s.includes(l.id)).map(l=>l.name).join(", ");return`
        <li class="movies-item" data-id="${i}">
          <img class="movies-img" src="${r}" alt="${t}" loading="lazy"/>
          <p class="movies-title overflowWrap">${t}</p>
          <p class="movies-text overflowWrap">${d} | ${c}</p>
        </li>
      `}).join("")},P=new URL("/codeMasters/assets/symbol-defs-77600034.svg",self.location),f=5,le=(e,o="")=>{let t=1,n=1;const s=document.getElementById("pagination-container"),a=r=>{s.innerHTML="";const c=document.createElement("ul");c.classList.add("pagination-list");const d=document.createElement("li"),l=document.createElement("button");l.innerHTML=`<svg class="icon icon-arrow-left" width="16" height="16"><use href="${P}#icon-arrow-left"></use></svg>`,l.classList.add("pagination-btn"),l.disabled=t===1,l.addEventListener("click",()=>{t>1&&i(t-1)}),d.appendChild(l),c.appendChild(d);let L=Math.max(1,t-Math.floor(f/2)),w=Math.min(r,t+Math.floor(f/2));t-1<Math.floor(f/2)&&(w=Math.min(n,f)),n-t<Math.floor(f/2)&&(L=Math.max(1,n-f+1));for(let v=L;v<=w;v+=1){const q=document.createElement("li"),E=document.createElement("button");E.classList.add("pagination-btn"),E.innerText=v.toString(),E.classList.toggle("pagination-current",v===t),E.addEventListener("click",()=>{t!==v&&i(v)}),q.appendChild(E),c.appendChild(q)}const x=document.createElement("li"),h=document.createElement("button");h.innerHTML=`<svg class="icon icon-arrow-left" width="16" height="16"><use href="${P}#icon-arrow-right"></use></svg>`,h.classList.add("pagination-btn"),h.disabled=t===r,h.addEventListener("click",()=>{t<r&&i(t+1)}),x.appendChild(h),c.appendChild(x),s.appendChild(c)},i=async r=>{t=r;const{total_pages:c,results:d}=await e(r,o);d&&($(d),n=c>500?500:c,a(n),window.scrollTo({top:0,behavior:"instant"}))};i(1)},te=async(e,o)=>{const t=[];try{for(let n=0;n<e.length;n+=1){const s=await o(e[n]),a=s.genres.map(i=>i.id);t.push({...s,genre_ids:a})}}catch(n){console.log(n.message);return}return t},_={MoviesList:te},oe=document.querySelector(".modal-wrapper"),se=e=>{const{poster_path:o,original_title:t,genres:n,vote_average:s,vote_count:a,popularity:i,overview:r}=e,c=n.map(({name:w})=>w).join(" "),d=m.defaultUrlImage+o,l=t.toUpperCase(),L=Math.round(i);oe.innerHTML=`
    <img class="modal-img" src="${d}" alt="">
    <div class="modal-text-content-wrapper">
      <h3 class="modal-title">${l}</h3>
      <ul class="modal-info-list">
        <li class="modal-info-item">
          <p class="modal-info-text">Vote / Votes</p>
          <p class="modal-info-text">${s} / ${a}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Popularity</p>
          <p class="modal-info-text">${L}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Original Title</p>
          <p class="modal-info-text">${l}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Genre</p>
          <p class="modal-info-text">${c}</p>
        </li>
      </ul>
      <p class="modal-about">
        <span class="modal-about-title">About</span>
        ${r}
      </p>
      <div class="modal-btn-wrapper">
        <button type="button" class="modal-btn modal-btn-watched">Add to watched</button>
        <button type="button" class="modal-btn modal-btn-queue">Add to queue</button>
      </div>
    </div>
  `},ne=document.querySelector(".movies-list"),b=document.querySelector(".backdrop"),U=document.querySelector(".modal-btn-close");let u=localStorage.getItem(g.WATCHED_KEY)?JSON.parse(localStorage.getItem(g.WATCHED_KEY)):[],p=localStorage.getItem(g.QUEUE_KEY)?JSON.parse(localStorage.getItem(g.QUEUE_KEY)):[];const ae=async e=>{if(e.target.classList.contains("movies-list")===!0)return;const o=e.target.closest("li").dataset.id;try{const t=await S.getMovieDetails(o);b.classList.remove("is-hidden"),se(t),window.addEventListener("keydown",I),U.addEventListener("click",M),b.addEventListener("click",B),ie(t.id)}catch(t){console.log(t.message)}},M=()=>{b.classList.add("is-hidden"),window.removeEventListener("keydown",I),U.removeEventListener("click",M),b.removeEventListener("click",B)},I=e=>{e.code==="Escape"&&M()},B=e=>{e.target.classList.contains("backdrop")&&M()},ie=e=>{const o=document.querySelector(".modal-btn-watched"),t=document.querySelector(".modal-btn-queue");k(o,u,e,"watched"),k(t,p,e,"queue"),o.addEventListener("click",async()=>{if(u.includes(e)?(u=u.filter(n=>n!==e),o.classList.remove("active"),o.textContent="Add to watched"):(u.push(e),o.classList.add("active"),o.textContent="Remove from watched"),location.pathname==="/my-library.html"&&document.querySelector(".js-watched").classList.contains("active")){const s=await _.MoviesList(u,S.getMovieById);$(s)}localStorage.setItem(g.WATCHED_KEY,JSON.stringify(u))}),t.addEventListener("click",async()=>{if(p.includes(e)?(p=p.filter(n=>n!==e),t.classList.remove("active"),t.textContent="Add to queue"):(p.push(e),t.classList.add("active"),t.textContent="Remove from queue"),location.pathname==="/my-library.html"&&document.querySelector(".js-queue").classList.contains("active")){const s=await _.MoviesList(p,S.getMovieById);$(s)}localStorage.setItem(g.QUEUE_KEY,JSON.stringify(p))})},k=(e,o,t,n)=>{o.includes(t)?(e.classList.add("active"),e.textContent=`Remove to ${n}`):(e.classList.remove("active"),e.textContent=`Add from ${n}`)};ne.addEventListener("click",ae);const C=document.querySelector(".btn-scroll-up");window.addEventListener("scroll",()=>{window.scrollY>250?C.style.display="flex":C.style.display="none"});C.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{le as c,_ as h,S as m,$ as r,g as s};
//# sourceMappingURL=btnScrollUp-8fd3a7b9.js.map
