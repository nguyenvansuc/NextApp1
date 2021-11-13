import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
  headers: {
    'content-type': 'application/json',
  },
});
