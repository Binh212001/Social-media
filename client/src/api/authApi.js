import apiConfig from './apiConfig';

const authEnPoint = {
  register: '/auth/register',
  login: '/auth/login',
  addRemoveFriend: '/friend/action',
};

const authApi = {
  login: (data) => {
    return apiConfig.post(authEnPoint.login, data, {
      params: {},
    });
  },
  register: (data) => {
    return apiConfig.post(authEnPoint.register, data, {
      params: {},
    });
  },
  addRemoveFriend: (userId, friendId) => {
    console.log(
      '🚀 ~ file: authApi.js:21 ~ userId, friendId:',
      userId,
      friendId,
    );
    return apiConfig.put(
      authEnPoint.addRemoveFriend,
      { userId, friendId },
      {
        params: {},
      },
    );
  },
};

export default authApi;
