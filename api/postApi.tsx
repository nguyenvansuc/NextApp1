import { axiosClient } from './axiosClient';
const postApi = {
  async getAll(params?: any) {
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
  },

  async get(id?: any) {
    const url = `/${id}/`;
    const response = await axiosClient.get(url);
    if (response?.data) {
      return response.data;
    }
    return response;
  },

  add(data: any) {
    const url = `/`;
    return axiosClient.post(url, data);
  },

  update(data: any) {
    const url = `/${data.id}/`;
    return axiosClient.patch(url, data);
  },

  remove(id: any) {
    const url = `/${id}/`;
    return axiosClient.delete(url);
  },
};

export default postApi;

interface IdParams {
  params?: {
    id?: string;
  };
}
interface PostProps {
  id: any;
  title: string;
  body: string;
  userId: any;
}

export const getListId = async (params?: any) => {
  const response = await postApi.getAll(params);
  const listId: IdParams[] = response.map((post: PostProps) => ({
    params: {
      id: `${post?.id}`,
    },
  }));
  return listId;
};
