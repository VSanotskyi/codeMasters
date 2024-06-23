import axios from "axios";

import {baseURL, api_key} from "../constants/urls.js";

const params = {
  api_key,
}

const apiService = axios.create({baseURL, params});

export {
  apiService,
}
