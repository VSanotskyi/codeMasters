import{a as g,u as i,s as p}from"./assets/btnScrollUp-6bdf0ba9.js";import"./assets/vendor-cab2c1cb.js";const y=document.querySelector(".js-watched"),w=document.querySelector(".js-queue"),h=document.querySelector(".movies-list");y.addEventListener("click",f);const L=localStorage.getItem("watched"),u=JSON.parse(L);f();async function f(){const t=[];w.classList.remove("active"),y.classList.add("active");try{for(let e=0;e<u.length;e++){const s=await M(u[e]);t.push(s)}q(t),t.length||(h.innerHTML=`<p class="empty-list-text">There's nothing here yet. Please add movies to your list</p>`)}catch(e){console.log(e)}}async function M(t){const{data:e}=await g(`${i.movieDetailsEndPoint}/${t}`);return e}function q(t){const e=JSON.parse(localStorage.getItem(p.GENRES_KEY));h.innerHTML=t.map(({title:s,poster_path:a,genres:n,release_date:c,id:r})=>{const l=a===null?defaultImage:i.defaultUrlImage+a,d=c.split("-")[0],m=e.filter(o=>n.includes(o.id)).map(o=>o.name).join(", ");return`
        <li class="movies-item" data-id="${r}">
          <img class="movies-img" src="${l}" alt="${s}" loading="lazy"/>
          <p class="movies-title overflowWrap">${s}</p>
          <p class="movies-text overflowWrap">${m} | ${d}</p>
        </li>
      `}).join("")}const $=document.querySelector(".js-queue"),I=document.querySelector(".js-watched"),S=document.querySelector(".movies-list");$.addEventListener("click",j);const E=localStorage.getItem("queue"),v=JSON.parse(E);async function j(){const t=[];I.classList.remove("active"),$.classList.add("active");try{for(let e=0;e<v.length;e++){const s=await N(v[e]);t.push(s)}B(t),t.length||(S.innerHTML=`<p class="empty-list-text">There's nothing here yet. Please add movies to your list</p>`)}catch(e){console.log(e)}}async function N(t){const{data:e}=await g(`${i.movieDetailsEndPoint}/${t}`);return e}function B(t){const e=JSON.parse(localStorage.getItem(p.GENRES_KEY));S.innerHTML=t.map(({title:s,poster_path:a,genres:n,release_date:c,id:r})=>{const l=a===null?defaultImage:i.defaultUrlImage+a,d=c.split("-")[0],m=e.filter(o=>n.includes(o.id)).map(o=>o.name).join(", ");return`
        <li class="movies-item" data-id="${r}">
          <img class="movies-img" src="${l}" alt="${s}" loading="lazy"/>
          <p class="movies-title overflowWrap">${s}</p>
          <p class="movies-text overflowWrap">${m} | ${d}</p>
        </li>
      `}).join("")}
//# sourceMappingURL=commonHelpers2.js.map
