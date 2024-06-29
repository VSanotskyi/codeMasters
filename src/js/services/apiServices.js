import axios from 'axios';

import urls from '../constants/urls.js';

const params = {
  api_key: urls.api_key,
};

const apiService = axios.create({ baseURL: urls.baseURL, params });

export default apiService;
