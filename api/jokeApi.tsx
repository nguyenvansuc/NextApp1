import axios from 'axios';
const axiosClient = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/random',
  headers: {
    'content-type': 'application/json',
  },
});

const jokeApi = {
  async getAll(params?: any) {
    try {
      var qs = require('qs');
      const response = await axiosClient.get('/', {
        params: {
          ...params,
        },
        paramsSerializer: (params) => {
          //ví dụ với trường hợp size=[1,2] => &size=1&size=2
          return qs.stringify(params, { arrayFormat: 'repeat' });
        },
      });
      if (response?.data) {
        return response.data;
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
export default jokeApi;
