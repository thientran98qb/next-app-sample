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

  if (session?.user.access_token && request.headers) {
    request.headers.Authorization = `Bearer ${session?.user?.access_token}`;
  }
  return request;
}, function (error) {
  return Promise.reject(error)
})

apiIns.interceptors.response.use(function (response) {
  return response
}, async (error) => {
  return Promise.reject(error);
})

export default apiIns

