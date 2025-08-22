import axios from 'axios';
/*import {refresh} from "./requests.ts";*/

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          // refresh(refreshToken).then((data) => {
          //     localStorage.setItem ("accessToken", data.accessToken);
          //     localStorage.setItem("refreshToken", data.refreshToken);
          // })
        } else {
          // window.location.href = "/login";
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
