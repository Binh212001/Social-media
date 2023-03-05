import authApi from '../../api/authApi';

export const LOGIN = 'LOGIN';

export const LOGIN__FAIL = 'LOGIN__FAIL';

export const REGISTER = 'REGISTER';

export const REGISTER__FAIL = 'REGISTER__FAIL';

export const ADD__FRIEND = 'ADD__FRIEND';
export const ADD__FRIEND__FAIL = 'ADD__FRIEND__FAIL';

export const REMOVE__FRIEND = 'REMOVE__FRIEND';
export const REMOVE__FRIEND__FAIL = 'REMOVE__FRIEND__FAIL';

export const LOGOUT = 'LOGOUT';
export const login = (data) => {
  return async (dispatch) => {
    try {
      const value = await authApi.login(data);
      dispatch({
        type: LOGIN,
        payload: value,
      });
    } catch (error) {
      dispatch({
        type: LOGIN__FAIL,
        payload: 'Login failure',
      });
    }
  };
};

export const signUp = (data) => {
  return async (dispatch) => {
    try {
      const value = await authApi.register(data);
      dispatch({
        type: REGISTER,
        payload: value,
      });
    } catch (error) {
      dispatch({
        type: REGISTER__FAIL,
        payload: 'Register Fail',
      });
    }
  };
};

export const addFriend = (userId, friendId) => {
  return {
    type: ADD__FRIEND,
    payload: {
      userId,
      friendId,
    },
  };
};

export const removeFriend = (userId, friendId) => {
  return {
    type: REMOVE__FRIEND,
    payload: { userId, friendId },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
