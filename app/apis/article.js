/*
 * @flow
 */
import constants from '../configs/constants';
import axios from 'axios';

const api = axios.create({ baseURL: constants.baseUrl });

const getArticles = (q: string, sort: string, page: number = 0) : Promise<any> => {
  let params = {};
  if (q != '') params.q = q;
  if (sort != '') params.sort = sort;
  params.page = page;
  params['api-key'] = constants.apiKey;
  return api.get(constants.articleUrl, { params });
}

export default { getArticles };
