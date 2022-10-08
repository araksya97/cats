import { sendRequest } from '../api/axios';
import { IPagination } from '../interfaces';

/**
 * @param data
 */

export const getAllCategories = async () => {
    return sendRequest({
      method: 'GET',
      url: '/categories',
    });
  };


  export const getAllCats = async (query: IPagination) => {
  return sendRequest({
    method: 'GET',
    params: query,
    url: '/images/search',
  });
};