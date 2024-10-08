import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { createGalleryTemplate } from '/js/render-functions';
import { fetchPhotos } from '/js/pixabay-api';

import errorIcon from '/img/error.svg';
import sadFaceIcon from '/img/sad_face.svg';
import warningIcon from '/img/warning.svg';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader');
const loadMoreBtnEl = document.querySelector('.js-load-btn');

let currentPage = 1;
let inputValue = '';
let cardHeight = 0;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const checkEndOfResults = totalHits => {
  const totalLoadedPhotos = currentPage * 15;
  if (totalLoadedPhotos >= totalHits) {
    loadMoreBtnEl.classList.add('is-hidden');
    iziToast.show({
      message: `We're sorry, but you've reached the end of search results.`,
      messageColor: '#fff',
      titleColor: '#fff',
      messageSize: '16px',
      messageLineHeight: '24px',
      position: 'topRight',
      closeOnClick: true,
      maxWidth: '350px',
      backgroundColor: '#6c8cff',
      progressBarColor: '#4e75ff',
      iconUrl: sadFaceIcon,
    });
  };
};

const showErrorMessage = () => {
  iziToast.show({
    title: 'Error',
    message: `Something went wrong. Please try again later.`,
    messageColor: '#fff',
    titleColor: '#fff',
    messageSize: '16px',
    messageLineHeight: '24px',
    position: 'topRight',
    closeOnClick: true,
    maxWidth: '420px',
    backgroundColor: '#EF4040',
    progressBarColor: '#B51B1B',
    iconUrl: '/img/error.svg',
  });
};

const onFormSubmit = async event => {
  try {
    event.preventDefault();

    inputValue = searchFormEl.elements.query.value.trim();
    currentPage = 1;
    loadMoreBtnEl.classList.add('is-hidden');

    if (!inputValue) {
      iziToast.show({
        message: 'Please enter a search term',
        messageColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '24px',
        iconColor: '#fff',
        iconUrl: warningIcon,
        backgroundColor: '#FC7A66',
        position: 'topRight',
        closeOnClick: true,
      });
      return;
    };

    loaderEl.classList.remove("is-hidden");
    galleryEl.innerHTML = '';

    const response = await fetchPhotos(inputValue, currentPage);

    if (response.data.hits.length === 0) {
      iziToast.show({
        message: `Sorry, there are no images matching your search query. Please try again!`,
        messageColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '24px',
        iconUrl: errorIcon,
        backgroundColor: '#EF4040',
        maxWidth: '350px',
        closeOnClick: true,
        position: 'topRight',
        progressBarColor: '#B51B1B',
      });

      loaderEl.classList.add("is-hidden");
      galleryEl.innerHTML = '';

      return
    };

    loaderEl.classList.add("is-hidden");

    const galleryCardsTemplate = response.data.hits.map(imgInfo => createGalleryTemplate(imgInfo)).join('');
    galleryEl.innerHTML = galleryCardsTemplate;
    loadMoreBtnEl.classList.remove('is-hidden');

    const galleryCardEl = galleryEl.querySelector('li');
    cardHeight = galleryCardEl.getBoundingClientRect().height;

    lightbox.refresh();

   checkEndOfResults(response.data.totalHits);

  }  catch(err) {
    showErrorMessage();
    loaderEl.classList.add("is-hidden");
  };

};

const onLoadBtnClick = async event => {
  try {
    loaderEl.classList.remove('is-hidden'); 

    currentPage++;
    const response = await fetchPhotos(inputValue, currentPage);

    const galleryCardsTemplate = response.data.hits.map(imgInfo => createGalleryTemplate(imgInfo)).join('');
    galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);

    lightbox.refresh();

    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    checkEndOfResults(response.data.totalHits);
    loaderEl.classList.add('is-hidden');

  } catch (err) {
    showErrorMessage();
  };
};

searchFormEl.addEventListener('submit', onFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadBtnClick);
