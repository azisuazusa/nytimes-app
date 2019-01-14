/*
 * @flow
 */
import constants from '../configs/constants';
import axios from 'axios';

const api = axios.create({ baseURL: constants.baseUrl });

const getArticles = (q: string, sort: string) : Promise<Array<any>> => {
  let params = {};
  if (q != '') params.q = q;
  if (sort != '') params.sort = sort;
  return api.get(constants.articleUrl, { params });
}
