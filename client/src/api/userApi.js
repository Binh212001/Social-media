import apiConfig from './apiConfig';

const userEnPoint = {
  friend: '/friend',
  user: '/user',
};

const userApi = {
  friend: (params) => apiConfig.get(userEnPoint.friend, { params }),
  user: (params) => apiConfig.get(userEnPoint.user, { params }),
};
export default userApi;
