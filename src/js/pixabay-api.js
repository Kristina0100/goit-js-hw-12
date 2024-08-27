import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export const fetchPhotos = (searchedValue, page) => {
  const axiosParams = {
    params: {
      key: '30578441-e990d3db57773391ef0ba167f',
      q: searchedValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
};

  return axios.get(`/api/`, axiosParams);
};