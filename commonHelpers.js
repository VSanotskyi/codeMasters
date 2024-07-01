import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as q,d as A}from"./assets/vendor-cab2c1cb.js";const G="https://api.themoviedb.org/3",K="82b205270d637f8e7c805273646956b7",T="https://image.tmdb.org/t/p/w200/",U="/discover/movie",D="/genre/movie/list",N="/search/movie",R="/movie",r={baseURL:G,api_key:K,moviesEndPoint:U,defaultUrlImage:T,genreEndPoint:D,searchEndPoint:N,movieDetailsEndPoint:R},j={api_key:r.api_key},h=q.create({baseURL:r.baseURL,params:j}),H=async(e=1)=>{const{data:o}=await h(`${r.moviesEndPoint}?page=${e}`);return o},O=async()=>{const{data:e}=await h(`${r.genreEndPoint}`);return e},Y=async(e,o)=>{const{data:t}=await h(`${r.searchEndPoint}?page=${e}&query=${o}`);return t},z=async e=>{const{data:o}=await h(`${r.movieDetailsEndPoint}/${e}`);return o},b={getAllMovies:H,getGenres:O,getMovieByKeyword:Y,getMovieDetails:z},S=document.querySelector(".loader-backdrop"),V=async e=>{S.classList.toggle("is-hidden");try{return await b.getAllMovies(e)}catch(o){console.log(o.message)}finally{S.classList.toggle("is-hidden")}},P={getAllMovies:V},x=document.querySelector(".loader-backdrop"),W=async(e,o)=>{x.classList.toggle("loader-backdrop");try{return await b.getMovieByKeyword(e,o)}catch(t){console.log(t.message)}finally{x.classList.toggle("loader-backdrop")}},J={getMovieByKeyword:W},F="page",B={GENRES_KEY:F},Q="/codeMasters/assets/default-image-112f438b.jpg",X=document.querySelector(".movies-list"),Z=e=>{const o=JSON.parse(localStorage.getItem(B.GENRES_KEY));X.innerHTML=e.map(({title:t,poster_path:a,genre_ids:d,release_date:g,id:c})=>{const i=a===null?Q:r.defaultUrlImage+a,n=g.split("-")[0],l=o.filter(s=>d.includes(s.id)).map(s=>s.name).join(", ");return`
        <li class="movies-item" data-id="${c}">
          <img class="movies-img" src="${i}" alt="${t}"/>
          <p class="movies-title overflowWrap">${t}</p>
          <p class="movies-text overflowWrap">${l} | ${n}</p>
        </li>
      `}).join("")},p=5,w=(e,o="")=>{let t=1,a=1;const d=document.getElementById("pagination-container"),g=i=>{d.innerHTML="";const n=document.createElement("ul");n.classList.add("pagination-list");const l=document.createElement("li"),s=document.createElement("button");s.innerHTML="&#8592",s.classList.add("pagination-btn"),s.disabled=t===1,s.addEventListener("click",()=>{t>1&&c(t-1)}),l.appendChild(s),n.appendChild(l);let y=Math.max(1,t-Math.floor(p/2)),E=Math.min(i,t+Math.floor(p/2));t-1<Math.floor(p/2)&&(E=Math.min(a,p)),a-t<Math.floor(p/2)&&(y=Math.max(1,a-p+1));for(let m=y;m<=E;m+=1){const $=document.createElement("li"),u=document.createElement("button");u.classList.add("pagination-btn"),u.innerText=m.toString(),u.classList.toggle("pagination-current",m===t),u.addEventListener("click",()=>{t!==m&&c(m)}),$.appendChild(u),n.appendChild($)}const k=document.createElement("li"),v=document.createElement("button");v.innerHTML="&#8594",v.classList.add("pagination-btn"),v.disabled=t===i,v.addEventListener("click",()=>{t<i&&c(t+1)}),k.appendChild(v),n.appendChild(k),d.appendChild(n)},c=async i=>{t=i;const{total_pages:n,results:l}=await e(i,o);l&&(Z(l),a=n>500?500:n,g(a))};c(1)},ee=document.querySelector(".js__header-input"),te=e=>{const o=e.target.value.trim();o.length===0?w(P.getAllMovies):w(J.getMovieByKeyword,o)};ee.addEventListener("input",A(te,1e3));const oe=async()=>{try{const{genres:e}=await b.getGenres();localStorage.setItem(B.GENRES_KEY,JSON.stringify(e))}catch(e){console.log(e.message)}};oe();w(P.getAllMovies);const ne=document.querySelector(".modal-wrapper"),se=e=>{const{poster_path:o,original_title:t,genres:a,vote_average:d,vote_count:g,popularity:c,overview:i}=e,n=a.map(({name:E})=>E).join(" "),l=r.defaultUrlImage+o,s=t.toUpperCase(),y=Math.round(c);ne.innerHTML=`
    <img class="modal-img" src="${l}" alt="">
    <div class="modal-text-content-wrapper">
      <h3 class="modal-title">${s}</h3>
      <ul class="modal-info-list">
        <li class="modal-info-item">
          <p class="modal-info-text">Vote / Votes</p>
          <p class="modal-info-text">${d} / ${g}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Popularity</p>
          <p class="modal-info-text">${y}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Original Title</p>
          <p class="modal-info-text">${s}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Genre</p>
          <p class="modal-info-text">${n}</p>
        </li>
      </ul>
      <p class="modal-about">
        <span class="modal-about-title">About</span>
        ${i}
      </p>
      <div class="modal-btn-wrapper">
        <button type="button" class="modal-btn">Add to watched</button>
        <button type="button" class="modal-btn">Add to queue</button>
      </div>
    </div>
  `},ae=document.querySelector(".movies-list"),f=document.querySelector(".backdrop"),C=document.querySelector(".modal-btn-close"),ie=async e=>{if(e.target.classList.contains("movies-list")===!0)return;const o=e.target.closest("li").dataset.id;try{const t=await b.getMovieDetails(o);f.classList.remove("is-hidden"),se(t),window.addEventListener("keydown",I),C.addEventListener("click",L),f.addEventListener("click",_)}catch(t){console.log(t.message)}},L=()=>{f.classList.add("is-hidden"),window.removeEventListener("keydown",I),C.removeEventListener("click",L),f.removeEventListener("click",_)},I=e=>{e.code==="Escape"&&L()},_=e=>{e.target.classList.contains("backdrop")&&L()};ae.addEventListener("click",ie);const M=document.querySelector(".btn-scroll-up");window.addEventListener("scroll",()=>{window.scrollY>250?M.style.display="flex":M.style.display="none"});M.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
