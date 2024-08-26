const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotos = searchedValue => {
  const urlParams = new URLSearchParams({
    key: '30578441-e990d3db57773391ef0ba167f',
    q: searchedValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 21,
  });

  return fetch(`${BASE_URL}?${urlParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
}