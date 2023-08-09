import axios from 'axios';
import { config } from '../../config';

const server_url = config.api_url;

const request = async (
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT',
  url: string,
  query: object,
  headers: object,
  data: any = {}
) => {
  const token = localStorage.getItem('token');
  return await axios.request({
    method: method,
    url: server_url + '' + url,
    params: query,
    headers: {
      //TODO add auth header
      authorization: `Bearer ${token}`,
      ...headers,
    },
    data: data,
  });
};

const get = async (url: string, query: object, headers: object = {}) => {
  const result = await request('GET', url, query, headers);
  return result;
};

const post = async (
  url: string,
  query: object,
  headers: object,
  data: object = {}
) => {
  const result = await request('POST', url, query, headers, data);
  return result;
};

const patch = async (
  url: string,
  query: object,
  headers: object,
  data: object = {}
) => {
  const result = await request('PATCH', url, query, headers, data);
  return result;
};
const put = async (
  url: string,
  query: object,
  headers: object,
  data: object = {}
) => {
  const result = await request('PUT', url, query, headers, data);
  return result;
};

const _delete = async (url: string, query: object, headers: object) => {
  const result = await request('DELETE', url, query, headers, {});
  return result;
};

export { get, post, patch, put, _delete };

