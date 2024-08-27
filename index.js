import{a as u,i as d,S as h}from"./assets/vendor-DOgVoBmD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const m of t.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g=r=>`
  <li class="gallery-card">
  <a class="gallery-link" href=${r.largeImageURL}>
    <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" data-source=${r.largeImageURL} />
  </a>
<div class="data-wrapper">
<ul class="img-info">
  <li class="param-info">
  <h2 class="param-name">Likes</h2>
  <p class="param-value">${r.likes}</p></li>
  <li class="param-info">
  <h2 class="param-name">Views</h2>
  <p class="param-value">${r.views}</p></li>
  <li class="param-info">
  <h2 class="param-name">Comments</h2>
  <p class="param-value">${r.comments}</p></li>
  <li class="param-info">
  <h2 class="param-name">Downloads</h2>
  <p class="param-value">${r.downloads}</p></li>
</ul>
</div>
  </li>
  `;u.defaults.baseURL="https://pixabay.com";const f=(r,s)=>{const a={params:{key:"30578441-e990d3db57773391ef0ba167f",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}};return u.get("/api/",a)},y=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),c=document.querySelector(".loader"),p=document.querySelector(".js-load-btn"),b=document.querySelector(".js-observered-element");let o=1,n="";const L={root:null,rootMargin:"0px 0px 400px 0px",threshold:1},v=async r=>{if(r[0].isIntersecting)try{o++;const s=await f(n,o),a=s.data.hits.map(i=>g(i)).join("");l.insertAdjacentHTML("beforeend",a),s.data.totalHits}catch(s){console.log(s)}},x=new IntersectionObserver(v,L),C=async r=>{try{if(r.preventDefault(),n=y.elements.query.value.trim(),o=1,p.classList.add("is-hidden"),!n){d.warning({message:"Please enter a search term",position:"topRight",closeOnClick:!0});return}c.classList.remove("is-hidden"),l.innerHTML="";const s=await f(n,o);if(s.data.hits.length===0){d.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",iconUrl:"/img/error.svg",backgroundColor:"#EF4040",maxWidth:"350px",closeOnClick:!0,position:"topRight",progressBarColor:"#B51B1B"}),c.classList.add("is-hidden"),l.innerHTML="";return}c.classList.add("is-hidden");const a=s.data.hits.map(e=>g(e)).join("");l.innerHTML=a,p.classList.remove("is-hidden"),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),x.observe(b)}catch{d.show({title:"Error",message:"Something went wrong. Please try again later.",messageColor:"#fff",titleColor:"#fff",messageSize:"16px",messageLineHeight:"24px",position:"topRight",closeOnClick:!0,maxWidth:"420px",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",iconUrl:"/img/error.svg"}),c.classList.add("is-hidden")}},w=async r=>{try{o++;const s=await f(n,o),a=s.data.hits.map(e=>g(e)).join("");l.insertAdjacentHTML("beforeend",a),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),o===s.data.totalHits&&(p.classList.add("is-hidden"),d.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",titleColor:"#fff",messageSize:"16px",messageLineHeight:"24px",position:"topRight",closeOnClick:!0,maxWidth:"350px",backgroundColor:"#6c8cff",progressBarColor:"#4e75ff",iconUrl:"/img/sad_face.svg"}))}catch{}};y.addEventListener("submit",C);p.addEventListener("click",w);
//# sourceMappingURL=index.js.map
