import { apiurls } from './apiurls';
import axios from 'utils/axios';
const baseURL = 'http://localhost:8080/api/v1/';

const getUrl = (pathname: string) => {
  return baseURL + apiurls.paths[pathname as keyof Object] || '';
};

export const axiosRequest = (pathname: string, METHOD: string, inputDTO?: any, params?: any) => {
  const accessToken = localStorage.getItem('accessToken') || null;

  return axios({
    url: getUrl(pathname) + (params ? '/' + params : ''),
    method: METHOD,
    ...(inputDTO && { data: inputDTO }),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      ...(accessToken && { 'x-access-token': accessToken })
    }
  });
};
