import axios from 'axios';
import queryString from 'query-string';
const apiConfig = axios.create({
  baseURL: 'http://localhost:4040/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: {
    serialize: (params) =>
      queryString.stringify({
        ...params,
      }),
  },
});

apiConfig.interceptors.response.use((res) => {
  if (res && res.data) return res.data;

  return res;
});

apiConfig.interceptors.request.use((config) => {
  return config;
});

export default apiConfig;
