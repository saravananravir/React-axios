import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://your-backend-api-url.onrender.com', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the config before the request is sent, e.g., adding auth tokens
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optional: Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    console.error('API call error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
