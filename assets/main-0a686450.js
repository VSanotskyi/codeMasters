import{a as q,d as A}from"./vendor-cab2c1cb.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const K="https://api.themoviedb.org/3",O="82b205270d637f8e7c805273646956b7",G="https://image.tmdb.org/t/p/w200/",N="/discover/movie",T="/genre/movie/list",U="/search/movie",D="/movie",m={baseURL:K,api_key:O,moviesEndPoint:N,defaultUrlImage:G,genreEndPoint:T,searchEndPoint:U,movieDetailsEndPoint:D},R={api_key:m.api_key},h=q.create({baseURL:m.baseURL,params:R}),j=async(e=1)=>{const{data:o}=await h(`${m.moviesEndPoint}?page=${e}`);return o},H=async()=>{const{data:e}=await h(`${m.genreEndPoint}`);return e},Y=async(e,o)=>{const{data:t}=await h(`${m.searchEndPoint}?page=${e}&query=${o}`);return t},z=async e=>{const{data:o}=await h(`${m.movieDetailsEndPoint}/${e}`);return o},L={getAllMovies:j,getGenres:H,getMovieByKeyword:Y,getMovieDetails:z},k=document.querySelector(".loader-backdrop"),V=async e=>{k.classList.toggle("is-hidden");try{return await L.getAllMovies(e)}catch(o){console.log(o.message)}finally{k.classList.toggle("is-hidden")}},x={getAllMovies:V},P=document.querySelector(".loader-backdrop"),W=async(e,o)=>{P.classList.toggle("loader-backdrop");try{return await L.getMovieByKeyword(e,o)}catch(t){console.log(t.message)}finally{P.classList.toggle("loader-backdrop")}},J={getMovieByKeyword:W},F="page",B={GENRES_KEY:F},Q="/codeMasters/assets/default-image-112f438b.jpg",X=document.querySelector(".movies-list"),Z=e=>{const o=JSON.parse(localStorage.getItem(B.GENRES_KEY));X.innerHTML=e.map(({title:t,poster_path:a,genre_ids:n,release_date:s,id:i})=>{const r=a===null?Q:m.defaultUrlImage+a,l=s.split("-")[0],d=o.filter(c=>n.includes(c.id)).map(c=>c.name).join(", ");return`
        <li class="movies-item" data-id="${i}">
          <img class="movies-img" src="${r}" alt="${t}"/>
          <p class="movies-title overflowWrap">${t}</p>
          <p class="movies-text overflowWrap">${d} | ${l}</p>
        </li>
      `}).join("")},u=5,w=(e,o="")=>{let t=1,a=1;const n=document.getElementById("pagination-container"),s=r=>{n.innerHTML="";const l=document.createElement("ul");l.classList.add("pagination-list");const d=document.createElement("li"),c=document.createElement("button");c.innerHTML="&#8592",c.classList.add("pagination-btn"),c.disabled=t===1,c.addEventListener("click",()=>{t>1&&i(t-1)}),d.appendChild(c),l.appendChild(d);let f=Math.max(1,t-Math.floor(u/2)),y=Math.min(r,t+Math.floor(u/2));t-1<Math.floor(u/2)&&(y=Math.min(a,u)),a-t<Math.floor(u/2)&&(f=Math.max(1,a-u+1));for(let p=f;p<=y;p+=1){const S=document.createElement("li"),v=document.createElement("button");v.classList.add("pagination-btn"),v.innerText=p.toString(),v.classList.toggle("pagination-current",p===t),v.addEventListener("click",()=>{t!==p&&i(p)}),S.appendChild(v),l.appendChild(S)}const $=document.createElement("li"),g=document.createElement("button");g.innerHTML="&#8594",g.classList.add("pagination-btn"),g.disabled=t===r,g.addEventListener("click",()=>{t<r&&i(t+1)}),$.appendChild(g),l.appendChild($),n.appendChild(l)},i=async r=>{t=r;const{total_pages:l,results:d}=await e(r,o);d&&(Z(d),a=l>500?500:l,s(a))};i(1)},ee=document.querySelector(".js__header-input"),te=e=>{const o=e.target.value.trim();o.length===0?w(x.getAllMovies):w(J.getMovieByKeyword,o)};ee.addEventListener("input",A(te,1e3));const oe=async()=>{try{const{genres:e}=await L.getGenres();localStorage.setItem(B.GENRES_KEY,JSON.stringify(e))}catch(e){console.log(e.message)}};oe();w(x.getAllMovies);const ne=document.querySelector(".modal-wrapper"),se=e=>{const{poster_path:o,original_title:t,genres:a,vote_average:n,vote_count:s,popularity:i,overview:r}=e,l=a.map(({name:y})=>y).join(" "),d=m.defaultUrlImage+o,c=t.toUpperCase(),f=Math.round(i);ne.innerHTML=`
    <img class="modal-img" src="${d}" alt="">
    <div class="modal-text-content-wrapper">
      <h3 class="modal-title">${c}</h3>
      <ul class="modal-info-list">
        <li class="modal-info-item">
          <p class="modal-info-text">Vote / Votes</p>
          <p class="modal-info-text">${n} / ${s}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Popularity</p>
          <p class="modal-info-text">${f}</p>
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
        <button type="button" class="modal-btn">Add to watched</button>
        <button type="button" class="modal-btn">Add to queue</button>
      </div>
    </div>
  `},ae=document.querySelector(".movies-list"),E=document.querySelector(".backdrop"),C=document.querySelector(".modal-btn-close"),ie=async e=>{if(e.target.classList.contains("movies-list")===!0)return;const o=e.target.closest("li").dataset.id;try{const t=await L.getMovieDetails(o);E.classList.remove("is-hidden"),se(t),window.addEventListener("keydown",I),C.addEventListener("click",b),E.addEventListener("click",_)}catch(t){console.log(t.message)}},b=()=>{E.classList.add("is-hidden"),window.removeEventListener("keydown",I),C.removeEventListener("click",b),E.removeEventListener("click",_)},I=e=>{e.code==="Escape"&&b()},_=e=>{e.target.classList.contains("backdrop")&&b()};ae.addEventListener("click",ie);const M=document.querySelector(".btn-scroll-up");window.addEventListener("scroll",()=>{window.scrollY>250?M.style.display="flex":M.style.display="none"});M.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=main-0a686450.js.map
