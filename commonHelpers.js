import{a as N,t as _}from"./assets/vendor-f9df95ff.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const I="https://api.themoviedb.org/3",C="82b205270d637f8e7c805273646956b7",w="https://image.tmdb.org/t/p/w200/",O="/discover/movie",A="/genre/movie/list",B="/search/movie",T="/movie",G={api_key:C},p=N.create({baseURL:I,params:G}),U=async(e=1)=>{const{data:t}=await p(`${O}?page=${e}`);return t},E=async()=>{const{data:e}=await p(`${A}`);return e},j=async e=>{const{data:t}=await p(`${B}?query=${e}`);return t},z=async e=>{const{data:t}=await p(`${T}/${e}`);return t},f="page",y="total_pages",D=document.querySelector(".movies-list"),S=(e,t)=>{D.innerHTML=e.map(({title:s,poster_path:n,genre_ids:o,release_date:a,id:l})=>{const g=t.filter(r=>o.includes(r.id)).map(r=>r.name).join(", "),v=a.split("-")[0];return`
    <li class="movies-item" data-id="${l}">
      <img class="movies-img" src="${w+n}" alt=""/>
      <p class="movies-title overflowWrap">${s}</p>
      <p class="movies-text overflowWrap">${g} | ${v}</p>
    </li>
    `}).join("")},b=async e=>{try{const{page:t,total_pages:s,results:n}=await U(e),{genres:o}=await E();n.length>0&&S(n,o),s>1&&(localStorage.setItem(f,t),localStorage.setItem(y,s))}catch(t){console.log(t.message)}},Y=document.querySelector(".js__header-input");Y.addEventListener("input",_(K,2e3));async function K(e){const t=e.target.value;try{const{results:s}=await j(t),{genres:n}=await E();if(!s.length){b();return}S(s,n)}catch(s){console.log(s.message)}}b();const V=document.querySelector(".pagination-container"),W=document.querySelectorAll(".page"),F=document.querySelector(".prev"),H=document.querySelector(".next");let i=Number(localStorage.getItem(f))?Number(localStorage.getItem(f)):1;const c=Number(localStorage.getItem(y))>500?500:Number(localStorage.getItem(y)),d=5,M=()=>{let e=Math.floor(d/2),t=Math.max(i-e,1),s=Math.min(i+e,c);s-t+1<d&&(t===1?s=Math.min(t+d-1,c):s===c&&(t=Math.max(s-d+1,1))),W.forEach((n,o)=>{const a=t+o;n.textContent=String(a),a===i?n.classList.add("pagination-current"):n.classList.remove("pagination-current")}),F.disabled=i===1,H.disabled=i===c},R=async e=>{e.target.classList.contains("page")&&(i=Number(e.target.textContent)),e.target.classList.contains("prev")&&(i-=1),e.target.classList.contains("next")&&(i+=1),b(i),M()};M();V.addEventListener("click",R);const J=document.querySelector(".modal-wrapper"),Q=e=>{const{poster_path:t,original_title:s,genres:n,vote_average:o,vote_count:a,popularity:l,overview:g}=e,v=n.map(({name:k})=>k).join(" "),r=w+t,L=s.toUpperCase(),q=Math.round(l);J.innerHTML=`
    <img class="modal-img" src="${r}" alt="">
    <div class="modal-text-content-wrapper">
      <h3 class="modal-title">${L}</h3>
      <ul class="modal-info-list">
        <li class="modal-info-item">
          <p class="modal-info-text">Vote / Votes</p>
          <p class="modal-info-text">${o} / ${a}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Popularity</p>
          <p class="modal-info-text">${q}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Original Title</p>
          <p class="modal-info-text">${L}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Genre</p>
          <p class="modal-info-text">${v}</p>
        </li>
      </ul>
      <p class="modal-about">
        <span class="modal-about-title">About</span>
        ${g}
      </p>
      <div class="modal-btn-wrapper">
        <button type="button" class="modal-btn">Add to watched</button>
        <button type="button" class="modal-btn">Add to queue</button>
      </div>
    </div>
  `},X=document.querySelector(".movies-list"),m=document.querySelector(".backdrop"),x=document.querySelector(".modal-btn-close"),Z=async e=>{if(e.target.classList.contains("movies-list")===!0)return;const t=e.target.closest("li").dataset.id;try{const s=await z(t);m.classList.remove("is-hidden"),Q(s),window.addEventListener("keydown",$),x.addEventListener("click",u),m.addEventListener("click",P)}catch(s){console.log(s.message)}},u=()=>{m.classList.add("is-hidden"),window.removeEventListener("keydown",$),x.removeEventListener("click",u),m.removeEventListener("click",P)},$=e=>{e.code==="Escape"&&u()},P=e=>{e.target.classList.contains("backdrop")&&u()};X.addEventListener("click",Z);const h=document.querySelector(".btn-scroll-up");window.addEventListener("scroll",()=>{window.scrollY>250?h.style.display="flex":h.style.display="none"});h.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
