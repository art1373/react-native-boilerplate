import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';
const http = axios.create({
  baseURL: 'https://www.example.com/v1',
  timeout: 7000,
  headers: { 'Content-Type': 'application/json' },
});

http.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default http;
