/*
 * @flow
 */
import constants from '../configs/constants';
import axios from 'axios';

const api = axios.create({ baseURL: constants.baseUrl });

const getBooks = (list: string) : Promise<Array<any>> => {
  let params = {};
  if (list != '') params.list = list;
  return api.get(constants.bookUrl, { params });
}
