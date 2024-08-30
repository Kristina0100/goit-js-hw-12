import{a as g,S as b,i as d}from"./assets/vendor-DOgVoBmD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const h=s=>`
  <li class="gallery-card">
  <a class="gallery-link" href=${s.largeImageURL}>
    <img class="gallery-img" src="${s.webformatURL}" alt="${s.tags}" data-source=${s.largeImageURL} />
  </a>
<div class="data-wrapper">
<ul class="img-info">
  <li class="param-info">
  <h2 class="param-name">Likes</h2>
  <p class="param-value">${s.likes}</p></li>
  <li class="param-info">
  <h2 class="param-name">Views</h2>
  <p class="param-value">${s.views}</p></li>
  <li class="param-info">
  <h2 class="param-name">Comments</h2>
  <p class="param-value">${s.comments}</p></li>
  <li class="param-info">
  <h2 class="param-name">Downloads</h2>
  <p class="param-value">${s.downloads}</p></li>
</ul>
</div>
  </li>
  `;g.defaults.baseURL="https://pixabay.com";const f=(s,r)=>{const t={params:{key:"30578441-e990d3db57773391ef0ba167f",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}};return g.get("/api/",t)},w="/img/error.svg",x="/img/warning.svg",S="/img/sad_face.svg",u=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),o=document.querySelector(".loader"),m=document.querySelector(".js-load-btn");let n=1,c="",y=0;const L=new b(".gallery a",{captionsData:"alt",captionDelay:250}),C=s=>{n*15>=s&&(m.classList.add("is-hidden"),d.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",titleColor:"#fff",messageSize:"16px",messageLineHeight:"24px",position:"topRight",closeOnClick:!0,maxWidth:"350px",backgroundColor:"#6c8cff",progressBarColor:"#4e75ff",iconUrl:S}))},v=()=>{d.show({title:"Error",message:"Something went wrong. Please try again later.",messageColor:"#fff",titleColor:"#fff",messageSize:"16px",messageLineHeight:"24px",position:"topRight",closeOnClick:!0,maxWidth:"420px",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",iconUrl:"/img/error.svg"})},E=async s=>{try{if(s.preventDefault(),c=u.elements.query.value.trim(),n=1,m.classList.add("is-hidden"),!c){d.show({message:"Please enter a search term",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",iconColor:"#fff",iconUrl:x,backgroundColor:"#FC7A66",position:"topRight",closeOnClick:!0});return}o.classList.remove("is-hidden"),l.innerHTML="";const r=await f(c,n);if(r.data.hits.length===0){d.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",iconUrl:w,backgroundColor:"#EF4040",maxWidth:"350px",closeOnClick:!0,position:"topRight",progressBarColor:"#B51B1B"}),o.classList.add("is-hidden"),l.innerHTML="";return}o.classList.add("is-hidden");const t=r.data.hits.map(e=>h(e)).join("");l.innerHTML=t,m.classList.remove("is-hidden"),y=l.querySelector("li").getBoundingClientRect().height,L.refresh(),C(r.data.totalHits)}catch{v(),o.classList.add("is-hidden")}},B=async s=>{try{o.classList.remove("is-hidden"),n++;const r=await f(c,n),t=r.data.hits.map(i=>h(i)).join("");l.insertAdjacentHTML("beforeend",t),L.refresh(),scrollBy({top:y*2,behavior:"smooth"}),C(r.data.totalHits),o.classList.add("is-hidden")}catch{v()}};u.addEventListener("submit",E);m.addEventListener("click",B);
//# sourceMappingURL=index.js.map
