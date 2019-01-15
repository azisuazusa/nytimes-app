/*
 * @flow
 */
import axios from 'axios';
import constants from './constants';

const initAxios = () => {
  axios.defaults.baseURL = constants.baseUrl;
  axios.interceptors.request.use(config => {
    config.params = { 'api-key': constants.apiKey };
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
};

export default { initAxios };
