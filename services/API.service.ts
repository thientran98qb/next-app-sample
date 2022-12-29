import axios from 'axios'
import { configs } from '../configs/app.config'
import { getSession } from 'next-auth/react';

const apiIns = axios.create({
  baseURL: configs.apiEnpoint,
  headers: {
    "Content-Type": "application/json"
  }
})

apiIns.interceptors.request.use(async (request) => {
  const session = await getSession();
  if (session) {
    if (request.headers) {
      request.headers.Authorization = `Bearer ${session?.user?.access_token}`;
    }
  }
  return request;
}, function (error) {
  return Promise.reject(error)
})

apiIns.interceptors.response.use(function (response) {
  return response
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;
    const access_token = await apiIns.post('/auth/refresh');
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token.data.access_token;
    return apiIns(originalRequest);
  }
  return Promise.reject(error);
})

export default apiIns

