import userApi from '../../api/userApi';

export const FRIEND__LIST = 'FRIEND__LIST';

export const FRIEND__LIST__FAIL = 'FRIEND__LIST__FAIL';
export const USER__LIST = 'USER__LIST';
export const USER__LIST__FAIL = 'USER__LIST__FAIL';

export const listFriend = (params) => {
  return async (dispatch) => {
    try {
      const data = await userApi.friend(params);

      dispatch({
        type: FRIEND__LIST,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FRIEND__LIST__FAIL,
      });
    }
  };
};
export const userList = (params) => {
  return async (dispatch) => {
    try {
      const data = await userApi.user(params);
      dispatch({
        type: USER__LIST,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER__LIST__FAIL,
      });
    }
  };
};
