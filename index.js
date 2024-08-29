import{a as p,i as l,S as h}from"./assets/vendor-DOgVoBmD.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const f=r=>`
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
  `;p.defaults.baseURL="https://pixabay.com";const u=(r,a)=>{const o={params:{key:"30578441-e990d3db57773391ef0ba167f",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:15}};return p.get("/api/",o)},y=document.querySelector(".js-search-form"),i=document.querySelector(".js-gallery"),t=document.querySelector(".loader"),g=document.querySelector(".js-load-btn");let n=1,d="",L=0;const C=async r=>{try{if(r.preventDefault(),d=y.elements.query.value.trim(),n=1,g.classList.add("is-hidden"),!d){l.show({message:"Please enter a search term",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",iconColor:"#fff",iconUrl:"/img/warning.svg",backgroundColor:"#FC7A66",position:"topRight",closeOnClick:!0});return}t.classList.remove("is-hidden"),i.innerHTML="";const a=await u(d,n);if(a.data.hits.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",iconUrl:"/img/error.svg",backgroundColor:"#EF4040",maxWidth:"350px",closeOnClick:!0,position:"topRight",progressBarColor:"#B51B1B"}),t.classList.add("is-hidden"),i.innerHTML="";return}t.classList.add("is-hidden");const o=a.data.hits.map(s=>f(s)).join("");i.innerHTML=o,g.classList.remove("is-hidden"),L=i.querySelector("li").getBoundingClientRect().height,new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}catch{l.show({title:"Error",message:"Something went wrong. Please try again later.",messageColor:"#fff",titleColor:"#fff",messageSize:"16px",messageLineHeight:"24px",position:"topRight",closeOnClick:!0,maxWidth:"420px",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",iconUrl:"/img/error.svg"}),t.classList.add("is-hidden")}},x=async r=>{try{t.classList.remove("is-hidden"),n++;const a=await u(d,n),o=a.data.hits.map(s=>f(s)).join("");i.insertAdjacentHTML("beforeend",o),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),scrollBy({top:L*2,behavior:"smooth"}),n*15>=a.data.totalHits&&(g.classList.add("is-hidden"),l.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",titleColor:"#fff",messageSize:"16px",messageLineHeight:"24px",position:"topRight",closeOnClick:!0,maxWidth:"350px",backgroundColor:"#6c8cff",progressBarColor:"#4e75ff",iconUrl:"/img/sad_face.svg"})),t.classList.add("is-hidden")}catch{l.show({title:"Error",message:"Something went wrong. Please try again later.",messageColor:"#fff",titleColor:"#fff",messageSize:"16px",messageLineHeight:"24px",position:"topRight",closeOnClick:!0,maxWidth:"420px",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",iconUrl:"/img/error.svg"})}};y.addEventListener("submit",C);g.addEventListener("click",x);
//# sourceMappingURL=index.js.map
