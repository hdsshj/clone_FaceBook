import axios from 'axios';
import { getToken } from '../utils/auth';

const baseURL = process.env.REACT_APP_REMOTE_SERVER_URI;

const instance = axios.create({ baseURL });

const setToken = (config) => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['X-AUTH-TOKEN'] = `${getToken()}`;
  config.headers.withCredentials = true;
  return config;
};

instance.interceptors.request.use(setToken);

export default {
  GET: (endpoint, additionalPath) =>
    instance.get(`/api${endpoint}${additionalPath ? `/${additionalPath}` : ''}`),
  POST: (endpoint, body) => instance.post(`/api${endpoint}`, body),
  UPDATE: (endpoint, urlParam, body) =>
    instance.fatch(`/api${endpoint}/${urlParam}`, body),
  DELETE: (endpoint, urlParam) => instance.delete(`/api${endpoint}/${urlParam}`),
};
