import axios, { AxiosInstance, AxiosResponse} from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://mallaysback.pythonanywhere.com',
  timeout: 10000,
  headers:{'Content-Type':'application/json; charset=UTF-8'}
});

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response) {
      console.error('API xatosi:', error.response?.data || error.message);
    }
    return Promise.reject(error);
  }
);
export default apiClient;

export const endpoints = {
  about: {
    get: '/about-us/',
  },
  blogs: {
    get: '/blogs/',
  },
  galleries: {
    get: '/galleries/',
  },
  messages: {
    get: '/messages/',
  },
  portfolios: {
    get: '/portfolio/',
  },
  services: {
    get: '/services/',
  },
  slides: {
    get: '/slides/',
  },
  statistics: {
    get: '/statistics/',
  },
  teams: {
    get: '/teams/',
  },
  type_portfolios: {
    get: '/type-portfolios/',
  },
  footer: {
    get: '/footer/',
  },
  reviews:{
    get: '/reviews/',
  },
  projects:{
    get: '/projects/',
  },
  contacts:{
    post: '/contacts/',
  },
  email:{
    post: '/emails/',
  }
};
