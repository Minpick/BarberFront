import axios from "axios";

export const BASE_URL = 'http://localhost:8081'

axios.interceptors.request.use(
   config => {
      setAuthorizationHeader();
      return config;
   },
   error => {
      return Promise.reject(error);
   }
);
const setAuthorizationHeader = () => {
   const token = localStorage.getItem('token');
   if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
   } else {
      delete axios.defaults.headers.common['Authorization'];
   }
};
const refreshToken = async () => {
   try {
      const response = await axios.post('http://localhost:8081/refreshToken', {
         refreshToken: localStorage.getItem('refreshToken'),
      })
      localStorage.setItem('token', response.data.token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

      return response.data.token;
   } catch (error) {
      localStorage.clear()
      throw error;
   }
};


axios.interceptors.response.use(
   (response) => response,
   async (error) => {
      if (error.response?.data === 'Нужна повторная авторизация') {
         localStorage.clear();
         return Promise.reject(error);
      }
      const originalRequest = error.config;
      originalRequest._retryCount = originalRequest._retryCount || 0;
      if ((error.response.status === 401 || error.response.status === 500) && originalRequest._retryCount < 1) {
         originalRequest._retryCount++;
         try {
            if (localStorage.length) {
               const newAccessToken = await refreshToken();
               originalRequest.headers['Authorization'] = 'Bearer ' + newAccessToken;
               if (newAccessToken) {
                  return axios(originalRequest);
               }
            }
         } catch (refreshError) {
            localStorage.clear()
            throw refreshError
         }
      }
      return Promise.reject(error);
   }
);

