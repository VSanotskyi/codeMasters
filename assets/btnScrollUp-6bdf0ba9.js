import{a as k}from"./vendor-cab2c1cb.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();const q="https://api.themoviedb.org/3",O="82b205270d637f8e7c805273646956b7",T="https://image.tmdb.org/t/p/w500/",K="/discover/movie",I="/genre/movie/list",Y="/search/movie",N="/movie",m={baseURL:q,api_key:O,moviesEndPoint:K,defaultUrlImage:T,genreEndPoint:I,searchEndPoint:Y,movieDetailsEndPoint:N},A={api_key:m.api_key},w=k.create({baseURL:m.baseURL,params:A}),D=async(t=1)=>{const{data:s}=await w(`${m.moviesEndPoint}?page=${t}`);return s},H=async()=>{const{data:t}=await w(`${m.genreEndPoint}`);return t},W=async(t,s)=>{const{data:e}=await w(`${m.searchEndPoint}?page=${t}&query=${s}`);return e},B=async t=>{const{data:s}=await w(`${m.movieDetailsEndPoint}/${t}`);return s},G={getAllMovies:D,getGenres:H,getMovieByKeyword:W,getMovieDetails:B},Q="page",R="watched",z="queue",p={GENRES_KEY:Q,WATCHED_KEY:R,QUEUE_KEY:z},J="/codeMasters/assets/default-image-112f438b.jpg",j=document.querySelector(".movies-list"),V=t=>{const s=JSON.parse(localStorage.getItem(p.GENRES_KEY));j.innerHTML=t.map(({title:e,poster_path:a,genre_ids:o,release_date:n,id:i})=>{const r=a===null?J:m.defaultUrlImage+a,l=n.split("-")[0],d=s.filter(c=>o.includes(c.id)).map(c=>c.name).join(", ");return`
        <li class="movies-item" data-id="${i}">
          <img class="movies-img" src="${r}" alt="${e}" loading="lazy"/>
          <p class="movies-title overflowWrap">${e}</p>
          <p class="movies-text overflowWrap">${d} | ${l}</p>
        </li>
      `}).join("")},C=new URL("/codeMasters/assets/symbol-defs-77600034.svg",self.location),g=5,oe=(t,s="")=>{let e=1,a=1;const o=document.getElementById("pagination-container"),n=r=>{o.innerHTML="";const l=document.createElement("ul");l.classList.add("pagination-list");const d=document.createElement("li"),c=document.createElement("button");c.innerHTML=`<svg class="icon icon-arrow-left" width="16" height="16"><use href="${C}#icon-arrow-left"></use></svg>`,c.classList.add("pagination-btn"),c.disabled=e===1,c.addEventListener("click",()=>{e>1&&i(e-1)}),d.appendChild(c),l.appendChild(d);let L=Math.max(1,e-Math.floor(g/2)),y=Math.min(r,e+Math.floor(g/2));e-1<Math.floor(g/2)&&(y=Math.min(a,g)),a-e<Math.floor(g/2)&&(L=Math.max(1,a-g+1));for(let u=L;u<=y;u+=1){const P=document.createElement("li"),h=document.createElement("button");h.classList.add("pagination-btn"),h.innerText=u.toString(),h.classList.toggle("pagination-current",u===e),h.addEventListener("click",()=>{e!==u&&i(u)}),P.appendChild(h),l.appendChild(P)}const $=document.createElement("li"),E=document.createElement("button");E.innerHTML=`<svg class="icon icon-arrow-left" width="16" height="16"><use href="${C}#icon-arrow-right"></use></svg>`,E.classList.add("pagination-btn"),E.disabled=e===r,E.addEventListener("click",()=>{e<r&&i(e+1)}),$.appendChild(E),l.appendChild($),o.appendChild(l)},i=async r=>{e=r;const{total_pages:l,results:d}=await t(r,s);d&&(V(d),a=l>500?500:l,n(a),window.scrollTo({top:0,behavior:"instant"}))};i(1)},F=document.querySelector(".modal-wrapper"),X=t=>{const{poster_path:s,original_title:e,genres:a,vote_average:o,vote_count:n,popularity:i,overview:r}=t,l=a.map(({name:y})=>y).join(" "),d=m.defaultUrlImage+s,c=e.toUpperCase(),L=Math.round(i);F.innerHTML=`
    <img class="modal-img" src="${d}" alt="">
    <div class="modal-text-content-wrapper">
      <h3 class="modal-title">${c}</h3>
      <ul class="modal-info-list">
        <li class="modal-info-item">
          <p class="modal-info-text">Vote / Votes</p>
          <p class="modal-info-text">${o} / ${n}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Popularity</p>
          <p class="modal-info-text">${L}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Original Title</p>
          <p class="modal-info-text">${c}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Genre</p>
          <p class="modal-info-text">${l}</p>
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
  `},Z=document.querySelector(".movies-list"),b=document.querySelector(".backdrop"),x=document.querySelector(".modal-btn-close");let f=localStorage.getItem(p.WATCHED_KEY)?JSON.parse(localStorage.getItem(p.WATCHED_KEY)):[],v=localStorage.getItem(p.QUEUE_KEY)?JSON.parse(localStorage.getItem(p.QUEUE_KEY)):[];const ee=async t=>{if(t.target.classList.contains("movies-list")===!0)return;const s=t.target.closest("li").dataset.id;try{const e=await G.getMovieDetails(s);b.classList.remove("is-hidden"),X(e),window.addEventListener("keydown",U),x.addEventListener("click",S),b.addEventListener("click",_),te(e.id)}catch(e){console.log(e.message)}},S=()=>{b.classList.add("is-hidden"),window.removeEventListener("keydown",U),x.removeEventListener("click",S),b.removeEventListener("click",_)},U=t=>{t.code==="Escape"&&S()},_=t=>{t.target.classList.contains("backdrop")&&S()},te=t=>{const s=document.querySelector(".modal-btn-watched"),e=document.querySelector(".modal-btn-queue");f.includes(t)?s.classList.add("active"):s.classList.remove("active"),v.includes(t)?e.classList.add("active"):e.classList.remove("active"),s.addEventListener("click",()=>{f.includes(t)?(f=f.filter(a=>a!==t),s.classList.remove("active")):(f.push(t),s.classList.add("active")),localStorage.setItem(p.WATCHED_KEY,JSON.stringify(f))}),e.addEventListener("click",()=>{v.includes(t)?(v=v.filter(a=>a!==t),e.classList.remove("active")):(v.push(t),e.classList.add("active")),localStorage.setItem(p.QUEUE_KEY,JSON.stringify(v))})};Z.addEventListener("click",ee);const M=document.querySelector(".btn-scroll-up");window.addEventListener("scroll",()=>{window.scrollY>250?M.style.display="flex":M.style.display="none"});M.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{w as a,oe as c,G as m,p as s,m as u};
//# sourceMappingURL=btnScrollUp-6bdf0ba9.js.map
