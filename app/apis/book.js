/*
 * @flow
 */
import constants from '../configs/constants';
import axios from 'axios';

const api = axios.create({ baseURL: constants.baseUrl });

const getBooks = (list: string) : Promise<any> => {
  let params = {};
  params.list = list;
  params['api-key'] = constants.apiKey;
  return api.get(constants.bookUrl, { params });
}

export default { getBooks };
