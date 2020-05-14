import axios from 'axios';

import Config from '../config/api';

const api = axios.create({
  baseURL: 'http://www.omdbapi.com',
});

api.interceptors.request.use(async (config) => {
  config.params.apiKey = Config.OMDB_API_KEY;

  return config;
});

export default api;
