export const createGalleryTemplate = imgData => {
  return `
  <li class="gallery-card">
  <a class="gallery-link" href=${imgData.largeImageURL}>
    <img class="gallery-img" src="${imgData.webformatURL}" alt="${imgData.tags}" data-source=${imgData.largeImageURL} />
  </a>
<div class="data-wrapper">
<ul class="img-info">
  <li class="param-info">
  <h2 class="param-name">Likes</h2>
  <p class="param-value">${imgData.likes}</p></li>
  <li class="param-info">
  <h2 class="param-name">Views</h2>
  <p class="param-value">${imgData.views}</p></li>
  <li class="param-info">
  <h2 class="param-name">Comments</h2>
  <p class="param-value">${imgData.comments}</p></li>
  <li class="param-info">
  <h2 class="param-name">Downloads</h2>
  <p class="param-value">${imgData.downloads}</p></li>
</ul>
</div>
  </li>
  `;
};