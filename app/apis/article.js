/*
 * @flow
 */
import constants from '../configs/constants';
import axios from 'axios';

const getArticles = (q: string, sort: string) : Promise<any> => {
  let params = {};
  if (q != '') params.q = q;
  if (sort != '') params.sort = sort;
  return axios.get(constants.articleUrl, { params });
}

export default { getArticles };
