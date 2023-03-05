import apiConfig from './apiConfig';

const postEnPoint = {
  create: '/post/create',
  getList: '/post/list',
  myPost: '/post/yourself',
  like: '/post/like',
  remove: 'post/remove',
};

const postApi = {
  create: (data) => {
    return apiConfig.post(postEnPoint.create, data, {
      params: {},
    });
  },
  getPost: (params) => {
    return apiConfig.get(postEnPoint.getList, {
      params: params,
    });
  },

  getMyPost: (params) => {
    return apiConfig.get(postEnPoint.myPost, {
      params: params,
    });
  },
  like: (data) => {
    return apiConfig.put(postEnPoint.like, data, { params: {} });
  },
  remove: (data) => {
    return apiConfig.delete(postEnPoint.remove, data, { params: {} });
  },
};

export default postApi;
