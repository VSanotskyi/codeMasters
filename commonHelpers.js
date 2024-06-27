import{a as k}from"./assets/vendor-bdb8a163.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const N="https://api.themoviedb.org/3",_="82b205270d637f8e7c805273646956b7",b="https://image.tmdb.org/t/p/w200/",I="/discover/movie",C="/genre/movie/list",O="/search/movie",A="/movie",B={api_key:_},p=k.create({baseURL:N,params:B}),T=async(e=1)=>{const{data:t}=await p(`${I}?page=${e}`);return t},L=async()=>{const{data:e}=await p(`${C}`);return e},G=async e=>{const{data:t}=await p(`${O}?query=${e}`);return t},j=async e=>{const{data:t}=await p(`${A}/${e}`);return t},f="page",y="total_pages",z=document.querySelector(".movies-list"),w=(e,t)=>{z.innerHTML=e.map(({title:s,poster_path:n,genre_ids:o,release_date:a,id:r})=>{const g=t.filter(l=>o.includes(l.id)).map(l=>l.name).join(", "),v=a.split("-")[0];return`
    <li class="movies-item" data-id="${r}">
      <img class="movies-img" src="${b+n}" alt=""/>
      <p class="movies-title overflowWrap">${s}</p>
      <p class="movies-text overflowWrap">${g} | ${v}</p>
    </li>
    `}).join("")},E=async e=>{try{const{page:t,total_pages:s,results:n}=await T(e),{genres:o}=await L();n.length>0&&w(n,o),s>1&&(localStorage.setItem(f,t),localStorage.setItem(y,s))}catch(t){console.log(t.message)}},D=document.querySelector(".js__header-input");D.addEventListener("input",U);async function U(e){const t=e.currentTarget.value;try{const{results:s}=await G(t),{genres:n}=await L();w(s,n)}catch(s){console.log(s.message)}}E();const K=document.querySelector(".pagination-container"),V=document.querySelectorAll(".page"),W=document.querySelector(".prev"),Y=document.querySelector(".next");let i=Number(localStorage.getItem(f))?Number(localStorage.getItem(f)):1;const c=Number(localStorage.getItem(y))>500?500:Number(localStorage.getItem(y)),d=5,S=()=>{let e=Math.floor(d/2),t=Math.max(i-e,1),s=Math.min(i+e,c);s-t+1<d&&(t===1?s=Math.min(t+d-1,c):s===c&&(t=Math.max(s-d+1,1))),V.forEach((n,o)=>{const a=t+o;n.textContent=String(a),a===i?n.classList.add("pagination-current"):n.classList.remove("pagination-current")}),W.disabled=i===1,Y.disabled=i===c},F=async e=>{e.target.classList.contains("page")&&(i=Number(e.target.textContent)),e.target.classList.contains("prev")&&(i-=1),e.target.classList.contains("next")&&(i+=1),E(i),S()};S();K.addEventListener("click",F);const H=document.querySelector(".modal-wrapper"),R=e=>{const{poster_path:t,original_title:s,genres:n,vote_average:o,vote_count:a,popularity:r,overview:g}=e,v=n.map(({name:q})=>q).join(" "),l=b+t,h=s.toUpperCase(),P=Math.round(r);H.innerHTML=`
    <img class="modal-img" src="${l}" alt="">
    <div class="modal-text-content-wrapper">
      <h3 class="modal-title">${h}</h3>
      <ul class="modal-info-list">
        <li class="modal-info-item">
          <p class="modal-info-text">Vote / Votes</p>
          <p class="modal-info-text">${o} / ${a}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Popularity</p>
          <p class="modal-info-text">${P}</p>
        </li>
        <li class="modal-info-item">
          <p class="modal-info-text">Original Title</p>
          <p class="modal-info-text">${h}</p>
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
  `},J=document.querySelector(".movies-list"),m=document.querySelector(".backdrop"),M=document.querySelector(".modal-btn-close"),Q=async e=>{if(e.target.classList.contains("movies-list")===!0)return;const t=e.target.closest("li").dataset.id;try{const s=await j(t);m.classList.remove("is-hidden"),R(s),window.addEventListener("keydown",$),M.addEventListener("click",u),m.addEventListener("click",x)}catch(s){console.log(s.message)}},u=()=>{m.classList.add("is-hidden"),window.removeEventListener("keydown",$),M.removeEventListener("click",u),m.removeEventListener("click",x)},$=e=>{e.code==="Escape"&&u()},x=e=>{e.target.classList.contains("backdrop")&&u()};J.addEventListener("click",Q);
//# sourceMappingURL=commonHelpers.js.map
