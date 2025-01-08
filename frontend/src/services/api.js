import axios from 'axios';

// Create Axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

// Add interceptor to include Authorization header with token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add token to Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
