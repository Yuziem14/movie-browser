import axios from 'axios';

import api from './api';
import { shuffle } from '../utils';

export async function requestMovies(
  keywordsForSearch = [],
  shouldShuffle = true
) {
  let data = [];

  const requestParams = keywordsForSearch.map((keyword) => ({
    params: {
      s: keyword,
      type: 'movie',
    },
  }));

  const responses = await axios.all(
    requestParams.map((params) => api.get('', params))
  );

  responses.forEach((response) => {
    data = [...data, ...response.data.Search];
  });

  if (shouldShuffle) {
    data = shuffle(data);
  }

  return data;
}

export async function requestMovieById(id = '') {
  const response = await api.get('', {
    params: {
      i: id,
    },
  });

  return response.data;
}

export default requestMovies;
