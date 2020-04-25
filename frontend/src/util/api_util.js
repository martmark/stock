import axios from 'axios';

export const getTwit = symbol => {
  return axios.get(`/api/twits/${symbol}`);
}