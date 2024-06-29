import{a as q,t as A}from"./assets/vendor-0d65446b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const K="https://api.themoviedb.org/3",O="82b205270d637f8e7c805273646956b7",G="https://image.tmdb.org/t/p/w200/",N="/discover/movie",T="/genre/movie/list",U="/search/movie",D="/movie",m={baseURL:K,api_key:O,moviesEndPoint:N,defaultUrlImage:G,genreEndPoint:T,searchEndPoint:U,movieDetailsEndPoint:D},R={api_key:m.api_key},E=q.create({baseURL:m.baseURL,params:R}),j=async(e=1)=>{const{data:o}=await E(`${m.moviesEndPoint}?page=${e}`);return o},H=async()=>{const{data:e}=await E(`${m.genreEndPoint}`);return e},Y=async(e,o)=>{const{data:t}=await E(`${m.searchEndPoint}?page=${e}&query=${o}`);return t},z=async e=>{const{data:o}=await E(`${m.movieDetailsEndPoint}/${e}`);return o},L={getAllMovies:j,getGenres:H,getMovieByKeyword:Y,getMovieDetails:z},k=document.querySelector(".loader-backdrop"),V=async e=>{k.classList.toggle("is-hidden");try{return await L.getAllMovies(e)}catch(o){console.log(o.message)}finally{k.classList.toggle("is-hidden")}},x={getAllMovies:V},P=document.querySelector(".loader-backdrop"),W=async(e,o)=>{P.classList.toggle("loader-backdrop");try{return await L.getMovieByKeyword(e,o)}catch(t){console.log(t.message)}finally{P.classList.toggle("loader-backdrop")}},J={getMovieByKeyword:W},F="page",B={GENRES_KEY:F},Q="/codeMasters/assets/default-image-112f438b.jpg",X=document.querySelector(".movies-list"),Z=e=>{const o=JSON.parse(localStorage.getItem(B.GENRES_KEY));X.innerHTML=e.map(({title:t,poster_path:a,genre_ids:n,release_date:s,id:i})=>{const c=a===null?Q:m.defaultUrlImage+a,l=s.split("-")[0],d=o.filter(r=>n.includes(r.id)).map(r=>r.name).join(", ");return`
        <li class="movies-item" data-id="${i}">
          <img class="movies-img" src="${c}" alt="${t}"/>
          <p class="movies-title overflowWrap">${t}</p>
          <p class="movies-text overflowWrap">${d} | ${l}</p>
        </li>
      `}).join("")},u=5,w=(e,o="")=>{let t=1,a=1;const n=document.getElementById("pagination-container"),s=c=>{n.innerHTML="";const l=document.createElement("ul");l.classList.add("pagination-list");const d=document.createElement("li"),r=document.createElement("button");r.innerHTML="&#8592",r.classList.add("pagination-btn"),r.disabled=t===1,r.addEventListener("click",()=>{t>1&&i(t-1)}),d.appendChild(r),l.appendChild(d);let f=Math.max(1,t-Math.floor(u/2)),y=Math.min(c,t+Math.floor(u/2));t-1<Math.floor(u/2)&&(y=Math.min(a,u)),a-t<Math.floor(u/2)&&(f=Math.max(1,a-u+1));for(let p=f;p<=y;p+=1){const S=document.createElement("li"),v=document.createElement("button");v.classList.add("pagination-btn"),v.innerText=p.toString(),v.classList.toggle("pagination-current",p===t),v.addEventListener("click",()=>{t!==p&&i(p)}),S.appendChild(v),l.appendChild(S)}const $=document.createElement("li"),g=document.createElement("button");g.innerHTML="&#8594",g.classList.add("pagination-btn"),g.disabled=t===c,g.addEventListener("click",()=>{t<c&&i(t+1)}),$.appendChild(g),l.appendChild($),n.appendChild(l)},i=async c=>{t=c;const{total_pages:l,results:d}=await e(c,o);d&&(Z(d),a=l>500?500:l,s(a))};i(1)},ee=document.querySelector(".js__header-input"),te=e=>{const o=e.target.value.trim();o.length===0?w(x.getAllMovies):w(J.getMovieByKeyword,o)};ee.addEventListener("input",A(te,2e3));const oe=async()=>{try{const{genres:e}=await L.getGenres();localStorage.setItem(B.GENRES_KEY,JSON.stringify(e))}catch(e){console.log(e.message)}};oe();w(x.getAllMovies);const ne=document.querySelector(".modal-wrapper"),se=e=>{const{poster_path:o,original_title:t,genres:a,vote_average:n,vote_count:s,popularity:i,overview:c}=e,l=a.map(({name:y})=>y).join(" "),d=m.defaultUrlImage+o,r=t.toUpperCase(),f=Math.round(i);ne.innerHTML=`
    <img class="modal-img" src="${d}" alt="">
    <div class="modal-text-content-wrapper">
      <h3 class="modal-title">${r}</h3>
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
          <p class="modal-info-text">${r}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Genre</p>
          <p class="modal-info-text">${l}</p>
        </li>
      </ul>
      <p class="modal-about">
        <span class="modal-about-title">About</span>
        ${c}
      </p>
      <div class="modal-btn-wrapper">
        <button type="button" class="modal-btn">Add to watched</button>
        <button type="button" class="modal-btn">Add to queue</button>
      </div>
    </div>
  `},ae=document.querySelector(".movies-list"),h=document.querySelector(".backdrop"),C=document.querySelector(".modal-btn-close"),ie=async e=>{if(e.target.classList.contains("movies-list")===!0)return;const o=e.target.closest("li").dataset.id;try{const t=await L.getMovieDetails(o);h.classList.remove("is-hidden"),se(t),window.addEventListener("keydown",I),C.addEventListener("click",b),h.addEventListener("click",_)}catch(t){console.log(t.message)}},b=()=>{h.classList.add("is-hidden"),window.removeEventListener("keydown",I),C.removeEventListener("click",b),h.removeEventListener("click",_)},I=e=>{e.code==="Escape"&&b()},_=e=>{e.target.classList.contains("backdrop")&&b()};ae.addEventListener("click",ie);const M=document.querySelector(".btn-scroll-up");window.addEventListener("scroll",()=>{window.scrollY>250?M.style.display="flex":M.style.display="none"});M.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
